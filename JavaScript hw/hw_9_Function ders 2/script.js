let input = prompt('metni daxil edin:')

const metnFunc = (metn) => {
    let count = 0

    for (let i = 0; i < metn.length; i++) {
        if (isNaN && metn[i]!=' ') {
            count++
        }
    }
    return count
}

console.log(metnFunc(input))