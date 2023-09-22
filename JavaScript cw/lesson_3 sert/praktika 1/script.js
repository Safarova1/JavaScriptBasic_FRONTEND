// 2 ede daxil edilir eger ededirse 4 emeliyyat yerine yetirilir deyilse 'eded deyil'


let numOne = Number(prompt())
let numSecond = Number(prompt())

if (!isNaN(numOne) && !isNaN(numSecond)){
    console.log(numOne + numSecond)
    console.log(numOne - numSecond)
    console.log(numOne * numSecond)
    console.log(numOne / numSecond)
}else{
    alert('eded deyil')
}
