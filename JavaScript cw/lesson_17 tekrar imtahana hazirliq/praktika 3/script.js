
while (true) {
    let input = prompt()

    if (input === 'Admin') {
        let secondInput = prompt('admin')
        if (secondInput === 'sil') {
            alert('silindi')
        } else if (secondInput === 'elave et') {
            alert('elave olundu')

        }
    }
    if (input === 'Alici') {
        let secondInput = prompt('alici')
        if (secondInput === 'show') {
            alert('show')
        }
    }

    if (input === 'end'){
        break
    }
}
