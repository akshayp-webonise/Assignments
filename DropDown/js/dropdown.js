$(document).ready(function() {
	$(".innerList").hide();

	// Hover Code

	// $(".headerLinks>li").hover(function() {
	// 	$(this).children('.innerList').stop().slideToggle();
	// });

	// Click Code

	$(".headerLinks a").click(function() {
		var	getID = $(this).attr('href');
		$(".innerList").hide();		
		$(getID).parent().siblings().removeClass('active');
		$(getID).parent().toggleClass('active');
		if($(this).parent().attr("class")==('active')) {
			$(getID).show();
		} else {
			$(getID).hide();	
		}
	});

	$(document).mouseup(function (e) {
	    var container = $(".innerList");

	    if (!container.is(e.target) 
	        && container.has(e.target).length === 0)
	    {
	        container.hide();
	    }
	});

});