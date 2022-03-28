const formAction = (addBook) => {
  const form = document.querySelector('.add-book-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { title, author } = form.elements;
    const formData = {
      title: title.value,
      author: author.value,
    };
    addBook(formData);
    title.value = '';
    author.value = '';
  });
};

export default formAction;
