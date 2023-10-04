// 2. let menu = [
//     ["Burger", 8.49],
//     ["Pizza", 10.99],   
//     ["Salat", 5.99],
//     ["Çörək", 2.49],
//     ["Su", 1.99],
//     ["Kola", 1.49]
// ];
// let otherMenu = []
//Prompta daxil etdiyini yemeyin ve ya suyun massivini
//yazirsiz otherMenu massivine 


let menu = [
    ["Burger", 8.49],
    ["Pizza", 10.99],
    ["Salat", 5.99],
    ["Çörək", 2.49],
    ["Su", 1.99],
    ["Kola", 1.49]
];

let input = prompt()
let otherMenu = []


menu.forEach((item)=>{ 
    if(item[0]===input){
        otherMenu.push(item)
    }else{
        console.log('worng')
    }

})


console.log(otherMenu)