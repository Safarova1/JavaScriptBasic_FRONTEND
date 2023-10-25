let favoriteGoods = []

let shopGoods = [
    {
        shopName: 'Best Shop',
        shopContacts: '312321',
        shopAdress: 'Baki',

        fruits: [
            {
                "qiymet": 45,
                "tesvir": 'qirmizi',
                "name": "Sumka",
            },
            {
                "qiymet": 55,
                "tesvir": 'qirmizi',
                "name": "Eyaqqabi",
            },
            {
                "qiymet": 40,
                "tesvir": 'qirmizi',
                "name": "cins",

            },
            {
                "qiymet": 50,
                "tesvir": 'qirmizi',
                "name": "shalvar",
            },
            {
                "qiymet": 18,
                "tesvir": 'qirmizi',
                "name": "papaq",
            },
        ]
    },
    {
        shopName: 'My Shop',
        shopContacts: '312321',
        shopAdress: 'Baki',

        fruits: [
            {
                "qiymet": 45,
                "tesvir": 'qirmizi',
                "name": "canta",
            },
            {
                "qiymet": 55,
                "tesvir": 'qirmizi',
                "name": "don",
            },
            {
                "qiymet": 40,
                "tesvir": 'qirmizi',
                "name": "krossovka",

            },
            {
                "qiymet": 50,
                "tesvir": 'qirmizi',
                "name": "kofta",
            },
            {
                "qiymet": 18,
                "tesvir": 'qirmizi',
                "name": "papaq",
            },
        ]
    }
]


let stopArray = setInterval(() => {


    let input = prompt("istediyin shopName yaz - dayandirmaq ucun end yaz")

    if (input === 'end') {
        clearInterval(stopArray)
    }
    else {

        shopGoods.forEach((item) => {
            if (item.shopName === input) {
                let inputname = prompt("istediyin mali yaz")
                item.fruits.forEach((mal) => {
                    if (mal.name == inputname) {
                        favoriteGoods.push(mal)
                    }
                })
            }

        })

    }



    console.log(favoriteGoods)

}, 1000)

