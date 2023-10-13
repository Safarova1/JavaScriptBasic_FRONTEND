// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// oz metodlari var baxmaq olar saytdan




let bookThree = {
    bookName:'Game of thorones',
    author:'Jorge Martin',
    bookCouny:[1,2,3,4,5],
    printBook(){
        let result = this.bookCouny.reduce((a,b) => a + b)
        console.log(result / this.bookCouny.length)
    }
}

// Jorge Martin
console.log(bookThree.author)



// values  --- ancaq deyerleri cixarir
// [
//     "Game of thorones",
//     "Jorge Martin",
//     [
//         1,
//         2,
//         3,
//         4,
//         5
//     ],
//     null
// ]
let bookValues = Object.values(bookThree)
console.log(bookValues)



// keys --- ancaq acarlari cixarir
// ['bookName', 'author', 'bookCouny', 'printBook']
let bookKeys = Object.keys(bookThree)
console.log(bookKeys)



// entries  ---  
// ['bookName', 'Game of thorones']
// ['author', 'Jorge Martin']
// ['bookCouny', Array(5)]
// ['printBook', ƒ]

let bookEntries = Object.entries(bookThree)
console.log(bookEntries)



//freeze --- deyerini deyismek olasin deye istifade edirik
let bookdeyismir = Object.freeze(bookThree)
bookThree.bookName = 'God Father'
console.log(bookThree.bookName)
console.log(bookdeyismir)



// hasOwnProperty  --- acar var ya yoxdu 
console.log(bookThree.hasOwnProperty('a'))  //false










