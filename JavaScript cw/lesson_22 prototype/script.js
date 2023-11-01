//-----------------------------------------------------------------------
//1ci usul tpototype ile

// function Animal(name) {
//     this.name = name;
// }
// // Animal əsas sinifin metodunu elan edirik
// Animal.prototype.speak = function () {
//     console.log(this.name + ' səs çıxarır.');
// };
// // Dog alt sinif konstruktoru
// function Dog(name) {
//     // Əsas sinif konstruktorunu alt sinif kontekstində çağırırıq 
//     Animal.call(this, name);
// }
// // Animal-dan metodları irs alırıq
// Dog.prototype = Object.create(Animal.prototype);
// // Dog konstruktorunu düzgün obyekt yaratmaq üçün qururuq
// Dog.prototype.constructor = Dog;
// // Yeni metodlar əlavə edə bilərik və ya mövcud olanları yenidən yazıla bilərik
// Dog.prototype.speak = function () {
//     console.log(this.name + ' hürür.');
// };


// // // Dog sinifinin bir nümunəsini yaradırıq 
// var dog = new Dog("Rex") 
// dog.speak() //Rex hürür.







//----------------------------------------------------------
//klaslarla

// class AnimalTwo {
//     constructor(name) {
//         this.name = name
//     }
 
//     speak() {
//         console.log(this.name + ' səs çıxarır.');
//     };
 
// }
 
// class DogTwo extends AnimalTwo {
//     constructor(name) {
//         super(name)
//     }
 
//     speak() {
//         console.log(this.name + ' səs çıxarır.');
//     };
// }
 
// let animal = new AnimalTwo('Rex')
// let dog = new AnimalTwo('RexTwo')
// animal.speak()
// dog.speak()

































