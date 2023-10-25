
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

// let favoriteGoods= []

// let shopGoods = [
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

// let inputDelete = prompt()

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

// let inputAdd= prompt()

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

// let inputChange = prompt()

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

// let color = ['red', 'blue', 'black', 'yellow', 'green']

// console.log(color[Math.floor(Math.random() * color.length)])

// color.forEach((item) => {
//     let p = document.createElement('p')
//     p.innerText = item
//     p.style = `background-color: ${color[Math.floor(Math.random() * color.length)]}`
//     con.appendChild(p)
// })

// let randomNumber = Math.floor(Math.random() * 5)

// let time = setInterval(() => {
//     let number = Math.floor(Math.random() * 5)
//     console.log(randomNumber)
//     console.log(number)
//     if(randomNumber === number){
//         console.log('tapildi')
//         clearInterval(time)
//     }
// },1000)

// while(true){
//     let number = Number(prompt())
//     if(randomNumber === number){
//         alert('Tapildi')
//         break
//     }else{
//         alert('O deyil')
//     }
// }

// let text = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
// let passwordText = ''

// for (let index = 0; index < 3; index++) {
//     let symbol = text[Math.floor(Math.random() * text.length)]
//     passwordText += symbol

// }
// console.log(passwordText)
// let time = setInterval(() => {
//     let password = ''
//     for (let index = 0; index < 3; index++) {
//         let symbolTwo = text[Math.floor(Math.random() * text.length)]
//         password += symbolTwo

//     }
//     console.log(passwordText)
//     console.log(password)
//     if (password === passwordText) {
//         console.log('tapildi')
//         clearInterval(time)
//     }
// })


// console.log(password)

// let arr = []

// for (let index = 0; index < 3; index++) {
//     let input = prompt()
//     let passwordText = ''

//     for (let index = 0; index < 11; index++) {
//         let symbol = text[Math.floor(Math.random() * text.length)]
//         passwordText += symbol

//     }
//     arr.push({ name: input, password: passwordText })
//     console.log(arr)
// }

// while(true){
//    let input = prompt()

//    if(input === 'Admin'){
//     let secondInput = prompt('admin')
//      if(secondInput === 'sil'){
//         alert('silindi')
//      }else if(secondInput === 'elave et'){
//         alert('elave olundu')
//      }
//    }else if(input === 'Alici'){
//     let secondInput = prompt('alici')
//      if(secondInput === 'show'){
//         alert('show')
//      }
//    }else if(input === 'end'){
//     break
//    }
// }

// shopGoods.forEach((item) => {
//     if(item.shopName === 'Best Shop'){
//         let goods = item.fruits.find((item) => item.name === 'Sumka')
//         favoriteGoods.push(goods)
//     }
// })

// console.log(favoriteGoods)



class Book {
    constructor(bookName, author, price) {
        this.bookName = bookName
        this.author = author
        this.price = []

    }

    showArray() {
        console.log(this.bookName,this.author,this.price)
    }
}


// // let inputOne = prompt()
// let book1 = new Book('Name', 'Ramin', 35)
// let book2 = new Book('Name2', 'Ramin2', 45)

// book1.showArray()
// book2.showArray()
// console.log(book1)

class BookShop {
    constructor(shopName, shopAdress) {
        this.shopName = shopName
        this.shopAdress = shopAdress
        this.books = []
    }

    addBook() {
        while(true){
            let input = prompt()
            if(input === 'end'){
                break
            }else{
                let name = prompt('name')
                let author = prompt('author')
                let price = prompt('price')
                this.books.push({bookname:name, bookAuthor:author, bookPrice:price})
            }
        }
    }

}

let bookShop = new BookShop('Kitab evi', 'Nizami')
bookShop.addBook()
console.log(bookShop)

// let obj = {
//     shopName: 'Kitab evi',
//     shopAdress: 'Nizami',
//     books:[],
//     addBook() {
//         while(true){
//             let input = prompt()
//             if(input === 'end'){
//                 break
//             }else{
//                 let name = prompt('name')
//                 let author = prompt('author')
//                 let price = prompt('price')
//                 this.books.push({bookname:name, bookAuthor:author, bookPrice:price})
//             }
//         }
//     }
// }
// obj.addBook()
// console.log(obj)

// let inputTwo = prompt()

// book2.pushToArray({name:inputTwo})
// console.log(book2)

// let arr = [book1,book2,book3]
// console.log(arr[1])
// arr.forEach(item => {
//     if(item.bookName === 'Koroglu'){
//         console.log(item.bookName,item.author,item.price)
//     }
// })
// console.log(book1,book2, book3)

let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
]

const showGoods = () => {
    shopGoods.forEach((item) => {
        console.log(item['store_name'])
        item['products'].forEach((itemGoods) => {           
            console.log(itemGoods["product_name"], itemGoods["product_description"], itemGoods["product_price"])
        })
    })
}

const searchGoods = () => {
    let myGoods
    let goods = prompt('Search goods')
    shopGoods.forEach((item) => {
        myGoods = item['products'].find((itemGoods) => goods === itemGoods["product_name"])       
    })
    console.log(myGoods["product_name"],myGoods["product_description"],myGoods["product_price"])
}

const sortGoodsEncrease = () => {
    shopGoods.forEach((item) => {
        item['products'].sort((a,b) => a["product_price"] - b["product_price"])
    })
}

const sortGoodDecrease = () => {
    shopGoods.forEach((item) => {
        item['products'].sort((a,b) => b["product_price"] - a["product_price"])
    })
}
while (true) {
    let choice = prompt('Choose variant Admin or Client')
    if (choice === 'Admin') {
        let choiceAdmin = prompt('Choose variant Admin')
        if (choiceAdmin === 'show goods') {
            showGoods()
        } else if (choiceAdmin === 'encrease') {
            sortGoodsEncrease()
            showGoods()
        } else if (choiceAdmin === 'decrease') {
            sortGoodDecrease()
            showGoods()
        }else if (choiceAdmin === 'search') {
            searchGoods()
        }

    } else if (choice === 'Client') {
        let choiceClient = prompt('Choose variant Client')
        if (choiceClient === 'show goods') {
            showGoods()
        }else if (choiceClient === 'encrease') {
            sortGoodsEncrease()
        } else if (choiceClient === 'decrease') {
            sortGoodDecrease()
        }else if (choiceClient === 'search') {
            searchGoods()
        }
    }else if(choice === 'end'){
        break
    }
}