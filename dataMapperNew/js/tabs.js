$(document).ready(function() {
    $(".features").hide();
    $('.features:first').show();
    $(".planChooser li a").click(function () {
        var tablink = $(this).attr('href');
        $(".features").fadeOut();
        $(tablink).stop().fadeIn();
        $(this).parents(".planChooser").find('li').removeClass("active");
        $(this).parents(".planChooser li").addClass("active");
        return false;
    });

});