// arr massivinin içindəki adları avtomatik yaranan obyektlerin
//  studentName açarına yazırsız bu obyetleridə yazırsız bir boş massive

let arr = ['Samir', 'Saleh', 'Nahid', 'Sam', 'Ramin']

let massiv = []

arr.forEach((item) => {

    //usul1
    // let obj = {}
    // obj.studentName = item
    // massiv.push(obj)

    // usul2
    massiv.push({ studentName: item })

})

console.log(massiv)

// ancaq deyerleri cixart massivden
massiv.forEach((item) => {
    console.log(item['studentName'])
})







