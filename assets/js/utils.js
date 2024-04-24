"use strict";
import { getProductFromDatabase } from "./database.management.js";

Array.prototype.shiftOutAndDelete = function (predicate) {
  var uniqueIterator;
  for (uniqueIterator in this) {
    if (predicate(this[uniqueIterator])) {
      return this.splice(uniqueIterator, 1)[0];
    }
  }
};

export function isValidNumberInputValue(value) {
  return !isNaN(value) && parseInt(value) > 0;
}

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
  $("#cart-quantity").html(userCart.length);
  $("#cart-items").empty("");
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
