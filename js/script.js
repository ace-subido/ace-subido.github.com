$(document).ready(function () {
    $('#popover').tooltip();
    /* **** some super fancy animations? **** */  

    $('h1').delay(200).animate({
        'opacity': '1',
        'margin-top': '+=10px'
    }, { duration: 700, easing: 'easeOutSine' });

    $('h2').delay(400).animate({
        'opacity': '1',
        'margin-top': '+=10px'
    }, { duration: 700, easing: 'easeOutSine' });

    $('#dots').delay(400).animate({
        'opacity': '1',
        'margin-top': '+=10px'
    }, { duration: 700, easing: 'easeOutSine' });

    $('p:first-child').delay(600).animate({
        'opacity': '1',
        'margin-top': '+=10px'
    }, { duration: 1000, easing: 'easeOutSine' });

    $('p:nth-child(2)').delay(600).animate({
        'opacity': '1',
        'margin-top': '+=10px'
    }, { duration: 1000, easing: 'easeOutSine' });

    $('p:nth-child(3)').delay(600).animate({
        'opacity': '1',
        'margin-top': '+=10px'
    }, { duration: 1000, easing: 'easeOutSine' });

    $('p:last-child').delay(1200).animate({
        'opacity': '1',
        'margin-left': '+=20px'
    }, { duration: 1000, easing: 'easeOutSine' });
});