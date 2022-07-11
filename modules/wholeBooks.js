import Store from './storage.js';
// Awesome class: Hnadle UI Tasks
export default class awesomeBooks {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => awesomeBooks.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById('book-list');
    const listBook = document.createElement('div');
    listBook.classList.add('list-book');
    listBook.innerHTML = `
                <p>"${book.title}"</p>
                <p>by</p>
                <p>${book.author}</p>
                <button class="delete">Remove</button>
            `;

    list.appendChild(listBook);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}