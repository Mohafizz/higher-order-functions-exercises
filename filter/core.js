function onlyEven(array) {
  var isEven = array.filter(array => array % 2 === 0);
  return isEven;
}

function onlyOneWord(array) {
  var splitSentence = sentence => sentence.split(" ").length === 1;
  return array.filter(splitSentence);
}

function positiveRowsOnly(array) {
  return array.filter(rows => rows.every(element => element > 0));
}

function truthyValuesOnly(array) {
  return array.filter(string => (string ? true : false));
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
