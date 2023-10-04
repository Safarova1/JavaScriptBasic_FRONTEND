let input = Number(prompt()) //3

// 3den ucuz massivler gostersin
let menu = [
    ["Burger", 8.49],
    ["Pizza", 10.99],
    ["Salat", 5.99],
    ["Çörək", 2.49],
    ["Su", 1.99],
    ["Kola", 1.49]
];


let otherMenu = []

otherMenu = menu.filter((item) => item[1] < input)

otherMenu.forEach((item) => {
    console.log(item[0],item[1])
})


console.log(otherMenu)