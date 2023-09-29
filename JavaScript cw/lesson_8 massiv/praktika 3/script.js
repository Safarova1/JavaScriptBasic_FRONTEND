// bes addan ibaret massiv
// massivin axirinci ve 1ci elementini  yerini deyisin


let myarray = ['Sama', ' Ramin', 'Leyla', 'Arzu', 'Rustem']

let arrayBirinci = myarray[0]
let arrayAxirinci = myarray[myarray.length  -1]
// let arrayAxirinci = myarray.at(-1)
myarray.shift()
myarray.pop()

myarray.push(arrayBirinci)
myarray.unshift(arrayAxirinci)


console.log(myarray)






