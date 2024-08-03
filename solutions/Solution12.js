// Solution for Question 12

function formatMessages(message, timestamp) {
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${message} (${hours}: ${minutes}:${seconds});`;
}

console.log(formatMessages('Hello', 1021281083000208))