class Bookshelf {
  constructor() {
    this.fav_books = [];
  }

  addFavouriateBook(bookName) {
    if (!bookName.includes("Great")) {
      this.fav_books.push(bookName);
    }
  }

  printFavBooks() {
    console.log(`Fav books: ${this.fav_books.length}`);
    for (let books of this.fav_books) {
      console.log(books);
    }
  }
}

function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function books(bookNames) {
    for (let b of bookNames) {
      bookshelf.addFavouriateBook(b);
    }
    bookshelf.printFavBooks();
  });
}

var BOOK_API = "https://some.url/api";
var BOOKSHELF = new Bookshelf();
loadBooks(BOOKSHELF);

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
