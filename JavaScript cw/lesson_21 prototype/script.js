// prototype

function Vehicle(color,type){
    this.color = color
    this.type = type
}



Vehicle.prototype.a=function(){
    console.log(this.color,this.type)
}


let bmw = new Vehicle('red' ,'x6')


console.log(bmw)
bmw.a()






Array.prototype




































