//obyektin icinde funkciya--metod adlanir

// 2usullla yaratmaq olar
// 1ci deyisene funciyani beraberlesdirek
// 2ci usul





// let object = {
//     userName:'Ramin',
//     printName: function(){
//         console.log(this)   
//         //bu halda obyektin her seyi cixi 
//         // --this.userName  --> Ramin
//     }
// }

// object.printName()




// let object = {
//     userName:'Ramin',
//     printName(){
//         console.log(this.userName)
//     }
// }

// object.printName()





//oxlu funksiyalarla this islemir!!!
// let object = {
//     userName:'Ramin',
//     printName: () => {
//         console.log(this.userName)
//     }
// }

// object.printName()




//---------------------------------------------------------------------------------------
//obyekti deyisdi


// let object = {
//     userName:'Ramin',
//     printName(newName){
//         this.userName = newName
//         console.log(this.userName)
//     }
// }

// object.printName('Samir')






//---------------------------------------------------------------------------------------

//1 obyektin icinde o biri byekt cagira biler
//this -ancaq obyektlerde isleyir


// let object = {
//     userName: 'Ramin',
//     changeName(newName) {
//         this.userName = newName
//     },
//     printName() {
//         console.log(this)  //butun obyekti qaytarir
//         console.log(this.userSettings)  //usersettingin her seyini alir
//     },
//     userSettings: {
//         active: true,
//         printActive() { //metod
//             console.log(this.active)
//         }
//     }
// }
// object.printName()
// object.changeName('Samir')
// object.printName()
// object.userSettings.printActive()











// teze massiv yaratmaq
// let array = new Array(1,2,3,4)














//-----------------------------------------------------------------------------
//id-ye esasen dannie vitawit

// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     }]

// let input = Number(prompt())

// let obj = arr.find((item) => item.id === input)
// console.log(obj)
// alert(obj.userId + obj.title + obj.body)























//-------------------------------------------------------------------------
// this obyektlerde islenir 
// elave Array FormData String ve s hazir obyektler var onlarda da islede bilerik

// function f(ev){
//     ev.preventDefault()
//     let formData = new FormData(this)
//     let arr = [...formData.entries()]
//     console.log(arr)
// }

// form.addEventListener('submit', f)







//---------------------------------------------------------------------------------
//hazir obyeklerle is


















