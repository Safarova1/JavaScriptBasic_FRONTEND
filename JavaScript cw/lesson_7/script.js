//---------------------------------------------------------------------

// const minus = (numOne, numTwo) => {
//     return numOne - numTwo
// }
// alert(minus(10, 2))





//---------------------------------------------------------------------


// const userInfo = (nameUser, age, profession, isAvailable) => {
//     console.log(`The user ${nameUser} is ${profession} of ${age} year old is ${isAvailable ? 'available' :"not available" }  `)
// }

// userInfo('David', 30, 'developer',false)




//----------------------------------------------------------------------

// let text = 'abc123'

// const findNumber = (myText) => {
//     for (let i = 0; i < myText.length; i++) {
//         if (!isNaN(myText[i])) {   //ededleri cixarir 
//             console.log(myText[i])
//             console.log('eded var')
//         }
//     }
// }

// findNumber(text)






//----------------------------------------------------------------------

// let text = 'abc123'

// const findNumber = (myText) => {
//     for (let i = 0; i < myText.length; i++) {
//         if (myText[i] == +myText[i]) {  //edede cevrir '1'  ==Number(myText[i])
//             console.log(myText[i])
//             console.log('eded var')
//         }
//     }
// }

// findNumber(text)







//----------------------------------------------------------------------
//qapanmada funksiyani deyisene menimsedib deyiseni cagirmaliyiq
// _ bu sefer funksiyanin icindeki return ise salinir


// const addText = () => {
//     let newText = ''

//     return () => {
//         let text = prompt()
//         newText += text + ' '
//         return newText
//     }
// }

// let newAddText = addText()

// console.log(newAddText())
// console.log(newAddText())












//----------------------------------------------------------------------
// praktika 1





//------------------------------------------------------------------------------------
// praktika 2


//------------------------------------------------------------------------------------
// daxil etdiyimizi goreceyik



// usul1
// const input = () => {

//     let text = ''
//     return () => {
//         let input = prompt()
//         text += input +' '

//         return text
//     }
// }


// let newInput = input()
// newInput()
// newInput()
// newInput()
// newInput()
// console.log(newInput())





// usul2
// const input = () => {

//     let text = ''

//     return () => {
//         for (let i = 0; i < 5; i++) {
//             let input = prompt()
//             text += input + ' '


//         }
//         return text
//     }
// }


// let newInput = input()
// console.log(newInput())






//------------------------------------------------------------------------------------
//windowsdaki deyisen ve klass adlarini qaytardi
// this istifade ederken kohne funksiyani yazin--teze ile yaxsi islemir

// function show() {
//     console.log(this)
// }

// show()



















