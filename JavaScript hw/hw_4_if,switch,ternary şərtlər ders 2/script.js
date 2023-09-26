let qiymet = Number(prompt("istenilen qiymeti qeyd edin 0-100 arasi!"))

if (qiymet >= 90 && qiymet <= 100) {
    console.log("A")
} else if (qiymet >= 80 && qiymet <= 89) {
    console.log("B")
} else if (qiymet >= 70 && qiymet <= 79) {
    console.log("C")
} else if (qiymet >= 60 && qiymet <= 69) {
    console.log("D")
} else if (qiymet <= 59 && qiymet >= 0) {
    console.log("F")
} else {
    console.log("duzgun reqem araliginda deyil")
}