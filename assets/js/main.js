import {
  MAIN_DATABASE,
  getProductFromDatabase,
} from "./database.management.js";

(function ($) {
  "use strict";

  /*---background image---*/
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({
        "background-image": "url(" + bgImgUrl + ")", // + meaning concat
      });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  /*---stickey menu---*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  /*---slider activation---*/
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 1,
    dots: true,
  });

  /*---product_column3 activation---*/
  $(".product_column3").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    rows: 2,
    prevArrow:
      '<button class="prev_arrow"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  /*---product row activation---*/
  $(".product_row1").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    prevArrow:
      '<button class="prev_arrow"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  /*---product row 2 activation---*/
  $(".product_row2").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 4,
    arrows: true,
    prevArrow:
      '<button class="prev_arrow"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        },
      },
    ],
  });

  /*---blog column3 activation---*/
  $(".blog_column3").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 3,
    dots: false,
    margin: 30,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  /*---blog active activation---*/
  $(".blog_thumb_active").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 1,
    dots: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });

  /*---single product activation---*/
  $(".single-product-active").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 4,
    margin: 15,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  /*---product navactive activation---*/
  $(".product_navactive").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      250: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });

  $(".modal").on("shown.bs.modal", function (e) {
    $(".product_navactive").resize();
  });

  $(".product_navactive a").on("click", function (e) {
    e.preventDefault();

    var $href = $(this).attr("href");

    $(".product_navactive a").removeClass("active");
    $(this).addClass("active");

    $(".product-details-large .tab-pane").removeClass("active show");
    $(".product-details-large " + $href).addClass("active show");
  });

  /*---testimonial active activation---*/
  $(".testimonial_active").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 1,
    dots: true,
  });

  /*--- Magnific Popup---*/
  $(".instagram_pupop").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*--- Magnific Popup Video---*/
  $(".video_popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  /*--- Magnific Popup Video---*/
  $(".port_popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*--- niceSelect---*/
  $(".select_option").niceSelect();

  /*--- counterup activation ---*/
  $(".counter_number").counterUp({
    delay: 10,
    time: 1000,
  });

  /*---  ScrollUp Active ---*/
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  /*---countdown activation---*/

  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">hrs</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>'
        )
      );
    });
  });

  /*---MailChimp---*/
  $("#mc-form").ajaxChimp({
    language: "en",
    callback: mailChimpResponse,
    // ADD YOUR MAILCHIMP URL BELOW HERE!
    url: "",
  });
  function mailChimpResponse(resp) {
    if (resp.result === "success") {
      $(".mailchimp-success").addClass("active");
      $(".mailchimp-success")
        .html("" + resp.msg)
        .fadeIn(900);
      $(".mailchimp-error").fadeOut(400);
    } else if (resp.result === "error") {
      $(".mailchimp-error")
        .html("" + resp.msg)
        .fadeIn(900);
    }
  }

  /*---slider-range here---*/
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [0, 500],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );

  /*niceSelect*/
  $(".niceselect_option").niceSelect();

  /*---elevateZoom---*/
  $("#zoom1").elevateZoom({
    gallery: "gallery_01",
    responsive: true,
    cursor: "crosshair",
    zoomType: "inner",
  });

  /*---portfolio Isotope activation---*/
  $(".portfolio_gallery").imagesLoaded(function () {
    var $grid = $(".portfolio_gallery").isotope({
      itemSelector: ".gird_item",
      percentPosition: true,
      masonry: {
        columnWidth: ".gird_item",
      },
    });

    /*---ilter items on button click---*/
    $(".portfolio_button").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });

      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  /*---tooltip---*/
  $('[data-bs-toggle="tooltip"]').tooltip();

  /*---Tooltip Active---*/
  $(
    ".action_links ul li a,.quick_button a,.social_sharing ul li a,.product_d_action a,.priduct_social a"
  ).tooltip({
    animated: "fade",
    placement: "top",
    container: "body",
  });

  /*---categories slideToggle---*/
  $(".categories_title").on("click", function () {
    $(this).toggleClass("active");
    $(".categories_menu_toggle").slideToggle("medium");
  });

  /*----------  Category more toggle  ----------*/

  $(".categories_menu_toggle li.hidden").hide();
  $("#more-btn").on("click", function (e) {
    e.preventDefault();
    $(".categories_menu_toggle li.hidden").toggle(500);
    var htmlAfter =
      '<i class="fa fa-minus" aria-hidden="true"></i> Less Categories';
    var htmlBefore =
      '<i class="fa fa-plus" aria-hidden="true"></i> More Categories';

    if ($(this).html() == htmlBefore) {
      $(this).html(htmlAfter);
    } else {
      $(this).html(htmlBefore);
    }
  });

  /*---mini cart activation---*/
  $(".cart_link > a").on("click", function () {
    $(".mini_cart,.off_canvars_overlay").addClass("active");
  });

  $(".mini_cart_close > a,.off_canvars_overlay").on("click", function () {
    $(".mini_cart,.off_canvars_overlay").removeClass("active");
  });

  /*---canvas menu activation---*/
  $(".canvas_open").on("click", function () {
    $(".Offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
  });

  $(".canvas_close,.off_canvars_overlay").on("click", function () {
    $(".Offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
  });

  /*---Off Canvas Menu---*/
  var $offcanvasNav = $(".offcanvas_main_menu"),
    $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
  $offcanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
    );

  $offcanvasNavSubMenu.slideUp();

  $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.siblings("ul").slideUp("slow");
      } else {
        $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
        $this.siblings("ul").slideDown("slow");
      }
    }
    if (
      $this.is("a") ||
      $this.is("span") ||
      $this.attr("clas").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") &&
      $this.attr("class").match(/\b('menu-item-has-children')\b/)
    ) {
      $this.toggleClass("menu-open");
    }
  });

  /*js ripples activation*/
  $(".js-ripples").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });

  // Cart management
  const dataBase = MAIN_DATABASE;

  $(".button-add-to-cart").click(function () {
    var productId = $(this).data("id");
    var quantity = +$("#product-quantity").val();

    var orderToAdd = {
      productId: productId,
      quantity: quantity,
    };

    addOrderToCart(orderToAdd);

    // update the cart display on DOM
    buildVisualCart();
  });

  $("body").on("click", ".ion-android-close.remove-from-cart", function () {
    // get cart item from client storage
    var userCart = retrieveUserCartFromLocalStorage();
    // get cart item from DOM
    var cartItemToDelete = $(this).parent().closest(".cart_item").get(0);

    // remove cart item from client storage
    userCart = userCart.filter(
      (order) => order.productId != cartItemToDelete.id
    );
    localStorage.setItem("panier", JSON.stringify(userCart));

    // remove & update the cart in the DOM
    buildVisualCart();
  });

  function addOrderToCart(orderToAdd) {
    var userCart = retrieveUserCartFromLocalStorage();
    var relatedOrderFromCart = userCart.find(
      (order) => order.productId === orderToAdd.productId
    );
    if (relatedOrderFromCart) {
      relatedOrderFromCart.quantity += +orderToAdd.quantity;
    } else {
      userCart.push(orderToAdd);
    }
    localStorage.setItem("panier", JSON.stringify(userCart));
  }

  /**
   * retrieves userCart from local storage
   * and convert it to array
   * @returns array of cart items: userCart
   */
  function retrieveUserCartFromLocalStorage() {
    var rawUserCart = localStorage.getItem("panier");
    var userCart = JSON.parse(rawUserCart);
    return Array.from(userCart);
  }

  function buildVisualCart() {
    var userCart = retrieveUserCartFromLocalStorage();
    var subTotal = 0;
    $("#cart-quantity").html(userCart.length);
    $("#cart-items").empty("");
    Array.from(userCart).forEach((order) => {
      const mappedProductFromDb = getProductFromDatabase(order.productId);
      subTotal += order.quantity * mappedProductFromDb.price;
      $("#cart-items").html(
        $("#cart-items").html() +
          `
        <div class="cart_item" id="${order.productId}">
          <div class="cart_img">
            <a href="#">
              <img src="${mappedProductFromDb.pics[0].url}" alt=""/>
            </a>
          </div>
          <div class="cart_info">
            <a href="#">${mappedProductFromDb.ref}</a>
            <span class="quantity">quantité: ${order.quantity}</span>
            <span class="price_cart">${mappedProductFromDb.price} Dhs</span>
          </div>
          <div class="cart_remove">
            <a href="#">
              <i class="ion-android-close remove-from-cart"></i>
            </a>
          </div>
        </div>
        `
      );
    });

    // calcul subtotal
    $("#subtotal").html(`${subTotal} Dhs`);
  }

  (function projectProductInPage() {
    // TODO: remove mocked product Id
    const productId = 1;
    var product = getProductFromDatabase(productId);
    $("#product-name").html(product.ref);
    $("#product-description").html(product.description);
    $("#product-price").html(`${product.price} Dhs`);
  })();

  (function setMockCart() {
    var cart = [
      { productId: 1, quantity: 10 },
      { productId: 2, quantity: 20 },
    ];
    localStorage.setItem("panier", JSON.stringify(cart));
    buildVisualCart();
  })();
})(jQuery);
