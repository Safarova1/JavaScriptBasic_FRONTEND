setInterval(() => {

    let input = prompt("Ramin Nasraddinzade-ramin98-password")

    let massiv = []
    let obyekt
    if (input !== "show") {


        // } else {

        let currentTime = new Date
        let gun = currentTime.getDate()
        let saat = currentTime.getHours()

        let arr = input.split("-")

        obyekt = {
            name: arr[0],
            login: arr[1],
            parol: arr[2],
            date: [
                {
                    day: gun,
                    clock: saat
                }
            ]
        }
        massiv.push(obyekt)

        console.log(obyekt)
        console.log(massiv)
        clearInterval(stopTime)


    }

}, 1000)
