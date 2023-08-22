const myLibrary = [
  {
    'title': 'The Last Wish',
    'author': 'Andrej Sapkowski',
    'pages': 384,
    'read': true
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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('Hello world!');
});

function updateTable() {
  const old_tbody = document.querySelector('#table > tbody');
  const new_tbody = document.createElement('tbody');

  for (let i = 0; i < myLibrary.length; i++) {
    let newRow = new_tbody.insertRow(i);

    let number = newRow.insertCell();
    number.textContent = i + 1; // number 

    let title = newRow.insertCell()
    title.textContent = myLibrary[i].title;

    let author = newRow.insertCell()
    author.textContent = myLibrary[i].author;

    let pages = newRow.insertCell()
    pages.textContent = myLibrary[i].pages;

    let read = newRow.insertCell()
    read.textContent = myLibrary[i].read;
  }

  old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}