// Solution for Question 15

function calculateTotalExpenses(expenses) {
  let total = 0; // to keep track of total amount

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  return total;
}

console.log(
  calculateTotalExpenses([
    { date: "2024-01-01", amount: 50 },
    { date: "2024-02-02", amount: 40 },
  ])
);//90

//ANOTHER WAY

const calculateTotalExpenses2 = (expenses) =>
  expenses.reduce((total, expense) => total + expense.amount, 0);

console.log(
  calculateTotalExpenses2([
    { date: "2024-01-01", amount: 50 },
    { date: "2024-02-02", amount: 40 },
  ])
);//90
