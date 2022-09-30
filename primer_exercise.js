const fav_books = [];

function addFavouriateBook(bookName) {
  if (!bookName.includes("Great")) {
    fav_books.push(bookName);
  }
}

function printFavBooks() {
  console.log(`Fav books: ${fav_books.length}`);
  for (let books of fav_books) {
    console.log(books);
  }
}

addFavouriateBook("Great Book");
addFavouriateBook("Not Great Book");
addFavouriateBook("Book");
addFavouriateBook("Graape Books");

printFavBooks();
