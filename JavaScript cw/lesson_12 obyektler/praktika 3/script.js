// funkciya addobj
// funkciya her cagrilanda input ile daxil edilir massive obj elave edir  oftomatik id boyuyur
// 

let massiv = []
let count = 1

const addObj = () => {

    let input = prompt()
    massiv.push({ Ad: input, id: count })
    count++
}


addObj()
addObj()
addObj()

console.log(massiv)