const myLibrary = [
  {
    'title': 'The Last Wish',
    'author': 'Andrej Sapkowski',
    'pages': 384,
    'read': 'READ'
  }
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  }

}

function addBookToLibrary() {
  const addTitle = bookDialog.querySelector('#title').value;
  const addAuthor = bookDialog.querySelector('#author').value;
  const addPages = bookDialog.querySelector('#pages').value;
  const addStatus = bookDialog.querySelector('#status').value;
  myLibrary.push(new Book(addTitle, addAuthor, addPages, addStatus));
  updateTable();
}

const addBookBtn = document.getElementById('addBookBtn');
const bookDialog = document.getElementById('bookDialog');
const confirmBtn = bookDialog.querySelector('#confirmBtn');
const bookForm = document.getElementById('bookForm');

addBookBtn.addEventListener('click', () => {
  bookDialog.showModal();
});

confirmBtn.addEventListener('click', (event) => {
  if(bookForm.checkValidity()) {
    event.preventDefault();
    addBookToLibrary();
    bookForm.reset();
    bookDialog.close();
  }
});


function updateTable() {
  const old_tbody = document.querySelector('#table > tbody');
  const new_tbody = document.createElement('tbody');

  for (let i = 0; i < myLibrary.length; i++) {
    let newRow = new_tbody.insertRow(i);

    let number = newRow.insertCell();
    number.textContent = i + 1; // number 

    let title = newRow.insertCell();
    title.textContent = myLibrary[i].title;

    let author = newRow.insertCell();
    author.textContent = myLibrary[i].author;

    let pages = newRow.insertCell();
    pages.textContent = myLibrary[i].pages;

    let read = newRow.insertCell();
    read.textContent = myLibrary[i].read;

    let actions = newRow.insertCell();
    let deleteBtn = document.createElement('img');
    deleteBtn.src = 'images/delete-circle.svg';
    deleteBtn.className = 'actionBtn';
    deleteBtn.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      updateTable();
    });
    actions.appendChild(deleteBtn);
  }

  old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}

updateTable();