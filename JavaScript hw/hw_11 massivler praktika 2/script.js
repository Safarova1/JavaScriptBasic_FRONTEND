let students = ["Sama", "Arzu", "Narmin", "Nazrin", "Aydan"]


const addStudent = (name) => {
    students.push(name)
    console.log(students)
}

const removeStudent = (name) => {
    students = students.filter((item) => item != name)
    console.log(students)
}

const findStudent = (name) => {
    let yesno = students.some((item) => item == name)
    if (yesno) {
        console.log(name)
        
        let index = students.findIndex((itemname) => itemname === name)
        console.log(`adin indexi- ${index}`)
        alert(`ad- ${name}, adin indexi- ${index}`)
    } else {
        console.log("Tələbə tapılmadı")
        alert("Tələbə tapılmadı")
    }
}

const seeStudent = () => {
    alert(students)
}





while (true) {
    let input = prompt(`Salam, telebe 
    -daxil elave etmek istiyirdinizse - add 
    -silmek isteyirsinizse - remove 
    -tapmaq isteyirsinizse - find
    -siyahisini gormek ucun - see 
    -cixmaq istiyirsinizse -  end
    yazin `)

    if (input == "add") {
        let inputname = prompt(" Elave etmek ucun Ad daxil et")
        addStudent(inputname)
    } else if (input == "remove") {
        let inputname = prompt(" Silmek ucun Ad daxil et")
        removeStudent(inputname)
    } else if (input == "find") {
        let inputname = prompt(" Tapmaq ucun Ad daxil et ")
        findStudent(inputname)
    } else if (input == "see") {
        seeStudent()
    } else if (input == "end") {
        break
    }else{
        alert("zehmet olmasa duzgun secim edin!")
    }
}





























