// Solution for Question 6

function multiplyArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
}

console.log(multiplyArray([2, 3, 4])); //24
console.log(multiplyArray([1, 1, 1])); //1
