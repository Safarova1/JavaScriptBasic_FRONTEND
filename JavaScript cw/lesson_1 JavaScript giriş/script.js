console.log("hello world!") // string
console.log(12)     // int
console.log(true)     // bool

// dəyişənlər 3 cür( let - təzə, imeet qranic, var - səhvlər var ne imeet qranic, const -dəyişmir)

let userName1="Samir"
console.log(userName1)

let userFamily 
userFamily =" Safarovlar"
userFamily ="Salmanovlar"
console.log(userFamily)

// CONSOLE -NEPRIMETIV TIP
//let number = null  PRIMETIVDI NULL


console.log(typeof userFamily)

let number = 1  
let mynumber = null  //v pamyati mesto zanimayet
let my  // v pamyati mesto ne zanimayet
let boolean =true

console.log(typeof number)
console.log(typeof mynumber)
console.log(typeof my)
console.log(typeof boolean)


// javascript -dinamik tipazaciyaya aiddir deyisenin tipi evvelceden bilinmir



let userName = "Sama"
let userSurname = "Safarova"

// konkonataiya -2 deyiseni birlesdirmek
// let user = userName + userSurname
let user = userName + " " + userSurname
let userSecond = `${userName} ${userSurname}`   // keym of keys
console.log(user)
console.log(userSecond)

//  const PASSWORD ="DFGS"
//  PASSWORD = "TFSHHHI"


//2 let adli deyisen yaratmaq olmur var-ile olur
// let tea
// let tea

var hungry
var hungry




//----------------------------------------------------------------
// riyazi operatoru - + / * % (qaliqi verir 12%9=3)
console.log('5' + '5')
console.log(5 + 5)


// ustegelmede setire cevirir basqalarinda reqeme
console.log('5' + 5) //string
console.log(5 +'5') //string

console.log("10" / 2)  //int
console.log(10 / "2")   //int
console.log(10 * "3")
console.log(10 - "2")






//  serti aperatorlar >= <= < > == ===
console.log(5 < 10)
console.log(5 > 10)

//umumi melumatida yoxluyur melumat tipi 
console.log( 5 === "5") //false
console.log( 5 == "5")  //true

//ayri aperatorlar  &&-ve
console.log(5 < 10 && 5 > 1 && 11 > 7)  //butun sertler duzdurse true

//ve yaxud apertoru
console.log(5 > 10 || 3 < 10)  //2sinden 1ri duzdurse true aliriq





//--------------------------------------------------------------------------------




//deyisen teyin olmur
if (1<2){
    let a = 1
}

console.log(a) // teyin olunmur

// teyin olunmasini istiyirikse globala cixarmaliyiq
let b

if(1 < 2){
    b = 5
}
 
console.log(b)  




//var deyisenin ferqi let-den 

if (1<2){
    var a = 1
}

console.log(a)  //teyin olundu






//----------------------------------------------------------------------------
// prettier  -- extensionsda  yuklesek noqte vergul qoyasaq



//-----------------------------------------------------------------------------

let num ="12"
num = Number(num)
console.log(5 + num)  //17

let deyisenBool = false
console.log(Number(deyisenBool))  //0

console.log(Boolean(0)) //false

console.log(String(deyisenBool))  // "false"

console.log(Boolean(" ")) //true
console.log(Boolean(""))  //false

console.log(Boolean(null))  //false
console.log(Boolean(undefined))  //false







//Number
console.log(Number(undefined))  //NaN
console.log(Number(null))  //0
console.log(Number(true))  //1
console.log(Number(false))  //0
console.log(Number(""))  //0
console.log(Number("asdf"))  //NaN






















