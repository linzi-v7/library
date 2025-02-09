const testBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const testBook2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, true);
const libraryBooks = [testBook, testBook2];

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


}

function addBookToLibrary(title, author, pages, isRead)
{
    const book = new Book(title, author, pages, isRead);
    libraryBooks.push(book);
}

function displayBooks(array)
{
    if (array.length == 0)
    {
        console.log("Library Array Is Empty!");
        return;
    }

    const booksArea = document.querySelector(".books");
    booksArea.innerHTML = "";

    for (let index = 0; index < array.length; index++)
    {
        const element = array[index];

        const bookCard = createBookCard(element);
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
        const divToRemove = event.target.parentElement.parentElement;
        const booksArea = divToRemove.parentElement;
        divToRemove.remove();

        // if (booksArea.innerHTML == "")
        // {
        //     const empty = document.querySelector(".empty");
        //     empty.classList.remove("inactive")
        // }

        console.log(booksArea);
    })

    statusButtonButton.addEventListener("click", function (event)
    {
        // const divToRemove = event.target.parentElement.parentElement;
        // const booksArea = divToRemove.parentElement;
        // divToRemove.remove();

        // if (booksArea.innerHTML == "")
        // {
        //     const empty = document.querySelector(".empty");
        //     empty.classList.remove("inactive")
        // }

        // console.log(booksArea);
    })

    buttons.appendChild(statusButton);
    buttons.appendChild(removeButton);

    return buttons;
}


displayBooks(libraryBooks);