//abstrakt class

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



class Telebeler {
    constructor(adi,soyadi){
        this.adi=adi
        this.soyadi=soyadi
        if (new.target === Telebeler) {
            throw new Error('siyahiya baxmaq olmaz')
        }
    }
    sinifA() {
        throw new Error('baglanib')

    }
}

class Qizlar extends Telebeler {
    constructor(adi,soyadi){
        super(adi,soyadi)
    }
    balaca(){
        console.log(qiz)
        super.sinifA()
    }
}



//metodu icinde sehvlik yatarmaq
const qiz = new Qizlar("aydan",'cafarova')
qiz.balaca()


// umumi abstrakt klassin sehvi
const telebe = new Telebeler()
console.log(telebe)