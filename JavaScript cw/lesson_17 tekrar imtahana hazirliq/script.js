
// let bookOne = {
//     bookName:'Game of thorones',
//     author:'Jorge Martin',
//     bookCouny:[1,2,3,4,5],
//     printBook(){
//         let result = this.bookCouny.reduce((a,b) => a + b)
//         console.log(result / this.bookCouny.length)
//     }
// }

// bookOne.printBook()

// let bookTwo = {
//     bookName:'Game of thorones',
//     author:'Jorge Martin',
//     bookCouny:[1,2,3,4,5],
//     printBook(){
//         let result = this.bookCouny.reduce((a,b) => a + b)
//         console.log(result / this.bookCouny.length)
//     }
// }

// bookTwo.printBook()

// let bookThree = {
//     bookName:'Game of thorones',
//     author:'Jorge Martin',
//     bookCouny:[1,2,3,4,5],
//     printBook(){
//         let result = this.bookCouny.reduce((a,b) => a + b)
//         console.log(result / this.bookCouny.length)
//     }
// }

// bookThree.printBook()

// let mal1 = [
//     {
//         "qiymet": 45,
//         "tesvir": 'qirmizi',
//         "name": "canta",
//     },
//     {
//         "qiymet": 55,
//         "tesvir": 'qirmizi',
//         "name": "don",
//     },
//     {
//         "qiymet": 40,
//         "tesvir": 'qirmizi',
//         "name": "salvar",

//     },
//     {
//         "qiymet": 50,
//         "tesvir": 'qirmizi',
//         "name": "kofta",
//     },
//     {
//         "qiymet": 18,
//         "tesvir": 'qirmizi',
//         "name": "papaq",
//     },
// ]


// mal1.forEach((item) => {
//     item.printName = function(){
//         console.log(this.name)
//     }
//     item.printName()
// })

// let bookThree = {
//     bookName:'Game of thorones',
//     author:'Jorge Martin',
//     bookCouny:[1,2,3,4,5],
//     printBook(){
//         let result = this.bookCouny.reduce((a,b) => a + b)
//         console.log(result / this.bookCouny.length)
//     }
// }

// console.log(bookThree.author)
// bookThree.bookName = 'Mocking Bird'
// console.log(bookThree.bookName)
// let bookValues = Object.entries(bookThree)
// console.log(bookValues)
// bookThree.bookName = 'God Father'
// console.log(bookThree.bookName)
// console.log(bookThree.hasOwnProperty('a'))

// console.log(bookValues)

// const object1 = {};
// let property1 = {
//     value: 42,
//     value1: 60,
//     writable: true,
// }

// let obj = {
//     property1: {
//         ...property1
//     },
//     property2: { ...property1 },
// }


// Object.defineProperties(object1, { ...obj });
// console.log(object1);
// console.log(object1.property2);


// console.log(object1.property1);

// let book = {
//     'book-name': 'Game of thorones',
//     'book-author': 'George Martin',
// }

// let arr = Object.entries(book)

// console.log(arr)
// let newarr = []
// newarr = arr.map((item) => {
//     let arr = item[0].split('-')
//     let one = [arr[0][0]
//     .toUpperCase() + arr[0]
//     .slice(1), arr[1][0]
//     .toUpperCase() + arr[1]
//     .slice(1)]

//     let two = item[1]

//     if (item[0].includes('-')) {
//         return [one.join(' '), two]
//     }
// })

// console.log(newarr)

// newarr.forEach((item) => {
//     console.log(`${item[0]} - ${item[1]}`)
// })

// function printName(){
//     i++
//     if(i < 5){
//         setTimeout(() => {
//             console.log('Adam')
//             printName()
//         }, 100)
//     }    
// }
// printName()

// function printN(){
//     i++
//     console.log(arr)

//     if(i < 5){
//         setTimeout(printN , 1000)
//     }    
// }
// printN()

// let stopArr = setInterval(() => {
//     i++
//     console.log(i)
//     console.log(arr)
//     if(i >= 5){
//         clearInterval(stopArr)
//     } 
// },100)

// let time = setInterval(function() {
//     let currentTime = new Date
//     let day = currentTime.getDate()
//     let month = currentTime.getMonth() + 1
//     let year = currentTime.getFullYear()
//     let hour = currentTime.getHours()
//     let minutes = currentTime.getMinutes()
//     let seconds = currentTime.getSeconds()
//     console.log(`${day}/${month}/${year} ${hour}:${minutes}:${seconds}`)
//     if(day === 16 && month === 10 && year === 2023 && hour > 11 && minutes > 0 && hour <= 13 && minutes < 50){
//         alert('ders bashladi')
//         alert('ders davam edir')
//         clearInterval(time)

