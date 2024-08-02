// Solution for Question 10

function removeDuplicates(arr) {
  let removedDublicates = [...new Set(arr)];
  return removedDublicates;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5, 6, 6]));
console.log(removeDuplicates([1, 2, 2, 3])); //[1,2,3]
