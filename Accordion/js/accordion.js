$(document).ready(function() {
	$('.accordion .dropper').hide();
	$('.accordion a').click(function() {
		var toggler = $(this).attr('href');
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');
		$(toggler).slideToggle();
		$(this).parent().siblings().children('.dropper').slideUp();
	});
});