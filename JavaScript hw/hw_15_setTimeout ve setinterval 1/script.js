let inputStart = Number(prompt("hansi ededden baslasin?"))
let inputEnd = Number(prompt("hansi edede qeder olsn?"))



function printEded() {
    inputStart--
    if (inputStart > inputEnd) {
        setTimeout(() => {
            console.log(inputStart)
            printEded()
        }, 1000)
    }
    
}
printEded()