// funkciya addobj
// funkciya her cagrilanda input ile daxil edilir massive obj elave edir  oftomatik id boyuyur
// 



// 3. AddObject adlı function yaradın. Bu funksiyanı hər dəfə çağıranda propmt çıxsın. Prompta ad daxil edin. Ad daxil olunan kimi bir boş massive avtomatik object yazılacaq. Objectin içində avtomatik böyüyən id yazılacaq və daxil olunan ad


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