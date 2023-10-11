// 3. Bir massivde 5 mal obkeyti olacaq.
//  Her bir obkeytin icinde malin qiytmeti, tesviri, adi olacaq.
//  Browseri acan kimi size besh propmpt gelmelidir. 
// Mallarin sayi qeder yani ki. Her prompta mal adi gelmelidir. 
// Siz prompta hemen maldan nece dene isteyivizi yazirsiz. 
// Axirda butun alish verishin qiymetini yazirsiz


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

maqazin.forEach((item) => {
    let input = Number(prompt(item.adi + ' - miqdarini qeyd et' ))
    mal = mal + (item.qiymet * input)
});


console.log(mal)


