// bubble sort deyilen ede siralama alqoritmi ile bu massivi siralayin 
// [3,5,1,4,2]




let array = [8, 3, 5, 1, 4, 2, 7]


for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array.length - 1; j++) {
        if (array[j - 1] > array[j]) {
            let a = array[j - 1]
            array[j - 1] = array[j]
            array[j] = a
        }
    }
}
console.log(array)








