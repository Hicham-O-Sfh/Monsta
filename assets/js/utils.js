Array.prototype.shiftOutAndDelete = function (predicate) {
  var uniqueIterator;
  for (uniqueIterator in this) {
    if (predicate(this[uniqueIterator])) {
      return this.splice(uniqueIterator, 1)[0];
    }
  }
};
