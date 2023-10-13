// 1. Bu obyektde acarlari ve deyeleri hamisini ayrica sozlerle yazmaq lazimdir

let book = {
    'book-name':'Game of thorones',
    'book-author':'George Martin',  
}


let bookEntries = Object.entries(book)
console.log(bookEntries)

let newarr = []
newarr =bookEntries.map((item) => 
{
    if(item[0].includes('-')){
        newarr = [item[0][0].toUpperCase() + item[0].slice(1).split('-').join(' ') , item[1]]
   
        return newarr
    }
})


console.log(newarr)



//1ci usul
// Book name Game of thorones
// Book author George Martin

// let newarr = []

// bookEntries.forEach((item) => {
//     newarr.push([item[0][0].
//         toUpperCase() + item[0].
//         slice(1).
//         replace('-', ' '), item[1]])
// })


// console.log(newarr)

// newarr.forEach((item) => {
//     console.log(item[0], item[1])
// })




















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
