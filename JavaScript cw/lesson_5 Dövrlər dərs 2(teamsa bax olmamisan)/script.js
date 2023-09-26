//1cini hokmen  cixartmalisan

// let i = 0

// do {   
//     i++
//     console.log(i)
// }
// while (i < 10)




// ----------------------------------------------------------------------------------------
// coldeki foru breaklemek ucun adlandiririq ___coldeki for outFor __icindeki for innerFor


// outFor:
// for (let i = 0; i < 4; i++) {
//     innerFor:
//     for (let j = 0; j < 4; j++) {
//         console.log(i, j)
//         if (i === 1 && j === 1) {
//             break outFor //innerFor
//         }
//     }
// }




// ----------------------------------------------------------------------------------------
// praktika 1

// ----------------------------------------------------------------------------------------
// tek ve cut ededlerini cemi

// let sumCut = 0
// let sumTek = 0

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sumCut += i
//         console.log(i)
//     }
//     else if (i % 1 === 0) {
//         sumTek += i
//         console.log(i)
//     }

// }
// console.log(sumCut)
// console.log(sumTek)






// ----------------------------------------------------------------------------------------
// fibanacci
// 0 1 1 2 3 5 8 13 21 34 55 89...
// f(n-1)+f(n-2)



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
















