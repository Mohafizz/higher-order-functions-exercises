function sum(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

const row = (accumulator, currentValue) => accumulator.concat(currentValue);
const element = (accumulator, currentValue) => accumulator * currentValue;
function productAll(matrix) {
  return matrix.reduce(row).reduce(element);
}

const string = (acc, cur) => acc + cur + ", ";
function luckyNumbers(array) {
  return array
    .reduce(string, "Your lucky numbers are: ")
    .trim()
    .slice(0, -1)
    .concat(".");
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
