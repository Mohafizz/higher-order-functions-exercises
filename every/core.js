// Check to see if all elements in an array
// are even numbers.
function allEven(input) {
  var isElementEven = element => element % 2 === 0;
  return input.every(isElementEven);
}
// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.
function positiveMatrix(input) {
  var isGreaterThanZero = elements => elements > 0;
  var rowGreaterThanZero = row => row.every(isGreaterThanZero);

  return input.every(rowGreaterThanZero);
}

module.exports = {
  allEven,
  positiveMatrix
};
