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



let shopGoods = [
    {
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        products: [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        products: [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        products: [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
]





class 





























