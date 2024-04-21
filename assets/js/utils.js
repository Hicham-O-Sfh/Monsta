Array.prototype.shiftOutAndDelete = function (predicate) {
  var uniqueIterator;
  for (uniqueIterator in this) {
    if (predicate(this[uniqueIterator])) {
      return this.splice(uniqueIterator, 1)[0];
    }
  }
};

function isValidNumberInputValue(value) {
  return !isNaN(value) && parseInt(value) > 0;
}

function saveCartInLocalStorage(cart) {
  localStorage.setItem("panier", JSON.stringify(cart));
}
