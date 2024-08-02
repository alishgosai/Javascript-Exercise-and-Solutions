// Solution for Question 4

function reverseString(str) {
  let reversedString = str.split("").reverse().join("");
  return reversedString;
}

console.log(reverseString("Hello"));    //olleH
console.log(reverseString("ahahahah")); //hahahaha
