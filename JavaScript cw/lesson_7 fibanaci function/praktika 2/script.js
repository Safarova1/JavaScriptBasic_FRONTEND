// praktika 2
// metnde simbollar olur simvolsuz metni cixartmaq 

const newFunction = (text) => {
    let newText = ''

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '!' || text[i] === '@' ||
            text[i] === '#' || text[i] === '$' ||
            text[i] === '%' || text[i] === '^' ||
            text[i] === '&' || text[i] === '*') {
            continue
        } else {
            newText += text[i]
        }
    }

    return newText
}


console.log(newFunction('hello# world@!'))






