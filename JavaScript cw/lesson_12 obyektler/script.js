// //1ci usul
// let obj = {
//     studentName: 'Alex',
//     profession: 'developer'
// }

// console.log(obj.studentName, obj.profession)



// // 2ci usul
// let newObj = new Object()
// newObj.studentNam = 'Alex'
// newObj.profession = 'Developer'


// console.log(newObj['studentNam'])



// console.log(obj, newObj)






//-----------------------------------------------------------------------
// // eger istiyirem deyisenle obyektin acarlarina uygun gonderim


// let object = {
//     'student Name': 'Alex',
//     'profession':'developer'
// }


// let input = prompt()  // student Name ---> Alex  alacam   (profession ---> develoer)


// console.log(object[input])












//-----------------------------------------------------------------------


// //massivin elementleri obyektlerdi
// let arr = [
//     {
//         'student Name': 'Alex',
//         'profession': 'developer',
//         id: 1

//     },
//     {
//         'student Name': 'Alex',
//         'profession': 'doctor',
//         id: 2

//     },
//     {
//         'student Name': 'Sam',
//         'profession': 'developer',
//         id: 3

//     },

// ]

// // let input = prompt()
// // let newarr = arr.filter((item) => item[input] === 'developer')

// // console.log(newarr)



// let inputStudent = prompt()
// let inputProfession = prompt()

// let newarr = arr.filter((item) => item[inputStudent] === inputProfession)

// console.log(newarr)   //student Name: 'Sam', profession: 'developer', id: 3

// //1ci usul
// // console.log(newarr[0]['student Name'])


// //2ci usul
// // newarr.forEach((item) => {
// //     console.log(item['student Name'])
// // })






//-----------------------------------------------------------------------
// //obyekte acar ve deyer elave etmek



// //2 bos object yaratmaq
// let newObj = new Object()
// let object = {}


// //elave edirem
// newObj.studentName = 'Alex'
// newObj.profession = 'Developer'
// console.log(newObj)


// //deyisdim deyeri
// newObj.profession = 'doctor'
// console.log(newObj)


// //silmek delete
// delete newObj.profession
// console.log(newObj)