import Book from './book.js';
import Form from './form.js';

const menuAdd = document.querySelector('.menu-add');
const menuContact = document.querySelector('.menu-contact');

const mainContainer = document.querySelector('.main');
const list = (booksArray) => {
  mainContainer.innerHTML = `<section id="list" class="list">
      <div class="section__title">
        <h1>All Awesome books</h1>
      </div>
      <div class="book__container">
      </div>
    </section>`;

  Book(booksArray);
};

const add = (addBook) => {
  menuAdd.addEventListener('click', () => {
    mainContainer.innerHTML = `<section class="form">
      <h2>Add a new book</h2>
      <form class="add-book-form" method="post" action="/">
        <input name="title" id="title" type="text" maxlength="30" placeholder="Title" required />
        <label for="title" hidden></label>
        <input name="author" id="author" type="text" maxlength="30" placeholder="Author" required />
        <label for="author" hidden></label>
        <div><button type="submit">Add</button></div>
      </form>
    </section>`;

    Form(addBook);
  });
};

const contact = () => {
  menuContact.addEventListener('click', () => {
    mainContainer.innerHTML = `<section class="contact">
      <h2>Contact information</h2>
      <div class="contact-lower">
        <p>
          Do you have any question or you just want to say "Hello"? <br />
          You can reach out to us!
        </p>
        <ul>
          <li>Our email: mail@mail.com</li>
          <li>Our phone number: 004422335566889</li>
          <li>Our Address: Streetname 22, 84503 City, Country</li>
        </ul>
      </div>
    </section>`;
  });
};

export { list, add, contact };
