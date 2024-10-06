// Solution for Question 13

function calculateAverageRating(ratings) {
  let total = 0;

  // loop through all rating and sum them
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i];
  }

  //calculating average
  let average = total / ratings.length;

  return average;
}

console.log(calculateAverageRating([2, 2, 3, 5, 6, 7])); //4.167

//OTHer method
//using REDUCE array jmmethod to calculate the sum and then the average.
function calculateAverageRating2(ratings) {
  //useing reduce to sum upn all ratings
  let total = ratings.reduce((sum, rating) => sum + rating, 0);

  let average = total / ratings.length;
  return average;
}

console.log(calculateAverageRating2([1, 2, 3, 4, 5])); // 3

