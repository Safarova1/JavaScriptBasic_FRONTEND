// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// oz metodlari var baxmaq olar saytdan




let bookThree = {
  bookName: 'Game of thorones',
  author: 'Jorge Martin',
  bookCouny: [1, 2, 3, 4, 5],
  printBook() {
    let result = this.bookCouny.reduce((a, b) => a + b)
    console.log(result / this.bookCouny.length)
  }
}

// deyere uygun acari cixarir -- Jorge Martin
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



// entries  ---  icindekileri massive cevirir
// ['bookName', 'Game of thorones']
// ['author', 'Jorge Martin']
// ['bookCouny', Array(5)]
// ['printBook', ƒ]

let bookEntries = Object.entries(bookThree)
console.log(bookEntries)



//freeze --- sile bilmirem deyise bilmirem - deyerini deyismek olmasin deye istifade edirik
let bookdeyismir = Object.freeze(bookThree)
bookThree.bookName = 'God Father'
console.log(bookThree.bookName)
console.log(bookdeyismir)



// seal --- deyise bilirem sile bilmirem
let tezeObyekt1 = Object.seal(bookThree);
console.log(tezeObyekt1)



// hasOwnProperty  --- acar var ya yoxdu 
console.log(bookThree.hasOwnProperty('key'))  //false

//numune
// const object1 = {};
// object1.property1 = 42;
// console.log(object1.hasOwnProperty('property1'));
// // Expected output: true





//create --- 2usulla ede bilerik - 
// bir obyekti acar ve deyerlerini o biri obyekte beraberlewdirek (copy ne dublicate!)

//1
const men = Object.create(bookThree)
//2
const me = { ...bookThree }




//assign --- birinden goturub o birine verirdi axirda birlewdirdi
// {a: '3', b: '8', c: '2'}
const object1 = { a: '3', b: '6' };
const object2 = { b: '8', c: '2' };
let obwiyObyekt = Object.assign(object1, object2)
console.log(obwiyObyekt)










//defineProperties --- teze bir obyekt yaradir,
//  icine acar ve 1ci deyerleri daxil edir
const object11 = {};

Object.defineProperties(object11, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});


console.log(object11);  //{property1: 42, property2: undefined}
console.log(object11.property1); //42
console.log(object11.property2); //undefined



// Object.is() --- 1ci ve 2ci obyekteki strukturu yoxlayir-tip ve deyer yoxlanilir
console.log(Object.is('1', 1));
// Expected output: false
console.log(Object.is('1', '2'));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false





//silmek

let ob = {
  name: 'Ramin',
  adress: 'Baki'
}


ob.name = 'Saleh'
delete ob.adress
console.log(ob)