$(document).ready(function() {

		/* Initialize Rating Function */
		/* This first line is hiding the results of the users rating, if you want that visible delete it or wrap a comment around */
	    $('.ratingResultWrapper').css("display", "none");
	    /* The line bellow you specify the rating div and i rate count in the parenthesis. In the second line you specify where to append the rating results */
	    $('#ratingIconsWrapper').ratings(5).bind('ratingchanged', function(event, data) {
		  $('#ratingResult').text(data.rating);
	    });
	    
})