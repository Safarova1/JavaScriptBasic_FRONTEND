const student = [
    ["Nigar", "Aliyeva", 85],
    ["Orxan", "Memmedov", 92],
    ["Ferid", "Husetyn", 75],
    ["Zahida", "Quliyeva", 85],
];


//siraladim
let sortedStudent = student.sort((a, b) => a[2] - b[2])

//eyni qiymetlileri cixartdim
let item2Student = []
sortedStudent.forEach((item) => {
    item2Student.push(item[2])
})
let newStudent = [... new Set(item2Student)]

//ortalamani gosterdim
let ortalama = (newStudent.reduce((a, b) => a + b)) / newStudent.length
console.log(ortalama)

//ortama uzerileri gosterdim
let ortalamaUzeri = sortedStudent.filter((item) => item[2] > ortalama)
console.log(ortalamaUzeri)


//en yuksek en asagi alanlar
let minBal = sortedStudent[0][0]
console.log(minBal)


let maxBal = sortedStudent.at(-1)[0]
console.log(maxBal)
