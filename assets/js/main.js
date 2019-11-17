jQuery(function ($) {

  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
  $('.heroSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: true,
  });
  $('.MemberSlider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 4
      }
    }
  });
  $('.testimonialSlider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 2
      }
    }
  });
  $("#menuIcon").click(function () {
    $("#sideMenu").toggle("fast");
  });
  $(".imageSlider").owlCarousel({
    loop: true,
    autoplay: 3000,
    items: 1,
    dots: false,

  });
  $('.studentsCarusel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    dots: false,

  });
  $('.blogImgSlider').owlCarousel({
    loop: true,
    autoplay: 3000,
    margin: 20,
    nav: true,
    items: 1,
    dots: false,

  });


    $('select').selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });

  if ($('#galleryFilter').length) {
    jQuery(window).load(function () {
      var filter_container = jQuery('#galleryFilter');

      filter_container.children().css('position', 'relative');
      filter_container.masonry({
        singleMode: true,
        itemSelector: '.galleryItem:not(.hide)',
        animate: true,
        animationOptions: { duration: 800, queue: false }
      });
      jQuery(window).resize(function () {
        var temp_width = filter_container.children().filter(':first')();
        filter_container.masonry({
          columnWidth: temp_width,
          singleMode: true,
          itemSelector: '.galleryItem:not(.hide)',
          animate: true,
          animationOptions: { duration: 800, queue: false }
        });
      });
      jQuery('ul#galleryTabs a').on('click', function (e) {

        jQuery(this).addClass("active");
        jQuery(this).parents("li").siblings().children("a").removeClass("active");
        e.preventDefault();

        var select_filter = jQuery(this).attr('data-value');

        if (select_filter == "All" || $(this).parent().index() == 0) {
          filter_container.children().each(function () {
            if ($(this).hasClass('hide')) {
              $(this).removeClass('hide');
              $(this).fadeIn();
            }
          });
        } else {
          filter_container.children().not('.' + select_filter).each(function () {
            if (!$(this).hasClass('hide')) {
              $(this).addClass('hide');
              $(this).fadeOut();
            }
          });
          filter_container.children('.' + select_filter).each(function () {
            if ($(this).hasClass('hide')) {
              $(this).removeClass('hide');
              $(this).fadeIn();
            }
          });
        }

        filter_container.masonry();

      });
    });
  }
  if ($("area[rel^='prettyPhoto']").length) {
    $("area[rel^='prettyPhoto']").prettyPhoto();
  }
  if ($('#map-canvas').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  function initialize() {
    var MY_MAPTYPE_ID = 'custom_style';
    var map;
    var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
    var featureOpts = [
      {
        stylers: [
          { hue: '#f9f9f9' },
          { visibility: 'simplified' },
          { gamma: 0.7 },
          { saturation: -200 },
          { lightness: 15 },
          { weight: 0.6 }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 30 },
          { visibility: "simplified" }
        ]
      },
      {
        elementType: 'labels',
        stylers: [
          { visibility: 'on' }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          { color: '#ffffff' }
        ]
      }
    ];

    var mapOptions = {
      zoom: 13,
      scrollwheel: false,
      center: brooklyn,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  }
  function e() {
    var e = new Date;
        e.setDate(e.getDate() + 60);
    
    var dd = e.getDate();
    var mm = e.getMonth() + 1;
    var y = e.getFullYear();
    
    var futureFormattedDate = mm + "/" + dd + "/" + y + ' 12:00:00';
    
    return futureFormattedDate;
}
  $('.countDown').downCount({
    date: e(),
    offset: -4
  }, function () { });
  $('.EventCountDown').downCount({
    date: e(),
    offset: -4
  }, function () { });
  
});

