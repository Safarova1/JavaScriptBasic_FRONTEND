let number = prompt()
let year = Number(number)


// 364 == 2023
// 365 == 2024


if (year % 4 == 0) {
    alert('365 gun')
}
else if(year % 4 == 1) {
    alert('364 gundur')
}
else {
    alert('Reqem daxil et')
}