//     }else{
//         alert('ders vaxti deyil')
//         clearInterval(time)
//     }
// }, 1000)


// let i = 10

// let timeTwo = setInterval(() => {
//             i--
//             prompt(i)
//             if(i === 1){
//                 clearInterval(timeTwo)
//             }
// },1000)


// let mal1 = [
//     {
//         shopName: 'Best Shop',
//         shopContacts: '312321',
//         shopAdress: 'Baki',

//         fruits: [
//             {
//                 "qiymet": 45,
//                 "tesvir": 'qirmizi',
//                 "name": "Sumka",
//             },
//             {
//                 "qiymet": 55,
//                 "tesvir": 'qirmizi',
//                 "name": "Eyaqqabi",
//             },
//             {
//                 "qiymet": 40,
//                 "tesvir": 'qirmizi',
//                 "name": "cins",

//             },
//             {
//                 "qiymet": 50,
//                 "tesvir": 'qirmizi',
//                 "name": "shalvar",
//             },
//             {
//                 "qiymet": 18,
//                 "tesvir": 'qirmizi',
//                 "name": "papaq",
//             },
//         ]
//     },
//     {
//         shopName: 'My Shop',
//         shopContacts: '312321',
//         shopAdress: 'Baki',

//         fruits: [
//             {
//                 "qiymet": 45,
//                 "tesvir": 'qirmizi',
//                 "name": "canta",
//             },
//             {
//                 "qiymet": 55,
//                 "tesvir": 'qirmizi',
//                 "name": "don",
//             },
//             {
//                 "qiymet": 40,
//                 "tesvir": 'qirmizi',
//                 "name": "krossovka",

//             },
//             {
//                 "qiymet": 50,
//                 "tesvir": 'qirmizi',
//                 "name": "kofta",
//             },
//             {
//                 "qiymet": 18,
//                 "tesvir": 'qirmizi',
//                 "name": "papaq",
//             },
//         ]
//     }
// ]

// let input = prompt()

// mal1.forEach(element => {
//     element.fruits.forEach((item) => {
//         if (item.name === input) {
//             let index = element.fruits.indexOf(item)
//             console.log(index)
//             element.fruits.splice(index,1)
//             console.log(element.fruits)
//         }
//     })
// });

// let inputTwo= prompt()

// mal1.forEach(element => {
//     if(element.shopName === inputTwo){
//         let input = prompt()
//         let elements = input.split('-')
//         element.fruits.push({
//             "qiymet": elements[0],
//             "tesvir": elements[1],
//             "name": elements[2],
//         })
//           console.log(element.fruits,element.shopName)
//     }
// });

// let input = prompt()

// mal1.forEach(element => {
//     if (element.shopName === input) {
//         let inputTwo = prompt()
//         element.fruits.forEach(item => {
//             if (item.name === inputTwo) {
//                 let inputThree = prompt()
//                 item.qiymet = inputThree
//                 console.log(item)
//             }
//         });
//     }
// });


// let obj = {
//     name:'Ramin',
//     adress:'Baki'
// }


// Object.freeze(obj)
// console.log(newArr)
// console.log(obj.name)
// console.log(obj['Name of user'])


// obj.name = 'Saleh'
// delete obj.adress
// console.log(obj)

// let a = 1
// let b = a++

// console.log(a)
// console.log(b)

// let c = 1
// let d = ++c

// console.log(c)
// console.log(d)

// console.log(parseInt('12.11b'))
// console.log(parseFloat('12.101b'))
// console.log(1.101)

// console.log('Math.ceil(4.9)')
// console.log('Math.ceil(4.7)')
// console.log('Math.ceil(4.4)')
// console.log('Math.ceil(4.2)')
// console.log('Math.ceil(-4.2)')

// console.log(Math.ceil(4.9))
// console.log(Math.ceil(4.7))
// console.log(Math.ceil(4.4))
// console.log(Math.ceil(4.2))
// console.log(Math.ceil(-4.2))

// console.log('Math.floor(4.9)')
// console.log('Math.floor(4.7)')
// console.log('Math.floor(4.4)')
// console.log('Math.floor(4.2)')
// console.log('Math.floor(-4.2)')

// console.log(Math.floor(4.9))
// console.log(Math.floor(4.7))
// console.log(Math.floor(4.4))
// console.log(Math.floor(4.2))
// console.log(Math.floor(-4.2))

let color = ['red', 'blue', 'black', 'yellow', 'green']

console.log(color[Math.floor(Math.random() * color.length)])

// color.forEach((item) => {
//     let p = document.createElement('p')
//     p.innerText = item
//     p.style = `background-color: ${color[Math.floor(Math.random() * color.length)]}`
//     con.appendChild(p)
// })