

const libraryBooks = [];

function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function ()
    {
        var text = this.title + ' by ' + this.author + ', ' + this.pages + ' pages' + ', ';
        if (this.isRead)
        {
            text += 'read';
        } else
        {
            text += 'not read yet';
        }

        return text;
    };


}

function addBookToLibrary(title, author, pages, isRead)
{
    const book = new Book(title, author, pages, isRead);
    libraryBooks.push(book);
}
