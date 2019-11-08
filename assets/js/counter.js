jQuery(function ($) {
    if($('.counter').length){
        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });
    }

    if($('.countdown').length){
		$('.countdown').downCount({ date: '08/08/2016 12:00:00', offset: +1 });
    }
    $(".defaultCountdown")
    .countdown("2017/01/01", function(event) {
      $(this).text(
        event.strftime('%D days %H:%M:%S')
      );
    });

    
});

