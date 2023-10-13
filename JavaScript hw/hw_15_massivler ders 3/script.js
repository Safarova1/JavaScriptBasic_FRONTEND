const telebeler = [
    ["Nigar","Əliyeva",85 ],
    ["Orxan","Məmmədov",92 ],
    ["Fərid","Hüseynov",75 ],
    ["Zahidə","Quliyeva",82 ],
  ];



 let sortedTələbələr = telebeler.sort((a,b)=>a[2]- b[2])

 console.log(sortedTələbələr)



let newtelebeler = [...new Set(telebeler)]


console.log(newtelebeler)


