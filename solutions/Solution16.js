// Solution for Question 16

function searchContacts(contacts, searchTerm) {
  return contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

const contactList = [
  { name: "Alice", phoneNumber: "1234567890" },
  { name: "Bob", phoneNumber: "0987654321" },
];

console.log(searchContacts(contactList, "Ali")); //[ { name: 'Alice', phoneNumber: '1234567890' } ]
