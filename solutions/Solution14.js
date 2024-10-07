// Solution for Question 14

function convertToCelsius(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;

  return celsius;
}
console.log(convertToCelsius(68)); //20


//Another way
//using ARROW FUNCITON

const convertToCelsius2 = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
console.log(convertToCelsius2(68)); //20
