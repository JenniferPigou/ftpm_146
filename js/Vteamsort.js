// Team members sort animation
jQuery(document).ready(function($){
	// Clone applications to get a second collection
	var $data = $(".teamItemsList").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.teamSort li').click(function(e) {
		$(".teamSort li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all-projects') {
			var $filteredData = $data.find('.project');
		} else {
			var $filteredData = $data.find('.project[data-type=' + filterClass + ']');
		}
		$(".teamItemsList").quicksand($filteredData, {
			duration: 800,
			easing: 'easeInOutQuad',
			adjustHeight: false
		},	function(){
			//callback function to re-apply hover effects on cloned elements
		});		
		$(this).addClass("active"); 			
		return false;
	});
});