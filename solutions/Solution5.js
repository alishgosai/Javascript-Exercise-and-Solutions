// Solution for Question 5

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("Alish")); // 2

