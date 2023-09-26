//1cini hokmen  cixartmalisan

// let i = 0

// do {   
//     i++
//     console.log(i)
// }
// while (i < 10)




// ----------------------------------------------------------------------------------------
// coldeki foru breaklemek ucun adlandiririq ___coldeki for outFor __icindeki for innerFor


// outFor:
// for (let i = 0; i < 4; i++) {
//     innerFor:
//     for (let j = 0; j < 4; j++) {
//         console.log(i, j)
//         if (i === 1 && j === 1) {
//             break outFor //innerFor
//         }
//     }
// }




// ----------------------------------------------------------------------------------------
// praktika 1

// ----------------------------------------------------------------------------------------
// tek ve cut ededlerini cemi

let sumCut = 0
let sumTek = 0

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumCut += i
        console.log(i)
    }
    else if (i % 1 === 0) {
        sumTek += i
        console.log(i)
    }

}
console.log(sumCut)
console.log(sumTek)








