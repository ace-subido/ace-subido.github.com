$(function () {
    $('#slides').cycle({
        fx: 'fade',
        timeout: 5000,
        pager: '#nav',
        slideExpr: 'img'
    });
});

jQuery(document).ready(function ($) {
    $("a.thumbnail").fancybox();
});
	

