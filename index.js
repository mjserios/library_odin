//
const submit = document.getElementById('submit');
const dialogButton = document.getElementById('openDialog');
const diaLib = document.getElementById('bookDialog');
const closeDia = document.getElementById('cancel');
const myLibrary = [];

//
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

//
function submitButton(event) {
    event.preventDefault();
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('number').value;
    read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    writeLib();
}

//
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

        var pageTxt = document.createElement('p');
        pageTxt.textContent = `Pages ${book.pages}`;
        cards.appendChild(pageTxt);

        var readTxt = document.createElement('p');
        readTxt.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        cards.appendChild(readTxt);

        var delButton = document.createElement('button');
        delButton.textContent = "Remove";
        delButton.classList.add('delButton');
        delButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            writeLib();
        })
        cards.appendChild(delButton);

        var readToggle = document.createElement('button');
        readToggle.textContent = 'Change Read Status';
        readToggle.classList.add('readToggle');
        readToggle.addEventListener('click', () => {
            book.read = !book.read;
            writeLib();
        })
        cards.appendChild(readToggle);

    grids.appendChild(cards);
    })

}

dialogButton.addEventListener('click', () => {
    diaLib.showModal();
})

closeDia.addEventListener('click', () => {
    diaLib.close();
})


submit.addEventListener('click', submitButton);



