import {
  list as List,
  add as AddBook,
  contact as Contact,
} from './modules/pageSections.js';

import DateTime from './modules/dateTime.js';

class BookCollection {
  constructor(booksArray) {
    this.booksArray = booksArray;
  }

  renderBookList = () => {
    const menuList = document.querySelector('.menu-list');
    menuList.addEventListener('click', () => {
      List(this.booksArray);
      this.remove();
    });
    List(this.booksArray);
    AddBook(this.add);
    Contact();
    DateTime();
  };

  add = (book) => {
    if (book) {
      this.booksArray.push(book);
      localStorage.setItem('Books', JSON.stringify(this.booksArray));
    }
  };

  remove = () => {
    const buttonsRemove = document.querySelectorAll('.remove');

    buttonsRemove.forEach((button) => {
      button.addEventListener('click', () => {
        button.parentElement.remove();
        const { title } = button.dataset;
        this.booksArray.splice(
          this.booksArray.findIndex((item) => item.title === title),
          1,
        );
        localStorage.setItem('Books', JSON.stringify(this.booksArray));
      });
    });
  };
}

const book = new BookCollection(
  JSON.parse(localStorage.getItem('Books')) || [],
);
book.renderBookList();
book.add();
book.remove();
