// zadaca 1 gosterir sonra artirir

// let i = 0
// while( i < 10){
//     console.log(i)
//     i += 3
// }



// zadaca 2  -deyisenle saxla dovru

// let flag = true

// while (flag) {
//     let input = prompt()

//     if (input === 'end') {
//         flag = false
//     }

//     alert(input)
// }




// zadaca 3  -break


// while (true) {
//     let input = prompt()

//     if (input === 'end') {
//         break
//     }

//     alert(input)
// }



//zadaca 4 -continue

// let i = 0

// while( i < 10){
//     i++
//     if (i === 5){
//         continue
//     }
//     alert(i)
// }




//zadaca 5 while dovru ile  

// text deyiseni var
// let text = 'hello,@%$^& world'
// let newText = ''
// let i = 0 

// while (i < text.length-1) {

//     i++
//     if (text[i] === '@' || text[i] === '$' || text[i] === '%' || text[i] === '^' || text[i] === '&') {
//         continue
//     }

//     newText += text[i]


// }

// console.log(newText)



//zadaza 6 for dovru ile
let text = 'hello,@%$^& world'
let newText = ''

for (let i = 0; i < text.length; i++) {
    if (text[i] === '@' || text[i] === '#' || text[i] === '$' || text[i] === '%' || text[i] === '^' || text[i] === '&' || text[i] === '*' ) {
        continue
    }

    newText += text[i]
}

console.log(newText)



