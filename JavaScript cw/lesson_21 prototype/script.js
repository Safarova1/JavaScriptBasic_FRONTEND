// prototype

// function Vehicle(color,type){
//     this.color = color
//     this.type = type
// }



// Vehicle.prototype.a=function(){
//     console.log(this.color,this.type)
// }


// let bmw = new Vehicle('red' ,'x6')


// console.log(bmw)
// bmw.a()



















// function Vehicle(color,type){
//     this.color = color
//     this.type = type


// }

// // Vehicle.prototype.a =  function(){
// //     console.log(this.color,this.type)
// // }

// // let bmw = new Vehicle('red', 'X6')

// // bmw.a()

// Array.prototype.myForEach = function(item){
//     let thisArray = this
//     let array = []
//     for(let i = 0; i< thisArray.length;i++){
//         if(item === thisArray[i]){
//             array.push(thisArray[i])
//         }
//     }
//     return array
// }

// let arr = [1,2,3,4,5,6,7,8]

// let ar = arr.myForEach(1)

// console.log(ar)

// Object.prototype.myMethod = function(){
//   console.log(this.name)
// }

// let VehicleOfBmw = {
//     company:'BMW',
//     country:'Germany',
//     greetClient:function(nameOfClient){
//          console.log(nameOfClient)
//     }
// }

// let X6 = {
//     __proto__: VehicleOfBmw,
//     model:'X6'
// }


// // X6.__proto__ = VehicleOfBmw



// console.log(X6.company)
// X6.greetClient('Sama')


// let X5 = {
//     model:'X5'
// }

// console.log(X6)
























// PRAKTIKA1 - __proto__





// let VehicleOfMBW = {
//     company: 'BMW',
//     country: 'ALMANIYA',
//     greetCilent: function (name) {
//         return name
//     },
//     addVehicle: function (car) {
//        this.arrayOfCars.push({__proto__:VehicleOfMBW,carname:car})
//        return this.arrayOfCars
//     },
//     arrayOfCars: []
// }




// VehicleOfMBW.greetCilent('Sama')
// VehicleOfMBW.addVehicle('x6')
// console.log(VehicleOfMBW)



// VehicleOfMBW.arrayOfCars.forEach((item)=>{
//     console.log(item.carname,item.company,item.greetCilent('jack'),item.addVehicle('x5'))
// })










// PRAKTIKA1 - prototype

// function VehicleOfBmw(nameOfCar) {
//     this.nameOfCar = nameOfCar
//     this.company = 'BMW'
//     this.country = 'Germany'
//     this.arrayOfCar = []
// }

// VehicleOfBmw.prototype.greetClient = function (nameOfClient) {
//     return nameOfClient
    
// }

// VehicleOfBmw.prototype.addVehicle = function (nameOfCar) {
//     this.arrayOfCar.push(new VehicleOfBmw(nameOfCar))
//     return this.arrayOfCar
// }



// // mojno tak
// // let carBMW = new VehicleOfBmw('X5')
// // console.log(carBMW)

// let carBMW = new VehicleOfBmw()
// console.log(carBMW.addVehicle('x5'))
// console.log(carBMW.greetClient('jack'))

























//OLMAZ
function VehicleOfMercedess(){
    this.company = 'BMW'
    this.country ='Germany'
    this.arrayOfCar = []
}

VehicleOfMercedess.prototype.greetClient =  function(nameOfClient){
    return nameOfClient
}

VehicleOfMercedess.prototype.VehicleOf =  function(nameOfCar){
    this.nameOfCar = nameOfCar
}

VehicleOfMercedess.prototype.addVehicle =  function(nameOfCar){
    let carMercedess = new VehicleOfMercedess()
    this.arrayOfCar.push(new carMercedess.VehicleOf(nameOfCar))
}

let carMercedess = new VehicleOfMercedess()
carMercedess.addVehicle('X5')

console.log(carMercedess)
















