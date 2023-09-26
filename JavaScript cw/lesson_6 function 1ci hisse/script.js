
// ----------------------------------------------------------------------------------------
// function --emeliyatti her defe edeceyik-asanlasdirmaq ucundu
// js 2 cur funksiya yarada bilerik
// ECMAScript — это встраиваемый расширяемый не имеющий средств ввода-вывода язык программирования, используемый в качестве основы для построения других скриптовых языков


// kohne ECMAScript6-dan qabaq
// function printText(){
//     console.log("hello")
// }

// printText()

// teze ECMAScript6 ve sonra
// const  printText2 =() =>{
//     console.log("world")
// }

// printText2()





// ----------------------------------------------------------------------------------------
// her cagirilanda artan deyisen

// let i = 0
// const numPlus = () => {
//     i++
//     console.log(i)
// }


// numPlus()
// numPlus()
// numPlus()



// ----------------------------------------------------------------------------------------

// let i = 0
// const numPlus = () => {
//     i++
//     return i
// }


// console.log(numPlus)
// console.log(numPlus)





// ----------------------------------------------------------------------------------------
// close klouze funksiyasi qapanma funksiyasi
//   ---lokal deyiseni isletmek ucun istifade olunur
// return-den sonra hecne islemeyecek

// 1
// const numPlus = () => {

//     let i = 0

//     return () => {
//         i++
//         console.log(i)
//     }
// }

// let newFunction = numPlus()
// newFunction()
// newFunction()




// 2
// const numPlus = () => {

//     let i = 0

//     return () => { //qapanma
//         i++
//         return i
//     }
// }

// let newFunction = numPlus()
// let num = newFunction()
// num = newFunction()
// num = newFunction()
// num = newFunction()
// console.log(num)
















