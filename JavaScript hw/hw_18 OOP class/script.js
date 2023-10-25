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



class FavoriteGoods {
    constructor(shopName) {
        this.shopName = shopName
        this.favoriteGoods = []
    }

    favorit(massiv) {
        massiv.forEach((item) => {
            if (item.shopName === this.shopName) {
                item.fruits.forEach((mal) => {
                    this.favoriteGoods.push(mal)
                })
            }

        })
        this.favoriteGoods.sort((a,b)=>a['qiymet']-b['qiymet'])
        console.log(this.favoriteGoods)
        
    }
}



let input = prompt("istediyin shopName yaz - dayandirmaq ucun end yaz")

let goods = new FavoriteGoods(input)
goods.favorit(shopGoods)