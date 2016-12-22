$(document).ready(function() {
	$('.accordion p').hide();
	$('.accordion a').click(function() {
		$(this).parent().addClass('active');
		$(this).next('p').slideDown();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().siblings().children('p').slideUp();
	});
});