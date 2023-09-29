// 5 adamdan ibaret massiv
// butun adlarin 1ci herifi eyni olmalidir
// eger butun adlarin 1ci herifi eynidir ise true qaytarsin


let array = ['Sama', 'Ramin', 'Ibrahim', 'Arzu', 'Leyla']

let arrayHerf = array[0][0]

// console.log(array.every((item) => item[0]==='R'))
let ok

for (let i = 0; i < array.length -1; i++) {
    
    if (array[i][0] === array[i + 1][0]) {
        ok = true
    } else {
        ok = false
        
    }
}
console.log(ok)

// map --eger false butun adlarin 1ci herfi S olsun

// let newarrray = array.map((item) => item=arrayHerf)
// console.log(newarrray)















