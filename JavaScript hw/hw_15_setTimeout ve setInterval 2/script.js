//alinmadi

// let input = prompt("Ramin Nasraddinzade-ramin98-password")

// let massiv = []
// let obyekt = {}
// if (input !== "show") {


//     // } else {

//     let currentTime = new Date
//     let gun = currentTime.getDate()
//     let saat = currentTime.getHours()

//     let arr = input.split("-")

//     obyekt = {
//         name: arr[0],
//         login: arr[1],
//         parol: arr[2],
//         date: [
//             {
//                 day: gun,
//                 clock: saat
//             }
//         ]
//     }
//     massiv.push(obyekt)

//     console.log(obyekt)
//     console.log(massiv)
//     clearInterval(stopTime)


// } else {
//     console.log("poka")
//     console.log(obyekt)
// }


















// let arr = []

// let obb = new Object()

// let qlavniyMassiv = [obb]

// console.log(qlavniyMassiv)

// let stopArray = setInterval(() => {

//     let input = prompt("Ramin Nasraddinzade-ramin98-password")




//     if (input == "show") {
//         console.log(arr)
//         console.log(Object.values(obb))

//         clearInterval(stopArray)
//     } else {

//         arr = arr.push(input.split("-"))

//         obb["name"] = arr[0]
//         obb["login"] = arr[1]
//         obb["password"] = arr[2]

//     }

// }, 1000)
















// setInterval(() => {

//     let input = prompt("Ramin Nasraddinzade-ramin98-password")


//     if (input != "show") {
//         let input = prompt("Ramin Nasraddinzade-ramin98-password")


//         let arr = []
//         arr = input.split("-")

//         let massiv = []

//         massiv.push(arr)

//         let obb = new Object()

//         obb["name"] = arr[0]
//         obb["login"] = arr[1]
//         obb["password"] = arr[2]


//         let qlavniyMassiv = [obb]

//         console.log(qlavniyMassiv)
//     } else {
//         console.log(input)
//         clearInterval(stopArray)
//     }

// }, 1000)





let massiv = []

let stopArray = setInterval(() => {

    let input = prompt("ad,login,parol daxil edin,numune: Ramin Nasraddinzade-ramin98-password")

    let arr = []
    arr = input.split('-')

    let currentTime = new Date
    let deqiqe = currentTime.getMinutes()
    let saat = currentTime.getHours()
    let tarix = `saat: ${saat}:${deqiqe}`

    let obyekt = {
        ad: arr[0],
        login: arr[1],
        parol: arr[2],
        tarix: tarix
    }

    if (input === 'show') {
        massiv.forEach((item)=>alert(Object.values(item)) )
    } else if (input === 'end') {
        clearInterval(stopArray)

    } else {
        massiv.push(obyekt)
        console.log(massiv)
    }

}, 1000)








