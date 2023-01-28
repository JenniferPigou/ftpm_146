
$(document).ready(function(){
	$('#contactForm').html5form({       
			async : false,
    	    messages : 'en', // Options 'en', 'es', 'it', 'de', 'fr', 'nl', 'be', 'br'
        	responseDiv : '.inputTips'
	})
	
	$('#nameField').bubbletip($('#tip0_up'), {
				positionAtElement: $('#contactForm'),
				deltaDirection: 'up',
				offsetTop: -55,
				bindShow: 'focus',
				bindHide: 'blur'
	});
	
	$('#mailField').bubbletip($('#tip1_up'), {
				positionAtElement: $('#contactForm'),
				deltaDirection: 'up',
				offsetTop: -55,
				bindShow: 'focus',
				bindHide: 'blur'
	});
	
	$('#messageField').bubbletip($('#tip2_up'), {
				positionAtElement: $('#contactForm'),
				deltaDirection: 'up',
				offsetTop: -55,
				bindShow: 'focus',
				bindHide: 'blur'
	});
	    
});
