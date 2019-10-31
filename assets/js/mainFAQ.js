jQuery(function ($) {


	$('.up').each(function(){
		$(this).click(function(){ 
			$('html,body').animate({ scrollTop: 0 }, 'slow');
			return false; 
		});
	});


	$('.faqTitle').click(function () {
        $(this).find('i:first').toggleClass('fa fa-chevron-down fa fa-chevron-up');
    })

    $('.faqTitle').click(function () {
		$(".faqTitle").not(this).parent().find(".children").slideUp(400)
		$(this).parent().find('.children').slideToggle(400);
		
    });
    $(".faqTitle").on("click", "i", function(e) { e.preventDefault() });


});

