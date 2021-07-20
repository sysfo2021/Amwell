(function ($) {
  ("use strict");

  //scrollspy menu
  $("body").scrollspy({
    target: "#mainmenu",
    offset: 100,
  });

  // Barfiller js
  $(".bar1").barfiller({
    duration: 2000,
  });



  //$(".project-gallery").mixItUp();

  //   magnific popup activation
  $(".video-play-btn").magnificPopup({
    type: "video",
  });
  $(".img-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    },
  });

  // testimonial-slider
  var $testimonialSlider = $(".testimonial-slider");
  $testimonialSlider.owlCarousel({
    loop: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    nav: true,
    nav: true,
    dots: false,
    autoplayTimeout: 6000,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      576: {
        items: 1,
        nav: false,
      },
      950: {
        items: 1,
        nav: false,
      },
      960: {
        items: 1,
        nav: false,
      },
      1200: {
        items: 1,
      },
    },
  });

  // team_slider
  var $team_slider = $(".team_slider");
  $team_slider.owlCarousel({
    loop: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    nav: true,
    dots: false,
    margin: 30,
    autoplay: false,
    center: true,
    autoplayTimeout: 8000,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  // blog-slider
  //var $blog_slider = $(".blog-slider");
  //$blog_slider.owlCarousel({
  //  loop: true,
  //  nav: false,
  //  dots: false,
  //  margin: 30,
  //  autoplay: true,
  //  autoplayTimeout: 6000,
  //  smartSpeed: 1200,
  //  responsive: {
  //    0: {
  //      items: 1,
  //    },
  //    576: {
  //      items: 1,
  //    },
  //    768: {
  //      items: 2,
  //    },
  //    1200: {
  //      items: 3,
  //    },
  //    1920: {
  //      items: 3,
  //    },
  //  },
  //});

  // partner-slider
  var $brand_slider = $(".brand-slider");
  $brand_slider.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 2,
      },
      450: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1920: {
        items: 5,
      },
    },
  });

  // Portfolio Gallery slick part //

  $(".big-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-img",

    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          horizontal: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slider-img").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        vertical: false,
        slidesToShow: 3,
      },
    }, ],
    asNavFor: ".big-image",
    dots: false,
    arrows: true,
    prevArrow: '<i class="fa fa fa-chevron-left slidPrv4"></i>',
    nextArrow: '<i class="fa fa-chevron-right slidNext4"></i>',
    centerPadding: "0px",
    centerMode: true,
    focusOnSelect: true,
  });

  /** Product Details  carousel **/
  //var $product_slider = $(".all-slider");
  //$product_slider.owlCarousel({
  //  loop: false,
  //  dots: false,
  //  nav: true,
  //  navText: [
  //    "<i class='fa fa-angle-left'></i>",
  //    "<i class='fa fa-angle-right'></i>",
  //  ],
  //  margin: 0,
  //  autoplay: false,
  //  items: 4,
  //  autoplayTimeout: 6000,
  //  smartSpeed: 1000,
  //  responsive: {
  //    0: {
  //      items: 4,
  //    },
  //    768: {
  //      items: 4,
  //    },
  //  },
  //});

  ///** Product Details  carousel **/
  //$(".related-product-slider").owlCarousel({
  //  loop: true,
  //  dots: false,
  //  nav: true,
  //  navText: [
  //    "<i class='fa fa-angle-left'></i>",
  //    "<i class='fa fa-angle-right'></i>",
  //  ],
  //  margin: 30,
  //  autoplay: false,
  //  items: 4,
  //  autoplayTimeout: 6000,
  //  smartSpeed: 1000,
  //  responsive: {
  //    0: {
  //      items: 1,
  //    },
  //    576: {
  //      items: 2,
  //    },
  //    768: {
  //      items: 3,
  //    },
  //    992: {
  //      items: 3,
  //    },
  //    1200: {
  //      items: 4,
  //    },
  //  },
  //});


  // bottom to top js start
  $(".bottomtotop").hide();
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 800) {
      $(".bottomtotop").show();
    } else {
      $(".bottomtotop").hide();
    }
    if ($(".navigation").offset().top > 0) {
      $(".navigation").addClass("stiky-nav");
    } else {
      $(".navigation").removeClass("stiky-nav");
    }
  });
  $(".bottomtotop").on("click", function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  //  preloader js start
  $(window).on('load', function () {
    $('#preloader').fadeOut()
  })
}($))