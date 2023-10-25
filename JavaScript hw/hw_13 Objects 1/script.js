let kitablar = [
    {
        'ad': 'kitab 1',
        muellif: 'kitab muellifi 1',
        nesrIli: 1998,
        qiymet: 45

    },
    {
        'ad': 'kitab 2',
        muellif: 'kitab muellifi 2',
        nesrIli: 2009,
        qiymet: 12
    },
    {
        'ad': 'kitab 3',
        muellif: 'kitab muellifi 3',
        nesrIli: 2001,
        qiymet: 150

    },

]

// Ən azı 3 fərqli kitab obyekti yaradaraq onların məlumatları ilə doldurun.
for (let i = 1; i < 4; i++) {
    let kitab = {}
    kitab['ad']= prompt('kitab 4')
    kitab.muellif = prompt('kitab muellifi 4')
    kitab.nesrIli = Number(prompt('1655'))
    kitab.qiymet = Number(prompt('74'))

    kitablar.push(kitab)
}

console.log(kitablar)


// Obyektlərin içindəki kitab adlarını göstərmək lazımdır
let adlar = []
kitablar.forEach((item) => adlar.push(item['ad']))
console.log(adlar)

// //tek tek gormek ucun
// let input = prompt("hansi kitabi gormek istiyirsiniz qeyd edin")
// let kitabhaqqinda = kitablar.filter((item) => item['ad'] === input)
// console.log(kitabhaqqinda)



