// praktika1  
// 1. Boş massiv yaradırsız. Sonsuz dövr yaradırsız.
//  Dövrün içində propmt olacaq
// Ad daxil edirsiz və ad əlavə olunur
// "AD delete" daxil edirsiz və ad daxil olunan ad silinir
// Diger bir shey daxil etseniz "Wrong" versin
// "SHOW" daxil etsez adlar bir-bir gorsensin
// "END" daxil etsez dovr dayansin



let arr = ['Sama', 'Ramin', 'Arzu', 'Leyla']



while (true) {



    let input = prompt('Ad daxil edin')
    if (input === 'delete') {
        inputDelete = prompt('Silmek istediyiniz adi qeyd edin')

        arr.forEach((item) => { if (item === inputDelete) { arr = arr.filter((item) => item !== inputDelete) } else if (item !== inputDelete) { console.log('wrong') } })
    }
    else if (input === 'SHOW') {
        arr.join(' ')
        console.log(arr)

    }
    else if (input === 'END') {
        break

    } else {
        arr.push(input)

    }


    // if (myarr[1] === 'delete' && (arr.includes(myarr[0])) === true) {
    //     arr.filter((item) => item == myarr[0])

    // }


}














