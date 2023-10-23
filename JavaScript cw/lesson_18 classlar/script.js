class Book {
    constructor(bookName, author, price) {
        this.bookName = bookName
        this.author = author
        this.price = price
    }

}
let book1 = new Book('voyna i mir', 'lev tolstoy', 35)
let book2 = new Book('koroglu', 'milli', 45)
let book3 = new Book('dede qorqud', 'milli', 55)

console.log(book1, book2, book3)