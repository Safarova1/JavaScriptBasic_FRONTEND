Array.prototype.myForEach = function (item) {
    let thisArray = this
    let array = []
    for (let i = 0; i < thisArray.length; i++) {
        if (item === thisArray[i]) {
            array.push(thisArray[i])
        }
    }
    return array
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let ar = arr.myForEach(1)

console.log(ar)

console.log(arr)
