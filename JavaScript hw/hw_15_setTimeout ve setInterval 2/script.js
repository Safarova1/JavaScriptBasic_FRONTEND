
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








