$(document).ready(function () {
    let aboutOffset = $('#About').offset()?.top; // Corrected ID selector to match your HTML
    console.log(aboutOffset);

    $('.nav-links a').on('click', function (e) {
        e.preventDefault();  // Prevent default link behavior
        let secID = $(e.target).attr('href');
        let secOffset = $(secID).offset().top;

        $('html, body').animate({ scrollTop: secOffset }, 1000);
        $('.nav-links a').removeClass('active');
        $(e.target).addClass('active');
    });

    $(window).on('scroll', function () {
        let scrollHeight = $(window).scrollTop();

        if (scrollHeight > aboutOffset) {
            $('.navbar').css('background-color', 'red');
            $('.top').fadeIn(1000);
        } else {
            $('.navbar').css('background-color', 'transparent');
            $('.top').fadeIn(1000);  // Keep button visible by using fadeIn()
        }
    });

    $('.top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
});
