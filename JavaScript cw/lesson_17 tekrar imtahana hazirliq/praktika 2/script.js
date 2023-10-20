let deyisen = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

let parol = []




for (let i = 0; i < 11; i++) {
    let simbol = deyisen[Math.floor(Math.random() * deyisen.length)]
    parol.push(simbol)
}

console.log(parol)














// let text = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'



// // console.log(password)

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


