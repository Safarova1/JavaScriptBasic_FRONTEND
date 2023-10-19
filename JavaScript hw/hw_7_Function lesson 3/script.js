let input = prompt('tel nomreni daxil edin:')

const isValidNumber = (number) => {
    let valid
    if (number.length === 11 && number[0] == '+' && number[1] == '7') {
        valid = true
    } else { valid = false }

    return valid
}


console.log(isValidNumber(input))