// setTimeout metod -- ancaq funksiya cagrildigi vaxt isleyir
// gozluyur funksiya bitsin sonra iwliyir --- setInterval gozlemir isliyir ele hey
// --ancaq sertin icinde isledilir
//asinxron proqramlasdirma -- bunlar ucun setTimeout ve setIntervaldan istifade edirik
// bunun komeyi ile 1 nece emeliyyatlari eyni vaxtda islede bilerik




// let i = 0
// function printName(){
//     i++
//     if(i < 20){
//         setTimeout(() => {
//             console.log('Adam')
//             printName()
//         },100)
//     }    
// }
// printName()
// console.log('Sam')
// console.log('Jon')







// function printN(){
//   i++
//   console.log('Adam')

//   if(i < 20){
//       setTimeout(() => {
//           console.log('Adam')
//           printName()
//       },100)
//   }    
// }
// printN()


// massiv 20eded settimeout 15e qqeder





//---------------------------------------------------------------------------------


// let arr =[21,22,23,24,25,26,27,28,29,110,11,12,13,14,15,16,17,18,19,20]

// let c =0
// function eded(){

// if(c<14){
//   setTimeout(() => {
//     console.log(arr[c])
//     eded()
//     c++
// },100)  // millisaniyede edir
// }

// }

// eded()








//---------------------------------------------------------



// let i = 0

// function printN(){
//   i++
//   console.log('Jon')

//   if(i < 20){
//       setTimeout(printN , 100)
//   }    
// }
// printN()






//---------------------------------------------------------
// setInterval -- 2 parametr qebul edir -anonim fnksiya ve vaxt
// sonsuzluq avtomatik isleyir




// setInterval(() => {
//   console.log('Hello')
// },1000)





//dayandirmaq ucun -deyisene mesimsedirik ve sert yaziriq -- clearInterval
// let arr = [21, 22, 23, 24, 25, 26, 27, 28, 29, 110, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// let i = 0
// let stopArray = setInterval(() => {
//   i++
//   console.log(arr[i])
//   if (i >= 5) {
//     clearInterval(stopArray)


//   }

// }, 1000)






//-----------------------------------------------------------------
// new Date






// console.log(new Date())

// let currentTime = new Date
// console.log(currentTime.getDate(), currentTime.getMonth() + 1, currentTime.getFullYear())
// console.log()



// let time = new Date
// console.log(`${time.getDate()} / ${time.getMonth() + 1} / ${time.getFullYear()}`)
// console.log()




// setInterval(() => {
//   let currentTime = new Date
//   let day = currentTime.getDate()
//   let month = currentTime.getMonth() + 1
//   let year = currentTime.getFullYear()
//   let hour = currentTime.getHours()
//   let minutes = currentTime.getMinutes()
//   let seconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds()
//   console.log(`${day}/${month}/${year} ${hour}:${minutes}:${seconds}`)
// }, 1000)







// 13:50 ders bitdi des davam edir



// praktika 1

// let stopTime = setInterval(() => {
//   let currentTime = new Date
//   // let hour = currentTime.getHours()
//   let hour = 10
//   // let minutes = currentTime.getMinutes()
//   let minutes = 20
//   console.log(`${hour}:${minutes}`)

//   if (hour >= 11 && hour <= 13 && minutes <= 50) {
//     console.log("ders baslayib")
//     console.log("ders davam edir")
//     clearInterval(stopTime)
//   } else if (hour == 13 && minutes <= 51) {
//     console.log("ders bitsi")
//     clearInterval(stopTime)

//   } else {
//     console.log("ders deyil")
//     clearInterval(stopTime)
//   }

// }, 1000)








//muellimin yazdigi
// let time = setInterval(() => {
//   let currentTime = new Date
//   let day = currentTime.getDate()
//   let month = currentTime.getMonth() + 1
//   let year = currentTime.getFullYear()
//   let hour = currentTime.getHours()
//   let minutes = currentTime.getMinutes()
//   let seconds = currentTime.getSeconds()
//   console.log(`${day}/${month}/${year} ${hour}:${minutes}:${seconds}`)
//   if(day === 16 && month === 10 && year === 2023 && hour > 11 && minutes > 0 && hour <= 13 && minutes < 50){
//       alert('ders bashladi')
//       alert('ders davam edir')
//       clearInterval(time)

//   }else{
//       alert('der vaxti deyil')
//       clearInterval(time)

//   }
// }, 1000)






//---------------------------------------------
// praktika 2
// 60defe promt cixir promt 1re gelende diyansin

// i = 10
// setInterval(() => {

//   i--
//   if (i >= 1) {
//     console.log(i)
//     let input = prompt("")
//     console.log(input)
//   }

// }, 1000)



i = 10
let time = setInterval(() => {
  prompt(i)
  i--
  if (i <= 1) {
    clearInterval(time)
  }

}, 1000)


