jQuery(document).ready(function () {
    "use strict";

    /* ------- Preloader ------ */
    $(window).load(function () {
        $('.preloader').delay(250).slideUp('slow'); // set duration in brackets
    });

    window.addEventListener("scroll", function (e) {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > $(window).height()) {
            $('.goTop').css('display','block');
        }else{
            $('.goTop').css('display','none');
        }
    });
    $(".goTop").click(function(){$("html,body").animate({scrollTop: 0}, 600);});
    /* -------- Appears Menu 滚动显示scroll ------ */
    $(window).on('ready , scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function () {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });

    /* --------- One Page Navigation 页内锚点导航 -------- */
    // $('#collapsingNavbar').onePageNav({
    //     currentClass: 'active',
    //     scrollSpeed: 500,
    //     easing: 'linear'
    // });

    /* ---------- Wow Js ---------- */
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'wow animated', // animation css class (default is animated)
            offset: 250,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            }
        }
    );
    wow.init();

    /* ---------- ISoptope --------- */
    var $container = $('.portfolio-items');

    // filter items on button click
    $container.isotope({
        filter: '*',
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });


    $('#portfolio-filter ul li a').on('click', function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    var $optionSets = $('#portfolio-filter ul'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.on('click', function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('#portfolio-filter ul');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    var svgVobj2 = new Vivus('svg-continer-2', {
        file: 'assets/images/CloudcoreAI_animated.svg',
        // start: 'manual',
        onReady: function (myVivus) {
        }
    }, function () {
        $('#svg-continer-2').addClass('done');
    });

    window.vvv = function () {
        $('#svg-continer-2').removeClass('done');
        svgVobj2.reset();
        svgVobj2.play(1);
    };
    /*返回頂部*/

    /*底部切换*/
    $('.contact div').mouseover(function () {
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq(" + $(this).index() + ")").addClass('active');
    })

});
