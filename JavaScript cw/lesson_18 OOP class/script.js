class Book {
    constructor(bookName, author, price) {
        this.bookName = bookName
        this.author = author
        this.price = price
    }
    pushToArray(){
        while(true){
            let inputOne = prompt()
            this.arr.push(inputOne)
            if(inputOne === 'end'){
                break
            }
        }
    }

}
let book1 = new Book('voyna i mir', 'lev tolstoy', 35)
let book2 = new Book('koroglu', 'milli', 45)
let book3 = new Book('dede qorqud', 'milli', 55)

book1.pushToArray()
console.log(book1)


// let arr = [book1, book2, book3]
// arr.forEach(item => {
//     if (item.bookName == 'koroglu')
//         console.log(item.bookName, item.author, item.price)
// })






// console.log(book1, book2, book3)

















// class Book {
//     constructor(bookName, author, price, arr) {
//         this.bookName = bookName
//         this.author = author
//         this.price = price

//     }

//     // pushToArray() {
//     //     while (true) {
//     //         let name = prompt()
//     //         let author = prompt()
//     //         let price = prompt('price')

//     //         this.arr.push(new Book(name, author, price))
//     //         if (price === 'end') {
//     //             break
//     //         }
//     //     }
//     // }
//     showArray() {
//         console.log(this.arr)
//     }
// }


// // let inputOne = prompt()
// let book1 = new Book('')
// book1.pushToArray()
// book1.showArray()

// console.log(book1)

// // let inputTwo = prompt()

// // book2.pushToArray({name:inputTwo})
// // console.log(book2)

// // let arr = [book1,book2,book3]
// // console.log(arr[1])
// // arr.forEach(item => {
// //     if(item.bookName === 'Koroglu'){
// //         console.log(item.bookName,item.author,item.price)
// //     }
// // })
// // console.log(book1,book2, book3)