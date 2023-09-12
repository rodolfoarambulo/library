const myLibrary = [
  {
    'title': 'The Last Wish',
    'author': 'Andrej Sapkowski',
    'pages': 384,
    'status': 'READ'
  }
];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = () => {
      return `${title} by ${author}, ${pages} pages, ${status}`;
    }
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
  if (bookForm.checkValidity()) {
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
    read.textContent = myLibrary[i].status;

    let actions = newRow.insertCell();

    let actionDiv = document.createElement('div');
    actionDiv.id = 'actions';

    let deleteBtn = document.createElement('img');
    deleteBtn.src = 'images/delete-circle.svg';
    deleteBtn.className = 'actionBtn';
    deleteBtn.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      updateTable();
    });

    let changeBtn = document.createElement('img');
    changeBtn.src = 'images/swap-horizontal-circle.svg';
    changeBtn.className = 'actionBtn';
    changeBtn.addEventListener('click', () => {
      if (myLibrary[i].status === 'READ') {
        myLibrary[i].status = 'NOT READ';
        updateTable();
      } else {
        myLibrary[i].status = 'READ';
        updateTable();
      };
    })

    actionDiv.appendChild(deleteBtn);
    actionDiv.appendChild(changeBtn);

    actions.appendChild(actionDiv);
  }

  old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}

updateTable();