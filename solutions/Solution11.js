
// Solution for Question 11

function getAvailableBooks(books) {
    return books
      .filter(book => book.isAvailable) // Filter books that are available
      .map(book => book.title);          // Map to get an array of titles
  }
  
  // Example usage:
  const books = [
    { title: 'Book 1', isAvailable: true },
    { title: 'Book 2', isAvailable: false },
    { title: 'Book 3', isAvailable: true },
    { title: 'Book 4', isAvailable: false }
  ];
  
  console.log(getAvailableBooks(books)); // Output: ['Book 1', 'Book 3']
  