// 4. let menu = [
//     ["Burger", 8.49,'yemek'],
//     ["Pizza", 10.99,'yemek'],   
//     ["Salat", 5.99,'yemek'],
//     ["Çörək", 2.49,'yemek'],
//     ["Su", 1.99,'ickiler'],
//     ["Kola", 1.49,'ickiler']
// ];
// prompta daxil etdiyiniz ededden ucuz ve 
//yemek novunden asili
//butun yemekler ve qiymetleri cixmalidir

// let menu = [
//     ["Burger", 8.49, 'yemek'],
//     ["Pizza", 10.99, 'yemek'],
//     ["Salat", 5.99, 'yemek'],
//     ["Çörək", 2.49, 'yemek'],
//     ["Su", 1.99, 'ickiler'],
//     ["Kola", 1.49, 'ickiler']
// ];

// let inputsecim = prompt('ickiler ve ya yemek secimivi et')
// let inputqiymet = Number(prompt('qiymeti neden ucuz olsun'))


// let otherMenu = []


// // variant 1 --- asan usul
// menu.forEach((item)=> {
//     if(item[2]===inputsecim &&item[1]<inputqiymet){
//         otherMenu.push(item)
//         console.log(item[0], item[1], item[2])

//     }

// })




//variant2 --- uzundu

// if (inputsecim === 'yemek') {
//     otherMenu = menu.filter((item) => item[2] == inputsecim)
//     otherMenu = otherMenu.filter((item) => item[1] < inputqiymet)
// }else if(inputsecim === 'ickiler'){
//     otherMenu = menu.filter((item) => item[2] == inputsecim)
//     otherMenu = otherMenu.filter((item) => item[1] < inputqiymet)
// }else{
//     console.log("sehvlik var seciminizde")
// }


// otherMenu.forEach((item) => {
//     console.log(item[0], item[1], item[2])
// })


// console.log(otherMenu)



//----------------------------------------------------------------------------------------
// 5.prompta daxil etdiyiniz ededden ucuz ve 
//yemek novunden asili
//butun yemeklerin massivlerini silirsiz

let food = prompt()
let input = Number(prompt())

let menu = [
    ["Burger", 8.49, 'yemek'],
    ["Pizza", 10.99, 'yemek'],
    ["Salat", 5.99, 'yemek'],
    ["Çörək", 2.49, 'yemek'],
    ["Su", 1.99, 'ickiler'],
    ["Kola", 1.49, 'ickiler']
];
let otherMenu = menu.filter((item) => item[1] < input && item[2] === food)
console.log(otherMenu)

// let i
// menu.forEach((item) => {
//     if(item[1] < input && item[2] == food){
//        i = menu.findIndex((itemFood) => item == itemFood)
//        menu.splice(i,0)
//     }
// })



console.log(menu)

































// let food = prompt()
// let input = Number(prompt())

// let menu = [
//     ["Burger", 8.49,'yemek'],
//     ["Pizza", 10.99,'yemek'],   
//     ["Salat", 5.99,'yemek'],
//     ["Çörək", 2.49,'yemek'],
//     ["Su", 1.99,'ickiler'],
//     ["Kola", 1.49,'ickiler']
// ];
// let otherMenu = menu.filter((item) => item[1] < input && item[2] === food)
// console.log(otherMenu)
// let i
// menu.forEach((item) => {
//     if(item[1] < input && item[2] == food){
//        i = menu.findIndex((itemFood) => item == itemFood)
//        menu.splice(i,1)
//     }
// })



// console.log(menu)


