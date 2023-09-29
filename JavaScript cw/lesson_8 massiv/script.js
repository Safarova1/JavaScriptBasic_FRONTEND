// //massiv

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array[0], array[1])

// //metodlar

// //axira eleva olunur
// array.push(11)
// console.log(array)

// //axirindan silir
// array.pop()
// console.log(array)

// //evvelinden silir
// array.shift()
// console.log(array)

// //evvele elave olunur
// array.unshift(9)
// console.log(array)






// //hemen indexsin deyerini qaytarir
// console.log(array.at(1))


// //massivde olan 3un indexsin
// console.log(array.indexOf(1))


// //elementin olub olmadigini yoxlayir
// console.log(array.includes(2)) //true


//----------------------------------------------------------------------------------------------
// //concat birlewdirmek


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arraySecond = [12, 13, 14, 15]

// //concat birlewdirmek
// let newArray = array.concat(arraySecond)

// console.log(newArray)





//----------------------------------------------------------------------------------------------
// //icindeki 1 skobkani acir --- flat

// let innerArray = [1, 2, [3, 4]]

// console.log(innerArray[2][0]) //3

// //[1, 2, 3, 4]
// console.log(innerArray.flat())




//----------------------------------------------------------------------------------------------
//split -- texti cevirir massive bolub her hansi elemente uygun
//join massivi setire cevirir elementler arasinda '-' isaresi qoyur


// let text = 'hello, i am Sama, Ramin'
// // hello- i am Sama- Ramin
// console.log(text.split(',').join('-'))


// let number = '1 2 3 4 5 6'
// // 1-2-3-4-5-6
// console.log(number.split(' ').join('-'))


// let num = '1-2-3-4-5-6'
// // 1 2 3 4 5 6
// console.log(number.split('-').join(' '))











//----------------------------------------------------------------------------------------------
// reverse- cevirir ters

// let number = [1, 2, 3, 4, 5, 6, 7]
// console.log(number.reverse())




//----------------------------------------------------------------------------------------------
// kolbak function(num) metodun icinde diger metod yazilir


let array = [1, 2, 3, 4, 5, 6, 7, 9]
console.log(array.every((num) => num < 8)) //false

console.log(array.some((num) => num < 12)) //true















