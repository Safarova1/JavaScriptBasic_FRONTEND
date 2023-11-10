let tezeObyekt = {
    addMassiv: function (ad, adress, profesiya,indiki_vaxti) {
        this.massiv.push({ __proto__: tezeObyekt, name: ad, adress: adress, profession: profesiya, time: indiki_vaxti })
        return this.massiv
    },
    massiv: []

}


let stopArray = setInterval(() => {

    let inputName = prompt("ad daxil edin,numune: Sama")
    let inputAdress = prompt("adress daxil edin,numune: azadliq prospektik")
    let inputProfesiion = prompt("professiya daxil edin,numune: It mutexessizi")

    let input = prompt('davam etmek isteyirsiniz/ yes no ')


    let currentTime = new Date
    let deqiqe = currentTime.getMinutes()
    let saat = currentTime.getHours()
    let tarix = `saat: ${saat}:${deqiqe}`

    tezeObyekt.addMassiv(inputName,inputAdress,inputProfesiion,tarix)
    console.log(tezeObyekt)

    if (input === 'no') {
        clearInterval(stopArray)

    }



}, 1000)












// while (true) {
//     let inputName = prompt('Sama')

//     tezeObyekt.addMassiv(input)
//     console.log(tezeObyekt)
// }



