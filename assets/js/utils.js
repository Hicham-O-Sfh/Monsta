"use strict";

import {
  getAllProductsFromDatabase,
  getProductFromDatabase,
} from "./database.management.js";

/*---pluggin dynamic usage---*/
// Slick
export function applySlickForSectionRelatedProducts() {
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

// OwlCarousel
export function applyOwlCarousel() {
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

// ElevateZoom
export function applyElevateZoom() {
  $("#zoom1").elevateZoom({
    gallery: "gallery_01",
    responsive: true,
    cursor: "crosshair",
    zoomType: "inner",
  });
}

export function isValidNumberInputValue(value) {
  return !isNaN(value) && parseInt(value) > 0;
}

// Cart management
export function saveCartInLocalStorage(cart) {
  localStorage.setItem("panier", JSON.stringify(cart));
}

export function addOrderToCart(orderToAdd) {
  var userCart = retrieveUserCartFromLocalStorage();
  var relatedOrderFromCart = userCart.find(
    (order) => order.productId === orderToAdd.productId
  );
  if (relatedOrderFromCart) {
    relatedOrderFromCart.quantity += +orderToAdd.quantity;
  } else {
    userCart.push(orderToAdd);
  }
  saveCartInLocalStorage(userCart);
}

/**
 * retrieves userCart from local storage
 * and convert it to array
 * @returns array of cart items: userCart
 */
export function retrieveUserCartFromLocalStorage() {
  var rawUserCart = localStorage.getItem("panier");
  var userCart = JSON.parse(rawUserCart);
  return Array.from(userCart);
}

export function getCurrentDisplayedProductId() {
  const url = new URL(window.location.href);
  const productId = +url.searchParams.get("productId");
  return productId;
}

export function buildVisualCart() {
  var userCart = retrieveUserCartFromLocalStorage();
  var subTotal = 0;
  $("#subtotal").html(`${subTotal} Dhs`);

  // add cart items quantity to the quantity tag html element (green circle)
  $("#cart-quantity").html(userCart.length);

  // empty & clean cart display, to fill it properly
  $("#cart-items").empty("");

  // loop over all added orders in cart, and display each one correctly
  Array.from(userCart).forEach((order) => {
    getProductFromDatabase(order.productId)
      .then((mappedProductFromDb) => {
        const productMainPic = mappedProductFromDb.pics.shiftOutAndDelete(
          (pic) => pic.isMain === true
        ).smallPicUrl;
        subTotal += order.quantity * mappedProductFromDb.price;
        $("#cart-items").append(
          `
          <div class="cart_item" id="${order.productId}">
            <div class="cart_img">
              <a href="/product-details.html?productId=${mappedProductFromDb.id}">
                <img src="${productMainPic}" alt=""/>
              </a>
            </div>
            <div class="cart_info">
              <a href="/product-details.html?productId=${mappedProductFromDb.id}">${mappedProductFromDb.ref}</a>
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

        // calcul subtotal
        $("#subtotal").html(`${subTotal} Dhs`);
      })
      .catch((error) => {
        alert("Erreur lors du chargement du panier", error);
      });
  });
}

export function projectProductInPage() {
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
}

export function projectRelatedProductsInPage() {
  getAllProductsFromDatabase(6)
    .then((products) => {
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
                      prod.pics.shiftOutAndDelete((pic) => pic.isMain === true)
                        .bigPicUrl
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
      applySlickForSectionRelatedProducts();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function projectBestSellingProductsInFooter() {
  $("#footer-best-selling-products").html(`
    <h3>✅ Produits les plus vendus</h3>
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
}
