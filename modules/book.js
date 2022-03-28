const renderBook = (booksArray) => {
  const container = document.querySelector('.book__container');
  if (booksArray.length > 0) {
    booksArray.forEach((book) => {
      const content = `<div class="book">
          <p>"${book.title}" by ${book.author}</p>
          <button class="remove" data-title="${book.title}">Remove</button>
        </div>`;
      container.innerHTML += content;
    });
  } else {
    container.innerHTML = '<h3>No books yet!</h3>';
  }
};

export default renderBook;
