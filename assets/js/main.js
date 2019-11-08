jQuery(function ($) {

    if($('.counter').length){
        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });
    }
    if($('.defaultCountdown').length){
		var newYear = new Date(); 
		newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
		$('.defaultCountdown').countdown({until: newYear}); 
    }
    if($('.countdown').length){
		$('.countdown').downCount({ date: '08/08/2016 12:00:00', offset: +1 });
    }


    
});

