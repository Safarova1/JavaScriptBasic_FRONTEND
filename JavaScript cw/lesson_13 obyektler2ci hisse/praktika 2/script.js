// 2. Sizde olan arr massivi userId deyeri uzre filtrasiya etmek lazimdir. 
// Prompdan 2 daxil etseniz ancaq ikinci user uzre butun melumatlari alirsiz 


let arr = [
    {
        "userId": 3,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 4,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }]

let input = Number(prompt('userId-ni qeyd et'))

let obj = arr.find((item) => item.userId === input)
console.log(obj)
alert("id- " + obj.id + '\n' + "title- " + obj.title + '\n' + "body- " + obj.body)







// let input = Number(prompt())

// let newarr = arr.filter((item) => item.userId === input)
// console.log(newarr)

// newarr.forEach((item) => {
//     console.log(item.id)
//     console.log(item.userId)
//     console.log(item.title)
//     console.log(item.body)

// })





