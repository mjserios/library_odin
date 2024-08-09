const submit = document.getElementById('submit');
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function submitButton(event) {
    event.preventDefault();
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('number').value;
    read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    writeLib();
}

function writeLib() {
    const grids = document.getElementById('grids');
    grids.innerHTML = '';

    myLibrary.forEach((book, index) => {
        var cards = document.createElement('div');
        var titleTxt = document.createElement('h3');
        titleTxt.textContent = book.title;
        cards.appendChild(titleTxt);

        var authorTxt = document.createElement('p');
        authorTxt.textContent = book.author;
        cards.appendChild(authorTxt);


    grids.appendChild(cards);
    })

}

submit.addEventListener('click', submitButton);



