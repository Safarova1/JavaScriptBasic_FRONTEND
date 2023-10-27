let telebeler = [
    {
        'ad': "Sama",
        'soyad': "Safarova",
        'yas': 12,
        qiymet: [1, 3, 4, 3, 5],

    }
]




for (let i = 1; i < 4; i++) {
    let telebe = {}

    telebe['ad'] = prompt('ad')
    telebe['soyad'] = prompt('soyad')
    telebe['yash'] = Number(prompt('yash'))
    let arr = prompt('1,3,4,3,4').split(',')
    arr = arr.map((item) => Number(item))
    telebe.qiymet = arr

    telebeler.push(telebe)
}


console.log(telebeler)


const qiymetOrtalama = () => {
    telebeler.forEach((telebe) => {
        let cemi = telebe.qiymet.reduce((a, b) => a + b)
        let ortalama = cemi / telebe.qiymet.length

        console.log(ortalama)
    })
}

qiymetOrtalama()