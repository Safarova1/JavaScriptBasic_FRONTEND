//bitmeyib
// 4. Bir massivde 5 mal obyekti olacaq. 
// Her bir obkeytin icinde malin qiytmeti, tesviri, adi olacaq. 
// Browseri acan kimi size besh propmpt gelmelidir.
//  Mallarin sayi qeder yani ki. Her prompta mal adi gelmelidir. 
// Siz prompta hemen maldan nece dene isteyivizi yazirsiz. 

// Hemin butun bu obyektler diger bir bosh massivin icine yazilmalidir. 
// Yeni massivde obyektlerin hamisinda yeni count acari olmalidir 
// hansinin ki deyeri siz promptda verdiyiniz sayi kimi olmalidir.
//  Ustelik yeni massivde obyektlerin hamisinda yeni totalPrice 
// acari olmalidir haradaki hemin obyektin count ve qiymet 
// deyerlerinin vurma neticesi saxlanmalidir



let maqazin = [
    {
        qiymet: 30,
        tesviri: 'ag',
        adi: 'ayaqqabi',

    },

    {
        qiymet: 40,
        tesviri: 'qara',
        adi: 'sumka',

    },

    {
        qiymet: 1,
        tesviri: 'pink',
        adi: 'corab',

    },

    {
        qiymet: 60,
        tesviri: 'boz',
        adi: 'palto',

    },

    {
        qiymet: 345,
        tesviri: 'yasil',
        adi: 'qurtka',

    }

]


let mal = 0
let newobject = []

maqazin.forEach((item) => {
    // alert(item.adi)
    let input = Number(prompt(item.adi + ' - miqdarini qeyd et'))
    mal = mal + (item.qiymet * input)

    newobject = newobject + item + item.count
});


console.log(mal)