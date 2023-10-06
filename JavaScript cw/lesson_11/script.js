// zadaca1
// Əgər massivdə təkrarlanan adlar olar onları massivdən silin



// let arr = ["Saleh", "Samir", "Nahid", "Nahid", "Ramin","Nahid","Nahid"]



// let deyisen

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         arr = arr.filter((item) => item !== arr[i])
//     }
// }


// console.log(arr)











// zadaca2
// Massivi illərə gorə siralayın

let arr = ["Saleh : 1997", "Samir : 1995", "Nahid : 1996", "Nahid : 1992", "Ramin : 1999"]

// let [one, two, three, ...other] = arr

// let newArr = []
// newArr = arr.map((item) => [item])
// newArr = newArr.map((item) => [item])

// let [one, two, three, ...other] = arr




// let a
// let newArr = []
// arr.forEach((item) => { 
//     newArr.push( item.split(":"))
// })



let newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split(":"))
}
newArr.sort((a,b) => a[1] -b[1])

console.log(newArr)

































// 3. let arr = ["Saleh", "Samir", "Nahid", "Nahid", "Ramin"]

// Əgər massivdə təkrarlanan adlar olar onların sayını yaz

// 4. let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];

// Bu massivdə ən çox və ən az maaşı olan massivlər iyazın
















