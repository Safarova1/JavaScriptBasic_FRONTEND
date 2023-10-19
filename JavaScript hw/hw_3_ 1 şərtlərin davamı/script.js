let bosSetir = ""
a = true

while (a) {
    let input = prompt("NESE YAZ///\n SHOW yazsan butun yazdiqlarin cixacaq// END yazsan proqram atacaq")

    switch (input) {
        case 'show':
            alert(bosSetir)
            break


        case "end":
            a = false
            break


        default:
            bosSetir = bosSetir + " " + input
            console.log(bosSetir)
    }

}


