$(document).ready(function() {
	$(".innerList").hide();
	$(".subMenu").hide();
	// Hover Code

	$(".headerLinks>li").hover(function() {
		$(this).children('.innerList').stop().slideToggle();
	});

	$(".innerList li").hover(function() {
		$(this).children('ul').stop().slideToggle();
	});



	// Click Code

	// $(".headerLinks>li>a").click(function() {
	// 	var	getID = $(this).attr('href');
	// 	$(".innerList").hide();		
	// 	$(getID).parent().siblings().removeClass('active');
	// 	$(getID).parent().toggleClass('active');
	// 	if($(this).parent().attr("class")==('active')) {
	// 		$(getID).show();
	// 	} else {
	// 		$(getID).hide();
	// 	}
	// });

	// $(".innerList>li>a").click(function() {
	// 	var	getIDTwo = $(this).attr('href');
	// 	$(".subMenu").hide();		
	// 	$(getIDTwo).parent().siblings().removeClass('active');
	// 	$(getIDTwo).parent().toggleClass('active');
	// 	if($(this).parent().attr("class")==('active')) {
	// 		$(getIDTwo).show();
	// 	} else {
	// 		$(getIDTwo).hide();
	// 	}
	// });

	// $(document).mouseup(function (e) {
	//     var container = $(".innerList");

	//     if (!container.is(e.target) 
	//         && container.has(e.target).length === 0)
	//     {
	//         container.hide();
	//         container.parent().removeClass('active');
	//     }

	//     var containerTwo = $(".subMenu");

	//     if (!containerTwo.is(e.target) 
	//         && containerTwo.has(e.target).length === 0)
	//     {
	//         containerTwo.hide();
	//         containerTwo.parent().removeClass('active');
	//     }
	// });

});