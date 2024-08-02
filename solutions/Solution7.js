// Solution for Question 7

function findMax(arr) {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 3, 5, 2])); //5
console.log(findMax([0, 100, 999])); // 999
