let userInfo = {
    userName: 'ssafarova',
    address: 'azadliq',
    email: 'ssafarova@gmail.com',
    profession: 'developer',
    company: 'step',

    changeUserName(newName) {
        this.userName = newName
    },

    changeAddress(newaddress) {
        this.address = newaddress
    },
    changeEmail(newemail) {
        this.email = newemail
    },

    changeProfession(newprofession) {
        this.profession = newprofession
    },


    printInfo() {
        alert(userInfo.userName +'\n'+ 
        userInfo.address + '\n'+ 
        userInfo.email + '\n'+ 
        userInfo.profession + '\n'+ 
        userInfo.company)

        console.log(this)
    }


}
userInfo.printInfo()

let inputName = prompt('adi deyisin ')
let inputAddress = prompt('adresi deyisin ')
let inputEmail = prompt('emaili deyisin ')
let inputProf = prompt('professiyani deyisin ')


userInfo.changeUserName(inputName)
userInfo.changeAddress(inputAddress)
userInfo.changeEmail(inputEmail)
userInfo.changeProfession(inputProf)


userInfo.printInfo()

