// //massiv

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array[0], array[1])



//---------------------------------------------------------------------------------------
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
// //concat --- birlewdirmek


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arraySecond = [12, 13, 14, 15]

// //concat birlewdirmek
// let newArray = array.concat(arraySecond)

// console.log(newArray)





//----------------------------------------------------------------------------------------------
// // flat ---  icindeki 1 skobkani acir 

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
// kolbak function(num) -- metodun icinde diger metod yazilir
//some every find findIndex

// let arraynew = [1, 2, 3, 4, 5, 6, 7, 9]
// console.log(arraynew.every((num) => num < 8)) //false -elementlerin her biri kicikdir 8den deyir

// console.log(arraynew.some((num) => num < 8)) //true -eger elementlerden biri kicikdirdise 8den true qaytarir





// //find - axtarib

// let array = [1, 2, 3, 4, 5, 6, 7, 9]

// let findItem = array.find((item, index) => item > 3)  //ilk 3den boyuk reqemi qaytarir
// let findBeraber = array.find((item, index) => item === 3)  // 3yazilan elementi qaytarir

// console.log(findItem)
// console.log(findBeraber)


// let findIndex = array.find((item, index) => index > 3)  //ilk 3den boyuk reqemi qaytarir
// let findBer = array.find((item, index) => index === 3)  // 3yazilan elementi qaytarir
// let findIIndex = array.findIndex((index) => index > 3)

// console.log(findIndex)
// console.log(findBer)
// console.log(findIIndex)







// const f = () => 'hello'   //return 'hello qisa yazilimi const f = () => {return 'hello' }
// console.log(f())







//----------------------------------------------------------------------------------------------
//fill -- butun elemntleri eynilesdirir

// let myArray = [1, 2, 3, 4, 5, 6]

// myArray.fill(10)
// console.log(myArray)










//----------------------------------------------------------------------------------------------
// Array -- ana massiv ora her hansisa bizim massivi oturmek
// Array.from
// Array.isArray


// let myArray = [1, 2, 3, 4, 5]
// console.log(Array.isArray(myArray))  //true




// // ['s', ' ', 'f', ' ', 'd', ' ', 's', 'a', 'l', 'a', 'm']
// console.log(Array.from('s f d salam'))  //verdiyim stringi masssiv et



// // [1, 2, 3, 4, 5, 6]
// let my = new Array(1, 2, 3, 4, 5, 6)
// console.log(my)





//----------------------------------------------------------------------------------------------

// let input = prompt('daxil et')

// console.log(input.split(' ').find((item) => item === '3'))




//----------------------------------------------------------------------------------------------


// praktika 1 -5








// map -- her elementi 2ye vurur

let arr =[1,2,3]

let newarr = arr.map((item) => item *2)
console.log(arr)
console.log(newarr)