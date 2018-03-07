// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(array) {
  return array.some(element => element > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(array) {
  return array.some(word => word > 10);
}

// Check to see if any of the elements in
// the matrix are true.
function truePossibilities(array) {
  return array.some(row => row.some(bool => bool === true));
}

// Check to see if 'Lost' is in
// the phrase (using some).
function lostCarcosa(array) {
  return array.some(string => string.split(" ").some(word => word === "Lost"));
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
