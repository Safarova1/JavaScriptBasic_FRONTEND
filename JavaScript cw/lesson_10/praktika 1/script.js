
//Propmpta 10 eded adxil edirsiniz vergul ile bolunmush
//ededlerin bir necesi tekrarlanmalidir
// ededleri ferqli siralanmada yazin
// neticede tekrarlanmayan elementler almaq lazimdir 
// kicikden boyuye siralanmish

let input = prompt()  // 2,4,6,3,2,4,5

let newarr = input.split(',')

// for (let i = 0; i<newarr.length; i++){
//     newarr[i]=Number(newarr[i])
// }

newarr = newarr.map((item)=> Number(item))

let a =[...new Set(newarr)]

console.log(a.sort((a,b)=>a-b)) // [2, 3, 4, 5, 6]







