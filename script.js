let myLibrary = [];
let entryId = 0; // adds Id entry to every <a>

function Book(title, author, pages, status) {
    this.title = title; //string
    this.author = author; //string
    this.pages = pages; // integer
    this.status = status; // BOOLEAN? actually int -> 0 == NOT READ | 1 == READ | 2 == ERASE

}

function testingOnly() { // FOR TESTING ONLY
    const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 595, 1);
    const theHobbitGoesToParis = new Book('The Hobbit goes to paris', 'J.R.R. Tolkien', 69, 0);
    const theHobbit2 = new Book('The Hobbit', 'J.R.R. Tolkien', 420, 1);
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbitGoesToParis);
    myLibrary.push(theHobbit2);
}

function addEntry(title, author, pages, status) {

    let statusStr;
    if (status == 1) {
        statusStr = 'READ';
    } else if (status == 0) {
        statusStr = 'NOT READ';
    }

    const containerCapture = document.getElementById('container');
    const newBookDiv = document.createElement('a');
    containerCapture.appendChild(newBookDiv)
    newBookDiv.classList.add('placeholder');

    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h3');
    const bookStatus = document.createElement('h3');

    const inputTitle = document.createElement('p');
    const inputAuthor = document.createElement('p');
    const inputPages = document.createElement('p');
    const inputStatus = document.createElement('p');

    const bookTitleText = document.createTextNode('title');
    const bookAuthorText = document.createTextNode('author');
    const bookPagesText = document.createTextNode('pages');
    const bookStatusText = document.createTextNode('status');

    const inputTitleText = document.createTextNode(title);
    const inputAuthorText = document.createTextNode(author);
    const inputPagesText = document.createTextNode(pages);
    const inputStatusText = document.createTextNode(statusStr);

    bookTitle.appendChild(bookTitleText);
    bookAuthor.appendChild(bookAuthorText);
    bookPages.appendChild(bookPagesText);
    bookStatus.appendChild(bookStatusText);

    inputTitle.appendChild(inputTitleText);
    inputAuthor.appendChild(inputAuthorText);
    inputPages.appendChild(inputPagesText);
    inputStatus.appendChild(inputStatusText);

    bookTitle.classList.add('text-left');
    bookAuthor.classList.add('text-left');
    bookPages.classList.add('text-left');
    bookStatus.classList.add('text-left');

    inputTitle.classList.add('text-right');
    inputAuthor.classList.add('text-right');
    inputPages.classList.add('text-right');
    inputStatus.classList.add('text-right');

    newBookDiv.appendChild(bookTitle);
    newBookDiv.appendChild(inputTitle);
    newBookDiv.appendChild(bookAuthor);
    newBookDiv.appendChild(inputAuthor);
    newBookDiv.appendChild(bookPages);
    newBookDiv.appendChild(inputPages);
    newBookDiv.appendChild(bookStatus);
    newBookDiv.appendChild(inputStatus);

    newBookDiv.setAttribute('id', `${entryId}`);
    entryId++;
    newBookDiv.classList.add('added')
}

function addBookToTheLibrary() {
    let titleInput = prompt('insert book title', 'eg. the hobbit goes to paris'); // placeholder before i figure out how to make a form popup
    let authorInput = prompt('insert author name', 'eg. tolky');
    let pagesInput = prompt('insert total pages', 'eg 420');
    let statusInput = prompt('insert status', 'read or not'); // find better solution that isn't a string

    const newBook = new Book(titleInput, authorInput, pagesInput, statusInput);
    myLibrary.push(newBook);

    addEntry(titleInput, authorInput, pagesInput, statusInput);
}

function clearLibrary() {
    const added = document.querySelectorAll('.added');
    // for (let i = 0; i < added.length; i++) {
    //     document.getElementById(`${i}`).remove(); 

    // }
    document.querySelectorAll('.added').forEach(e => e.remove);
}

function drawLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        addEntry(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].status);
    }
}

const btnAdd = document.getElementById('button-add');
btnAdd.addEventListener('click', e => {
    clearLibrary();
    addBookToTheLibrary();
});

function removeBook(array, position) {
    // const added = document.querySelectorAll('.added'); 
    // for (let i = 0; i < added.length; i++) {
    //     document.getElementById(`${i+1}`).remove();
    // }
    const temp = array[position];

}

window.onload = testingOnly(), drawLibrary(); 

const btnStatus = getElementById('1');
btnStatus.addEventListener('click', e => {
    console.log(e);
})