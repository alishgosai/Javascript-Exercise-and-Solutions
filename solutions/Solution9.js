// Solution for Question 9

function filterEvens(arr) {
  let filtered = arr.filter((num) => num % 2 === 0);
  return filtered;
}

console.log(filterEvens([1, 2, 3, 4, 5])); //[2,4]

// ADDITIONAL SOLUTIONS
// filter for odd numbers
function filtere(arr) {
  let filtered = arr.filter((num) => num % 2 != 0);
  return filtered;
}

console.log(filtere([1, 2, 3, 4]));
