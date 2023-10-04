// let arr = [3, 1, 7, 2, 4, 9, 8]

// arr.sort()

// console.log(arr)



//-------------------------------------------------------------------------------------------------------

// let arr = [3, 1, 7, 2, 4, 9, 8]

// arr.sort((a, b) => b - a)

// console.log(arr)



//-------------------------------------------------------------------------------------------------------
// sort  --minimumdan maxa


// let arr = [3,1,7,2,4,9,8]
// let menu = [
//     ["Burger", 8.49],
//     ["Pizza", 10.99],   
//     ["Salat", 5.99],
//     ["Çörək", 2.49],
//     ["Su", 1.99],
//     ["Kola", 1.49]
// ];
// let value = 'Birinci bahali'
// function sortMenu(direction){
//     if(direction === "Birinci bahali"){
//         menu.sort((a,b) => b[1] - a[1])
//     } else if(direction === "Birinci ucuz"){
//         menu.sort((a,b) => a[1] - b[1])
//     }
    
// }

// sortMenu(value)

// console.log(menu)





//-------------------------------------------------------------------------------------------------------
// rest operatoru  --- ...
// new Set(arr)  -- massivden tekrarlanan elementleri sildi



// let arr = [3,1,1,7,7,2,4,9,8]

// let newarr = [...new Set(arr)]
// console.log(newarr)



//-------------------------------------------------------------------------------------------------------
// [3, 1, 1, 7, 7, 2, 4, 9, 8, 10]

// let arr = [3,1,1,7,7,2,4,9,8]
// let a= [...arr,10]
// console.log(a)





//-------------------------------------------------------------------------------------------------------
// [3, 1, 1, 7, 7, 2, 4, 9, 8, 12]

// let input = Number(prompt())
// let arr = [3,1,1,7,7,2,4,9,8]
// arr = [...arr,input]
// console.log(arr)








//-------------------------------------------------------------------------------------------------------
// destructizaciya deyisene massiv menimsetmek


// let arr = [3,1,1,7,7,2,4,9,8]
// let [one, two,three] = arr
// console.log(two)  //1
// console.log(one)  //3





// let arr = [3,1,1,7,7,2,4,9,8]


// let [one, two, three, ...other] = arr
// let newArr = [one,two,three] //3 1 1

// console.log(newArr)
// console.log(other)   //[7, 7, 2, 4, 9, 8]






//-------------------------------------------------------------------------------------------------------




// let arr = [1,2,3,4,5]

// arr.push(6)

// console.log(arr)


// //dublikat  -deyissek teze massivi  kohnede deyisir
// let newarr = arr

// // copy  -- teze massivi deyissek kohne deyismir
// // let newarr = [...arr]



// console.log(newarr)
// newarr.push(7)
// console.log(newarr)






//-------------------------------------------------------------------------------------------------------
// Array obyekti  -- from 


// let a = Array.from('123')  
// console.log(a) // ['1', '2', '3']



// let a = Array.from('1 2 3') 
// console.log(a)  // ['1', ' ', '2', ' ', '3']
// console.log(Array.isArray(a))  //true







//-------------------------------------------------------------------------------------------------------
//  [1, 2, 3, 4, 4, 5]

// let array = [1,2,3,[4,4,5]]
// let narr = []

// array.forEach((item) => {
//     if(!Array.isArray(item)){
//          narr.push(item)
//     }else{        
//         item.forEach((itemArr) => {
//             narr.push(itemArr)
//         })
//     }
// })

// console.log(narr)










//-------------------------------------------------------------------------------------------------------
// toSpliced  -- eynidi Spliced ile yalniz teze massiv qaytarir -deyismir





let arr = [1,2,3,5,4]
let n = arr.toSpliced(0,1)
n = n.toSorted()
console.log(n)



