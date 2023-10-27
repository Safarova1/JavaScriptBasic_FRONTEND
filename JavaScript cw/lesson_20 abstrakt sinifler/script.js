//abstrakt class ---serhedler qoymaq ucun koduma istifade ede bilerem

// class Animal {
//     constructor(name) {
//         if (new.target === Animal) {
//             throw new Error('sen abstrakt klassda obyekt yarada bilersen')
//         }
//         this.name = name;
//     }
// }

// class Dog extends Animal{

// }

// class Cat extends Animal{

// }



// const dog = new Dog ('toplan', 'doberman')
// const cat = new Cat ('Mestan','wotlant')

// //sehv yaratmaq ucun
// // const animal = new Animal()
// // console.log(animal)

// console.log(dog)
// console.log(cat)




// praktika1 shekli var
//throw new error 



// class Telebeler {
//     constructor(adi,soyadi){
//         this.adi=adi
//         this.soyadi=soyadi
//         if (new.target === Telebeler) {
//             throw new Error('siyahiya baxmaq olmaz')
//         }
//     }
//     sinifA() {
//         throw new Error('baglanib')

//     }
// }

// class Qizlar extends Telebeler {
//     constructor(adi,soyadi){
//         super(adi,soyadi)
//     }
//     balaca(){
//         console.log(qiz)
//         super.sinifA()
//     }
// }



// //metodu icinde sehvlik yatarmaq
// const qiz = new Qizlar("aydan",'cafarova')
// qiz.balaca()


// // umumi abstrakt klassin sehvi
// const telebe = new Telebeler()
// console.log(telebe)












//get set--obyekt acari kimi istifade edirik


// numune

// class Person {
//     constructor(name, lastName) {
//         this._name = name
//         this._lastName = lastName
//     }
//     get personName() {
//         return this._name + " " + this._lastName
//     }

//     set personName(fullname) {
//         let arr = fullname.split(' ')
//         this._name = arr[0]
//         this._lastName = arr[1]
//     }
// }

// const person = new Person('Ramin Nasraddinzade')
// console.log(person._name)


// person.personName = 'Samir Cavadov'
// console.log(person._name,person._lastName)


// console.log(person._name)
// console.log(person._lastName)
// console.log(person.personName)

// console.log(person)















// praktik2





