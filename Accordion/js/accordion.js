$(document).ready(function() {
	$('.contentToggler').hide();
	$('.accordionMenu a').click(function() {
		var getID = $(this).attr('href');
		$('.contentToggler').hide();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');	

		if($(this).parent().attr("class")==('active')) {
			$(getID).show();
		} else {
			$(getID).hide();	
		}
	});
});