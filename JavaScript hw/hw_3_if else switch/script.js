let number = Number(prompt("1-100e qeder bir eded daxil edin "))



let numberSecond = number % 10
let numberOne = number - (number % 10)

let nO
switch (numberOne) {
    case 0: nO = " "
        break   
    case 10: nO = "on "
        break
    case 20: nO = "iyirmi "
        break
    case 30: nO = "otuz "
        break
    case 40: nO = "qirx "
        break
    case 50: nO = "elli "
        break
    case 60: nO = "altmis "
        break
    case 70: nO = "yetmis "
        break
    case 80: nO = "seksen "
        break
    case 90: nO = "doqsan "
        break
    case 100: nO = "yuz"
        break
        

    default:
        alert("duzgun ede daxil edilmeyib")
}

let nS
switch(numberSecond){
    case 0: nS = ""
        break 
    case 1:nS = "bir"
        break
    case 2: nS = "iki"
        break
    case 3: nS = "uc"
        break
    case 4: nS = "dord"
        break
    case 5: nS = "bes"
        break
    case 6: nS = "alti"
        break
    case 7: nS = "yeddi"
        break
    case 8: nS = "sekkiz"
        break
    case 9: nS = "doqquz"
        break
    

    default:
        alert("duzgun ede daxil edilmeyib")
}

alert(nO + nS)