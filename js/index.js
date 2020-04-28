{
    //header-----------------------
    let header = $('.banner');
    let range = 200;

    if ($(window).width() > 768) {
        $(window).on('scroll', function () {
            var scrollTop = $(this).scrollTop(),
                height = header.outerHeight(),
                offset = height / 2,
                calc = 1 - (scrollTop - offset + range) / range;
            header.css({ 'opacity': calc });
            if (calc > '2') {
                header.css({ 'opacity': 1 });
            } else if (calc < '0') {
                header.css({ 'opacity': 0.2 });
            }
        });
    }
    //header-----------------------


    // gallery-----------------------
    let $sm = 480;
    let $md = 768;

    function resizeThis() {
        $imgH = $('.middle img').width();
        if ($(window).width() >= $sm) {
            $('.left,.right,.section').css('height', $imgH);
        } else {
            $('.left,.right,.section').css('height', 'auto');
        }
    }
    resizeThis();

    $(window).resize(function () {
        resizeThis();
    });
    $(window).scroll(function () {
        $('.section').each(function () {
            let $elementPos = $(this).offset().top;
            let $scrollPos = $(window).scrollTop();
            let $sectionH = $(this).height();
            let $h = $(window).height();
            let $sectionVert = (($h / 2) - ($sectionH / 4));
            if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
                $(this).addClass('animate');
            } else {
                $(this).removeClass('animate');
            }
        });
    });
    // gallery----------------------


    // course-----------------------
    // $('.card').click(function () {
    //     $(this).toggleClass('flipped');
    // });
    $(".flip_border").click(function () {
        if ($(this).parent().hasClass("flip_to_back")) {
            $(this).parents(".card_inner").addClass("flip");
        } else {
            $(this).parents(".card_inner").removeClass("flip");
        }
    })

    // course-----------------------

    
    // toTop-----------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("#toTop").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
    });
    // toTop-----------------------

    // animation-----------------------
    $(function () {
        $(window).scroll(function () {
            let y = $(this).scrollTop();
            if (y > 700) {
                $('.content-area .text').addClass('animate');
            };
        });
    });//banner

    $('.menu_container a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
        return false;
    })//to id below
}