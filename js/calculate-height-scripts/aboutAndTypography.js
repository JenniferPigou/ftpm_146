$(document).ready(function() {

	/* get height of the about content container */
	var aboutTitleHeight = $('.contentTitle').outerHeight(true);
	var aboutContentHeight = $('.contentContainerFW').outerHeight(true);
	$("#aboutContentContainer").css("height", aboutContentHeight + aboutTitleHeight + 'px');
	/* alert(aboutContentHeight); */

})