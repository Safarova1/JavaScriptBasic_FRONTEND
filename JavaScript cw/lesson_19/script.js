// teqdimat

// inkopsulyasiya - rincipdiki clasin icine mudaxile ede bilmirik
// giris yoxdur ancaq icine ne yazmisam onunla iwliyirem


// class BankCount {
//     constructor() {
//         this.count = 0
//     }
//     deposit(value) {
//         this.count += value
//         console.log(this.count)
//     }

//     decrease(value) {
//         this.count -= value
//         console.log(this.count)

//     }
// }

// let bankCount = new BankCount()
// bankCount.deposit(20)  
// bankCount.decrease(5)



// praktika 1


// "BankHesabı" adında bir sinif yaratmağa çalışın.
//  Bu sinifin özəl xassələri (məs., balans) və bu xassələrlə işləyən metotları
//  (məs., pulYatır, pulGötür) olmalıdır.
// Bu xassələrə birbaşa dəyişiklik etməsin, yalnız metotlar vasitəsi ilə 
// onlara müdaxilə edilə bilsin.


// class BankHesabi {
//     constructor() {
//         this.balans = 1000
//     }

//     pulYatir(pul) {
//         this.balans += pul
//         console.log(this.balans)
//     }

//     pulGotur(pul) {
//         this.balans -= pul
//         console.log(this.balans)
//     }

// }

// let bankhesabi = new BankHesabi()
// bankhesabi.pulYatir(500)
// bankhesabi.pulGotur(200)




// varislik- klass vnutri dr klassa 





// class Animal {
//     constructor(name, weight, color) {
//         this.name = name
//         this.weight = weight
//         this.color = color
//     }
//     voice() {
//         console.log("any voice")
//     }
// }

// class Dog extends Animal {
//     voice() {
//         console.log("dog voice")
//     }
// }

// class Cat extends Animal {
//     voice() {
//         console.log("cat voice")
//     }
// }


// let animal = new Animal()
// console.log(animal)
// animal.voice()

// let dog = new Dog("toplan", 15, "white")
// console.log(dog)
// dog.voice()

// let cat = new Cat("mestan", 30, "red")
// console.log(cat)
// cat.voice()













// class Animal {
//     constructor(name, weight, color, voiceKind) {
//         this.name = name
//         this.weight = weight
//         this.color = color
//         this.voiceKind = voiceKind
//     }
//     voice() {
//         console.log(`any voice ${this.voiceKind}`)
//     }
// }

// class Dog extends Animal {

// }

// class Cat extends Animal {

// }


// let animal = new Animal()
// console.log(animal)
// animal.voice()

// let dog = new Dog("toplan", 15, "white")
// console.log(dog)
// dog.voice()

// let cat = new Cat("mestan", 30, "red")
// console.log(cat)
// cat.voice()








// super Metodu  -- ana klasdaki metodu bala klasda cagirmaq olur


class Kitab {
    constructor(adi, muellifi) {
        this.adi = adi
        this.muellifi = muellifi
    }
}

class Roman extends Kitab {
    constructor(adi, muellifi, janr) {
        super(adi, muellifi);
        this.janr = janr
    }
    cap() {
        console.log(`roman: ${this.adi}, ${this.muellifi}, ${this.janr}`)
    }
}

class ElmiKitab extends Kitab {
    constructor(adi, muellifi, sahe) {
        super(adi, muellifi);
        this.sahe = sahe
    }
    cap() {
        console.log(`elmikitab: ${this.adi},${this.muellifi}, ${this.sahe}`)
    }
}




let roman = new Roman("Приключения Незнайки и его друзей", "Приключения Незнайки и его друзей", "Роман-сказка")
roman.cap()

let elmikitab = new ElmiKitab("kitabin adi", "muellifin adi", "sahesi ")
elmikitab.cap()
