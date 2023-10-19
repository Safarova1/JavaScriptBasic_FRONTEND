// mesele 1 
// Əgər massivdə təkrarlanan adlar olar onları massivdən silin



// let arr = ["Saleh", "Samir", "Nahid", "Nahid", "Ramin", "Nahid", "Nahid"]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         arr = arr.filter((item) => item !== arr[i])
//     }
// }

// console.log(arr)












// mesele2
// Massivi illərə gorə siralayın


// let arr = ["Saleh: 1997", "Samir : 1995", "Nahid : 1996", "Nahid : 1992", "Ramin : 1999"]

// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].split(":"))
// }
// newArr.sort((a,b) => a[1] -b[1])

// console.log(newArr)








//mesele3
// Əgər massivdə təkrarlanan adlar olar onların sayını yaz


// let arr = ["Saleh", "Samir", "Nahid", "Nahid", "Ramin"]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//         arr = arr.filter((item) => item !== arr[i])
//     }
// }


// console.log(arr)














//mesele4
// Bu massivdə ən çox və ən az maaşı olan massivləri yazın

let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];


let massiv = []
for (let i = 0; i < salary.length; i++) {
    massiv.push(salary[i].reduce((a, c) => a + c))
}
// console.log(massiv)
console.log(salary)


let max = massiv[0]
let min = massiv[0]
let countmax=0
let countmin=0
for (let i = 0; i < massiv.length; i++) {
    if (max < massiv[i]) {
        max = massiv[i]
        countmax = i

    } else if (min > massiv[i]) {
        min = massiv[i]
        countmin = i
    }
}


console.log(max)
console.log(salary[countmax])

console.log(min)
console.log(salary[countmin])
























