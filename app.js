// HTML Components
const bookContainer = document.querySelector(".book-container");

//Book detail values
const bookName = document.getElementById("bookName");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("haveRead");

//Buttons
const addBookButton = document.querySelector(".add-book-button");
const saveBookButton = document.querySelector(".save-book-button");
const bookModal = document.querySelector(".book-modal");
const clearBookDetails = document.querySelector(".clear-button");

//Render the add book screen
let bookScreenOn = false;

addBookButton.addEventListener("click", renderAddBookScreen);

function renderAddBookScreen() {
  bookScreenOn = true;
  bookModal.classList.remove("hidden");
  bookModal.classList.add("visible");
}

//Render newly inputted books onto screen
saveBookButton.addEventListener("click", () => {
  newBook.showBookDataHtml();
  addBookData();
  bookScreenOn = false;
  bookModal.classList.remove("visible");
  bookModal.classList.add("hidden");
});

//Push new inputed books into bookData array
function addBookData() {
  bookData.push({
    name: bookName.value,
    author: author.value,
    pages: pages.value,
    read: haveRead.value,
  });
  console.log(bookData);
}

//Data array
let bookData = [];

//Constructor
class Book {
  constructor(data) {
    Object.assign(this, data);
  }

  showBookDataHtml(data) {
    const { name, author, pages, read } = this;
    return (bookContainer.innerHTML = `
       <div class="book" id="showBook">
       <label for="bookName">Name: ${name}</label>
       <label for="author">Author: ${author}</label>
       <label for="pages">Pages: ${pages}</label>
       <label for="haveRead">Have read?: ${read}</label>
       </div>
       `);
  }
}

const newBook = new Book([bookData]);

// const bookForm = document.getElementById('book-form')

// bookForm.addEventListener('click', function(e){
//     e.preventDefault()

//     const bookFormData = new FormData(bookForm)
//     const bookName = bookFormData.get('bookName')
//     const author = bookFormData.get('author')
//     const pages = bookFormData.get('pages')
//     const haveRead = bookFormData.get('haveRead')
//     bookContainer.innerHTML = `
//        <div class="book" id="showBook">
//        <label for="bookName">Name:${name}</label>
//        <label for="author">Author:${author}</label>
//        <label for="pages">Pages:${pages}</label>
//        <label for="haveRead">Have read?: ${read}</label>
//        </div>
//        `
// }
