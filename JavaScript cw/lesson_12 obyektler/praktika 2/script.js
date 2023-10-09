// massivin filtrasiyasi ucun iki input yaradirsiz. 
// Iki deyer daxil edirsiz. 
// Birnci inputa acar daxil edirsiz ikinci inputa deyer. 
// Ve daxil edilen deyerlere gore massiv filtr olunmalidir



let arr = [
    {
        'studentName': 'Alex',
        'profession': 'Developer',
        id: 1
    },
    {
        'studentName': 'Alex',
        'profession': 'Doctor',
        id: 2
    },
    {
        'studentName': 'Sam',
        'profession': 'Developer',
        id: 3
    }
]

console.log(arr)

let acar = prompt()
let deyer = prompt()

let newarr = arr.filter((item) => item[acar] === deyer)

console.log(newarr)
