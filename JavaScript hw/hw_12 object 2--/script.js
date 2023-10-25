let telebeler = [
    {
        'ad': "Sama",
        'soyad': "Safarova",
        'yas': 12,
        qiymet: [1, 3, 4, 3, 5],

    }
]




for (let i = 3; i < 4; i++) {
    let telebe = {}

    telebe['ad'] = prompt('ad')
    telebe['soyad'] = prompt('soyad')
    telebe['yash'] = Number(prompt('yash'))
    let arr = prompt('1,3,4,3,4').split(',')
    telebe.qiymet.push(arr)
    
    telebeler.push(telebe)
}


console.log(telebeler)


// qiymetOrtalama() {

//             let cemi = this.qiymet.reduce((a, b) => a + b)
//             let ortalama = cemi / this.qiymet.length
//             console.log(ortalama)
//         }