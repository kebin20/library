// HTML Components
const bookContainer = document.querySelector(".book-container");
const overlay = document.querySelector(".overlay");

//Book detail values
const bookName = document.getElementById("bookName");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("haveRead");

//Buttons
const addBookButton = document.querySelector(".add-book-button");
const saveBookButton = document.querySelector(".save-book-button");
const bookModal = document.querySelector(".book-modal");
const clearDetailsButton = document.querySelector(".clear-button");

//Render the add book screen
let bookScreenOn = false;

addBookButton.addEventListener("click", renderAddBookScreen);

saveBookButton.addEventListener("click", () => {
  addBookData();
  bookScreenOn = false;
  bookModal.classList.remove("visible");
  bookModal.classList.add("hidden");
  overlay.style.display = "none";
  bookData[bookData.length - 1].showBookDataHtml(bookData);
  clearDetails();
});

clearDetailsButton.addEventListener("click", clearDetails);

function clearDetails() {
  bookName.value = "";
  author.value = "";
  pages.value = "";
  haveRead.value = "";
}

function renderAddBookScreen() {
  bookScreenOn = true;
  bookModal.classList.remove("hidden");
  bookModal.classList.add("visible");
  overlay.style.display = "flex";
}

//Push new inputed books into bookData array
function addBookData() {
  bookData.push(
    new Book({
      name: bookName.value,
      author: author.value,
      pages: pages.value,
      read: haveRead.value,
    })
  );
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
    for (let book of bookData) {
      // bookData.map((book) => {
      return (bookContainer.innerHTML += `
       <div class="book" id="showBook">
       <label for="bookName">Name: ${name}</label>
       <label for="author">Author: ${author}</label>
       <label for="pages">Pages: ${pages}</label>
       <label for="haveRead">Have read?: ${read}</label>
       </div>
       `);
    }
  }
}

//Modal Function
const closeButton = document.getElementById("modal-close-btn");

closeButton.addEventListener("click", () => {
  bookModal.classList.remove("visible");
  bookModal.classList.add("hidden");
  overlay.style.display = "none";
});
