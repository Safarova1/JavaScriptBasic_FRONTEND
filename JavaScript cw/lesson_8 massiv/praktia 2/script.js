// ad massivde varsa elave olunmur ad massivin axirina daxil olur


let myarray = ['Sama', ' Ramin', 'Leyla', 'Arzu', 'Rustem']

let input = prompt('Ad daxil edin')



let ok = myarray.some((ad) => ad == input)

if (ok){
    console.log(myarray)

}else{
    myarray.push(input)
    console.log(myarray)
}





