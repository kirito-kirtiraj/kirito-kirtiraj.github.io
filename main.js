$(document).ready(function() {
    $('.next-review-button').click(function() {
        $('.review-1, .review-2, .review-3').css('display', 'none');
        $('.review-button-1, .review-button-2, .review-button-3').css('background-color', '#999393');
    });

    $('.review-button-1').click(function() {
        $('.review-1').css('display', 'block');
        $('.review-button-1').css('background-color', '#ffffff');
    });

    $('.review-button-2').click(function() {
        $('.review-2').css('display', 'block');
        $('.review-button-2').css('background-color', '#ffffff');
    });
    
    $('.review-button-3').click(function() {
        $('.review-3').css('display', 'block');
        $('.review-button-3').css('background-color', '#ffffff');
    });
});