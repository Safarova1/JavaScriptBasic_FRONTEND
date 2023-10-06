let menu = [
    ["Pizza", 10],
    ["Burger", 8.49],
    ["Salat", 5.99],
    ["Çörək", 2.49],
    ["Su", 1.99],
    ["Kola", 1.49]
];


// zadaca1
const fullMenu = () => {
    return menu.forEach((item) => { console.log(item[0], item[1]) })
}

let input = prompt("eger 'fullmenu' qeyd etseniz butun menuyunu gore bilersiniz")

if (input === 'fullmenu') {
    fullMenu()
} else {
    console.log("sehv melumat")
}





// zadaca2
let sifaris = prompt("yemek secimi edin")
let miqdar = Number(prompt('miqdarini qeyd edin'))

const qiymeti = () => {
    let qiymet = 1
    let hesab = []

    menu.forEach((item) => {

        if (item[0] === sifaris) { hesab = item }
    })

    qiymet = hesab[1] * miqdar

    return hesab[0] + '- miqdari:' + miqdar +' umumi qiymeti: ' + qiymet.toFixed(2)

}

console.log(qiymeti())



