(function ($) {

    "use strict";

    if ($('#portfolio-filter li a')) {
        $('#portfolio-filter li a').click(function (e) {
            e.preventDefault();
            $('#portfolio-filter li').removeClass('activeFilter');
            $(this).parent().addClass('activeFilter');
            var filter = $(this).data('filter');
            if (filter == 'all') {
                $('.gallery-item').fadeOut('slow');
                $('.gallery-item').fadeIn('slow');
            } else {
                $('.gallery-item').fadeOut('slow');
                $('.' + filter).fadeIn('slow');
            }
        });
    }

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();


    //Submenu Dropdown Toggle
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }


    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }


    //Progress Bar / Levels
    if ($('.progress-levels .progress-box .bar-fill').length) {
        $(".progress-box .bar-fill").each(function () {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width', progressWidth + '%');
            //$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
        });
    }

    if ($('.project-tab').length) {
        $('.project-tab .product-tab-btns .p-tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).hasClass('actve-tab')) {
                return false;
            } else {
                $('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                $('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
                $(target).addClass('active-tab');
            }
        });
    }

    if ($('.project-carousel').length) {
        $('.project-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 4
                },
                1600: {
                    items: 4
                }
            }
        });
    }


    //Four Item Carousel
    if ($('.four-item-carousel').length) {
        $('.four-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1300: {
                    items: 4
                }
            }
        });
    }


    // Sponsors Carousel
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }
    // Sponsors Carousel
    if ($('.sponsors-carousel-two').length) {
        $('.sponsors-carousel-two').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        });
    }

    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function () {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(numberWithCommas(this.countNum));
                    }
                });
            }

        }, {accY: 0});
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }

    //Product Tabs
    if ($('.prod-tabs .tab-btn').length) {
        $('.prod-tabs .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            $('.prod-tabs .tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.prod-tabs .tab').fadeOut(0);
            $('.prod-tabs .tab').removeClass('active-tab-box');
            $('.prod-tabs .tab').removeClass('active-tab');
            $(target).fadeIn(500);
            $(target).addClass('active-tab-box');
        });

    }


    //Single Item Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            smartSpeed: 1000,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    //two Item Carousel
    if ($('.two-item-carousel').length) {
        $('.two-item-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 1000,
            autoplay: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }

    //Single Item Carousel
    if ($('.three-item-carousel').length) {
        $('.three-item-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 1000,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    //Single Item Carousel
    if ($('.four-item-carousel').length) {
        $('.four-item-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 1000,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                }
                ,
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }


    //Custom Seclect Box
    if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
    }

    // Gallery masonary style
    if ($('.masonary-gallery').length) {
        $('.masonary-gallery').isotope({
            layoutMode: 'masonry'
        });
    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }


    //Jquery Spinner / Quantity Spinner
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }

    //Price Range Slider
    if ($('.range-slider-price').length) {

        var priceRange = document.getElementById('range-slider-price');

        noUiSlider.create(priceRange, {
            start: [30, 300],
            limit: 1000,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 10,
                'max': 500
            }
        });

        var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');

        priceRange.noUiSlider.on('update', function (values, handle) {
            (handle ? limitFieldMax : limitFieldMin).value = values[handle];
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    if ($('.time-countdown').length) {

        $('.time-countdown').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function (event) {
                $(this).html('<h2>' + event.strftime('%D : %H : %M : %S') + '</h2>');
            });
        });


    }
    ;
    if ($('.time-countdown-two').length) {

        $('.time-countdown-two').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function (event) {
                $(this).html('<li> <div class="box"> <span class="days">' + event.strftime('%D') + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + event.strftime('%H') + '</span> <span class="timeRef">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">' + event.strftime('%M') + '</span> <span class="timeRef">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">' + event.strftime('%S') + '</span> <span class="timeRef">seconds</span> </div> </li>');
            });
        });


    }
    if($(".makeDataTatble").length){
        $(".makeDataTatble").dataTable({
            destroy: true,
            "oLanguage": {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar en bloques de _MENU_ registros",
                "sZeroRecords":  "No se encontraron resultados",
                "sInfo":  "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
                "sInfoEmpty":  "Mostrando desde 0 hasta 0 de 0 registros",
                "sInfoFiltered":  "(filtrado de _MAX_ registros en total)",
                "sInfoPostFix":  "",
                "sSearch":  "Buscar:",
                "sUrl":  "",
                "oPaginate": {
                    "sFirst":  "Primero",
                    "sPrevious":  "Anterior",
                    "sNext":  "Siguiente",
                    "sLast":  "Último",
                }
            }
        });
    }
    ;


    //Contact Form Validation
    // if ($('#contact-form').length) {
    //     $("#contact-form").validate({
    //         submitHandler: function (form) {
    //             var form_btn = $(form).find('button[type="submit"]');
    //             var form_result_div = '#form-result';
    //             $(form_result_div).remove();
    //             form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
    //             var form_btn_old_msg = form_btn.html();
    //             form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
    //             $(form).ajaxSubmit({
    //                 dataType: 'json',
    //                 success: function (data) {
    //                     if (data.status == 'true') {
    //                         $(form).find('.form-control').val('');
    //                     }
    //                     form_btn.prop('disabled', false).html(form_btn_old_msg);
    //                     $(form_result_div).html(data.message).fadeIn('slow');
    //                     setTimeout(function () {
    //                         $(form_result_div).fadeOut('slow')
    //                     }, 6000);
    //                 }
    //             });
    //         }
    //     });
    // }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: false,       // trigger animations on mobile devices (default is true)
                live: true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();
    });

})(window.jQuery);