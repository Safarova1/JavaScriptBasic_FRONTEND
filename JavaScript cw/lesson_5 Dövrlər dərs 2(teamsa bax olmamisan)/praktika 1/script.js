// coldeki dovr i<10
// icindeki dovr j<5
// eger i >9 ve j>4 dovr dayanir

outFor:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++)
    console.log(i,j)
        if (i > 9 && j < 4) {
            break outFor
        }
}







