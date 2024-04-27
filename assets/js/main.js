import {
  getAllProductsFromDatabase,
  getProductFromDatabase,
} from "./database.management.js";
import {
  addOrderToCart,
  buildVisualCart,
  getCurrentDisplayedProductId,
  isValidNumberInputValue,
  retrieveUserCartFromLocalStorage,
  saveCartInLocalStorage,
} from "./utils.js";

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
  function activeteSlickForSectionRelatedProducts() {
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
  }

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
  function applyOwlCarousel() {
    $(".single-product-active").owlCarousel({
      autoplay: false,
      loop: true,
      nav: true,
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
  }

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
  function applyElevateZoom() {
    $("#zoom1").elevateZoom({
      gallery: "gallery_01",
      responsive: true,
      cursor: "crosshair",
      zoomType: "inner",
    });
  }

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
  $("#button-add-to-cart").click(function () {
    const productId = getCurrentDisplayedProductId();
    const quantity = +$("#product-quantity").val();
    const orderToAdd = {
      productId: productId,
      quantity: quantity,
    };

    addOrderToCart(orderToAdd);

    // update the cart display on DOM
    buildVisualCart();
  });

  $("#product-quantity").on("input", function () {
    $("#button-add-to-cart").prop(
      "disabled",
      !isValidNumberInputValue($(this).val())
    );
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
    saveCartInLocalStorage(userCart);

    // remove & update the cart in the DOM
    buildVisualCart();
  });

  (function projectBestSellingProductsInFooter() {
    /**
     * todo :
     * add links to
     * "FAQ",
     * "Our Services",
     * "Contact us",
     * "Catalogue"
     * Instagram & Tik Tok
     * to the footer
     */
    $("#footer-best-selling-products").html(`
      <h3>Produits les plus vendus</h3>
    `);
    const bestSellingProductsIds = [1, 2];
    bestSellingProductsIds.forEach((productId) => {
      getProductFromDatabase(productId)
        .then((product) => {
          $("#footer-best-selling-products").append(
            `
            <div class="simple_product_items">
              <div class="simple_product_thumb">
                <a href="/product-details.html?productId=${product.id}">
                  <img 
                  src="${
                    product.pics.shiftOutAndDelete((pic) => pic.isMain === true)
                      .bigPicUrl
                  }" 
                  alt=""/>
                </a>
              </div>
              <div class="simple_product_content">
                <div class="product_name">
                  <h3>
                    <a href="/product-details.html?productId=${product.id}">
                      ${product.ref}
                    </a>
                  </h3>
                </div>
                <div class="product_price">
                  <span class="current_price">${product.price} Dhs</span>
                </div>
              </div>
            </div>
            `
          );
        })
        .catch((error) =>
          console.log("Error while fetching best selling products", error)
        );
    });
  })();

  (function projectProductInPage() {
    // get productId from query string
    const productId = getCurrentDisplayedProductId();

    getProductFromDatabase(productId)
      .then((product) => {
        $("#product-name").html(product.ref);
        $("#product-price").html(`${product.price} Dhs`);
        $("#product-description").html(product.description);
        $("#second-product-description").html(product.secondDescription);

        // product's pictures & zoom management
        const productMainPic = product.pics.shiftOutAndDelete(
          (pic) => pic.isMain === true
        ).bigPicUrl;
        product.pics.forEach((pic) => {
          $("#gallery_01").append(
            `
          <li>
            <a
              href="#"
              class="elevatezoom-gallery active"
              data-update=""
              data-image="${pic.bigPicUrl}"
              data-zoom-image="${pic.bigPicUrl}">
              <img
                src="${pic.smallPicUrl}"
                alt="zo-th-1"/>
            </a>
          </li>
          `
          );
        });
        applyOwlCarousel();

        $("#zoom1").prop("src", productMainPic);
        $("#zoom1").data("zoom-image", productMainPic);
        applyElevateZoom();

        // disable the skeleton loader
        $(".big-image-skeleton").removeClass("big-image-skeleton");
        $(".text-skeleton").removeClass("text-skeleton");
      })
      .catch((error) => {
        alert("Erreur lors du chargement du produit :", error);
      });
  })();

  (function projectRelatedProductsInPage() {
    getAllProductsFromDatabase(12)
      .then((products) => {
        products = [
          ...JSON.parse(JSON.stringify(products)),
          ...JSON.parse(JSON.stringify(products)),
          ...JSON.parse(JSON.stringify(products)),
          ...JSON.parse(JSON.stringify(products)),
        ];
        $("#related-products-section").empty();
        products.forEach((prod) => {
          $("#related-products-section").append(
            `
            <div class="custom-col-5">
              <div class="single_product">
                <div class="product_thumb">
                  <a 
                    class="primary_img" 
                    href="/product-details.html?productId=${prod.id}">
                    <img 
                      src="${
                        prod.pics.shiftOutAndDelete(
                          (pic) => pic.isMain === true
                        ).bigPicUrl
                      }" alt="" />
                  </a>
                </div>
                <div class="product_content">
                  <h3>
                    <a href="/product-details.html?productId=${prod.id}">
                      ${prod.ref}
                    </a>
                  </h3>
                  <span class="current_price">${prod.price} Dhs</span>
                </div>
              </div>
            </div>
            `
          );
        });
        $(".product_section").removeClass("d-none");
        activeteSlickForSectionRelatedProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  })();

  (function setMockCart() {
    var cart = [
      { productId: 1, quantity: 10 },
      { productId: 2, quantity: 20 },
    ];
    saveCartInLocalStorage(cart);
    buildVisualCart();
  })();
})(jQuery);
