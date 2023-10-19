
let input = prompt("5element daxil edin araliq qoymaqla")
// 1 2 3 4 5 6
let array = input.split(' ')
let min = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i]
    }

}
console.log(array)
console.log(min)