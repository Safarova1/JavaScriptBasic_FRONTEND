// eger tekrarlanan elementleri silinsin


let arr = [1, 2, 3, 3]

let newarr = []

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
        continue
    }
    newarr.push(arr[i])


}


console.log(newarr)















