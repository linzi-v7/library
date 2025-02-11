const testBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const testBook2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, true);
const libraryBooks = [];

const formDialog = document.querySelector(".book-form-dialog");
const libraryGrid = document.querySelector(".grid-container");
const addBookButton = document.querySelector(".add-book-button");

addBookButton.addEventListener("click", function ()
{
    showLibrary(false);
    formDialog.show();
})

function Book(title, author, pages, isRead, status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.status = status

    if (this.isRead == true)
    {
        this.status = "Completed"
    }
    else
    {
        this.status = "Not Yet Read"
    }

    this.invertStaus = function ()
    {
        if (this.isRead == true)
        {
            this.isRead = false;
            this.status = "Not Yet Read";
        }
        else
        {
            this.isRead = true;
            this.status = "Completed";
        }
    }


}

function addBookToLibrary(title, author, pages, isRead)
{
    const book = new Book(title, author, pages, isRead);
    libraryBooks.push(book);
}

function displayBooks(arr)
{
    if (arr.length == 0 || arr.every(element => element === null))
    {
        console.log("Library Array Is Empty!");
        showEmptyMessage(true);
        return;
    }
    else
    {
        showEmptyMessage(false);
    }

    const booksArea = document.querySelector(".books");
    booksArea.innerHTML = "";

    for (let index = 0; index < arr.length; index++)
    {
        const element = arr[index];
        if (element === null)
        {
            continue;
        }

        const bookCard = createBookCard(element);
        bookCard.setAttribute("data-book-index", `${index}`)
        booksArea.appendChild(bookCard);

    }
}

function createBookCard(book)
{
    //info to show on the card
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("title");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = "Author: ";

    const strongAuthor = document.createElement("strong");
    strongAuthor.textContent = book.author;
    bookAuthor.appendChild(strongAuthor);

    const bookPages = document.createElement("p");
    bookPages.classList.add("pages");
    bookPages.textContent = "Pages: ";

    const strongPages = document.createElement("strong");
    strongPages.textContent = book.pages;
    bookPages.appendChild(strongPages);

    const bookRead = document.createElement("p");
    bookRead.classList.add("status");
    bookRead.textContent = "Status: ";

    const spanRead = document.createElement("span");
    spanRead.classList.add("read-" + book.isRead);
    const strongRead = document.createElement("strong");
    strongRead.textContent = book.status;
    spanRead.appendChild(strongRead);
    bookRead.appendChild(spanRead);

    const cardButtons = createCardButtons();

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(cardButtons);

    return bookCard;

}

function createCardButtons()
{
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const statusButton = document.createElement("button");
    statusButton.type = "button";
    statusButton.classList.add("status-button");
    statusButton.textContent = "Change Status";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove Book";


    removeButton.addEventListener("click", function (event)
    {
        removeBook(event);
    })

    statusButton.addEventListener("click", function (event)
    {
        const divToChange = event.target.parentElement.parentElement;

        const index = divToChange.getAttribute("data-book-index");
        libraryBooks[index].invertStaus();

        displayBooks(libraryBooks);

    })

    buttons.appendChild(statusButton);
    buttons.appendChild(removeButton);

    return buttons;
}

function removeBook(event)
{
    const divToRemove = event.target.parentElement.parentElement;
    const booksArea = divToRemove.parentElement;

    const index = divToRemove.getAttribute("data-book-index");
    libraryBooks[index] = null;

    divToRemove.remove();
    if (booksArea.innerHTML == "")
    {
        showEmptyMessage(true);
    }

    displayBooks(libraryBooks);
    console.log(divToRemove);
}

//function to activate or deactivate library area (needed to show form)
function showLibrary(active)
{
    if (active)
    {
        libraryGrid.classList.remove("inactive")
    }
    else
    {
        libraryGrid.classList.add("inactive")
    }
}

function showEmptyMessage(active)
{

    const empty = document.querySelector(".empty");
    const notEmpty = document.querySelector(".not-empty");


    if (active)
    {
        empty.classList.remove("inactive");
        notEmpty.classList.add("inactive");
    }
    else
    {
        empty.classList.add("inactive");
        notEmpty.classList.remove("inactive");
    }
}

displayBooks(libraryBooks);