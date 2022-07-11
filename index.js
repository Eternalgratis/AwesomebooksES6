/* eslint max-classes-per-file: ["error", 3] */
import Book from './modules/book.js';
import Store from './modules/storage.js';
import awesomeBooks from './modules/wholeBooks.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

// Event: Display Books
document.addEventListener('DOMContentLoaded', awesomeBooks.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to UI
  awesomeBooks.addBookToList(book);

  // Store.addBook(book);
  Store.addBook(book);

  // clear fields
  awesomeBooks.clearField();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  awesomeBooks.deleteBook(e.target);

  Store.removeBook(e.target.previousElementSibling.textContent);
});

// Nav link
// Date and time
const date = document.querySelector('.date');
const setDataTime = () => {
  const now = DateTime.now();
  const datedisplay = now.toLocaleString(DateTime.DATETIME_FULL);
  date.innerHTML = datedisplay;
};
setDataTime();

const bookList = document.querySelector('.bookList');
const bookAdd = document.querySelector('.bookAdd');
const contactInfo = document.querySelector('.contact-info');

const navLink = document.querySelectorAll('.nav');
navLink.forEach((n, index) => n.addEventListener('click', () => {
  navLink.forEach((link, number) => {
    if (index === number) {
      link.classList.add('bgcolor');
    } else {
      link.classList.remove('bgcolor');
    }
  });
  if (index === 0) {
    bookList.classList.remove('hide');
    bookAdd.classList.add('hide');
    contactInfo.classList.add('hide');
  } else if (index === 1) {
    bookList.classList.add('hide');
    bookAdd.classList.remove('hide');
    contactInfo.classList.add('hide');
  } else {
    bookList.classList.add('hide');
    bookAdd.classList.add('hide');
    contactInfo.classList.remove('hide');
  }
}));
