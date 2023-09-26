let numOne = Number(prompt("birinci ededi daxil edin"))
let numSecond = Number(prompt("ikinci ededi daxil edin"))
let secim = prompt("cem - ferq - hasil - bolme")


const cemFunction = () => {
    let cem = numOne + numSecond
    console.log(cem)
}

const ferqFunction = () => {
    let ferq = numOne - numSecond
    console.log(ferq)
}

const hasilFunction = () => {
    let hasil = numOne * numSecond
    console.log(hasil)
}

const bolmeFunction = () => {
    let bolme = numOne / numSecond
    console.log(bolme)
}

if (secim === "cem") {
    cemFunction()
} else if (secim === "ferq") {
    ferqFunction()
} else if (secim === "hasil") {
    hasilFunction()
} else if (secim === "bolme") {
    bolmeFunction()
} else {
    alert("duzgun secim edilmedi")
}