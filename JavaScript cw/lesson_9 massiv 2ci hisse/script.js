// live share  -kocur canli kodlari goturmek ucun




//-------------------------------------------------------------------------------------------
// splice --1ci indexsi yazirsan hardan silmeye baslayacaq sora 2ci nece element sileceyini gosteririk
// slice --hansi indexden hansina kimi secilmelidir

// let arr = [1,2,3,4,5,6,7]
// arr.splice(2,3)   // 2ci indexden baslayib 3 element silir
// console.log(arr)
// let newArr = arr.slice(1,3)  //1ci indexden 3cu indexse kimi olan hisse
// console.log(newArr)

// console.log(arr.some((item) => item > 6))





//-------------------------------------------------------------------------------------------
// findIndex -- elementi verirsen indexsi tapir


// let input = prompt()
// let deletedElement

// let arr = ['Ramin', 'Nahid','Samir']

// deletedElement = arr.findIndex((item) => item === input)


// arr.splice(deletedElement,1)

// console.log(arr)







//-------------------------------------------------------------------------------------------
// filter -- hemen elementi silir item !==input  /// hemen elementi saxlayir item ===input


// zadaca1
// let input = prompt()

// let arr = ['Ramin', 'Nahid','Samir']

// let newArr = arr.filter((item) => item === input)

// // if(arr.includes(input)){
// //     arr = arr.filter((e) => e !== input)
// // }

// console.log(arr)
// console.log(newArr)




// zadaca2
// let numArr =[1,2,3,4,5,6,7,8,9]

// numArr = numArr.filter((item) => item < 6)

// console.log(numArr)






// zadaca3
// let input = prompt()

// let numarr = input.split(' ')
// console.log(numarr)
// let newnum = []
// for (let index = 0; index < numarr.length; index++) {
//     const element = Number(numarr[index])
//     newnum.push(element)
// }
// newnum = newnum.filter((e) => e < 3)
// console.log(newnum)






//-------------------------------------------------------------------------------------------
// map -- massivin butun elementlerini biz istediyimiz kimi deyiwir


// zadaca1
// let input = prompt()

// let numarr = input.split(' ')
// console.log(numarr)

// numarr = numarr.map((item) => Number(item))
// numarr = numarr.filter((element) => element < 3)
// console.log(numarr)





// zadaca2
// let myArr = [2, 3, 4, 5, 6, 7]

// myArr = myArr.map((item) => {
//     if (item % 2 === 0) {
//         return item * 2
//     } else {
//         return item * 4
//     }
// })


// console.log(myArr)







// zadaca3

// let even = []
// let odd = []

// let myArr = [1,2,3,4,5,6]
// myArr = myArr.map((item) => {
//     if(item % 2 === 0){
//         even.push(item)
//     }else{
//         odd.push(item) 
//     }
// })

// console.log(myArr)
// console.log(even)
// console.log(odd)














//-------------------------------------------------------------------------------------------
// forEach(item,index) --- adi for kimidir daha qisa sintaksise malikdir


// zadac1  - forEavh ile etdik
// let even = []
// let odd = []

// let myArr = [1,2,3,4,5,6]
// myArr.forEach((item) => {
//     if(item % 2 === 0){
//         even.push(item)
//     }else{
//         odd.push(item) 
//     }
// })

// console.log(myArr)
// console.log(even)
// console.log(odd)







// zadaca2 - adi funkciya ile etdik



// let even = []
// let odd = []

// let myArr = [1, 2, 3, 4, 5, 6]

// function myForEach(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] % 2 === 0) {
//             even.push(arr[index])
//         } else {
//             odd.push(arr[index])
//         }
//     }
// }
// myForEach(myArr)
// console.log(myArr)
// console.log(even)
// console.log(odd)






//-------------------------------------------------------------------------------------------
// reduce -- ELEMENTLERI VURUR BIRBIRINE a*b,3= butun elementleri vurur bir birine sonra vurur 3e




let even = []
let odd = []

let myArr = [1,2,3,4,5,6]

let sum = myArr.reduce((a,b) => a + b,1) //ust uste gelir +1 ==21+1=22
console.log(sum)







//-------------------------------------------------------------------------------------------
// praktika 1

