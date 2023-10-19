let massiv = ["Sama", "Arzu", "Nahid", "Ramin", "Adnan", "Ayla"]

//elave et
let input = prompt()
massiv = [...massiv, input]
console.log(massiv)



//sil, 2ci elementi
let [one, two, three, ...other] = massiv
let sil = [one, three, ...other]
console.log(sil)


// 3cu elementden sonrakilari sil
let sonra = [one, two, three]
console.log(sonra)


//3cu elementden qabaqkilari sil
let evvel = [...other]
console.log(evvel)