

let Nombre=String(prompt("ingrese su nombre"))
let Sexo=String(prompt("ingrese su sexo"))
let Edad=Number(prompt("ingrese su edad"))
let Nota=Number(prompt("ingrese su nota"))
let calificacion= ""



if (Nota>=0 && Nota<3) {
    calificacion="Muy Deficiente"    
} else if(Nota>=3 && Nota<5){
    calificacion="Insuficiente" 
} else if(Nota>=5 && Nota<6){
    calificacion="Suficiente"
} else if(Nota>=6 && Nota<7){
    calificacion="Bien"
} else if(Nota>=7 && Nota<9){
    calificacion="Notable"
} else if(Nota>=9 && Nota<10){
    calificacion="Sobresaliente"
}


if (Sexo == "hombre" && Edad>35) {
    document.write("El Sr." + " " + Nombre + " " + "(" + Edad + " " + "años"+")"+" "+"tiene"+" "+Nota+" "+"de nota.Esta"+" "+ calificacion)
} else if(Sexo == "hombre" && Edad<=35) {
    console.log("El Joven" + " " + Nombre + " " + "(" + Edad + " " + "años"+")"+" "+"tiene"+" "+Nota+" "+"de nota.Esta"+" "+ calificacion)
} else if(Sexo == "mujer" && edad>50){
    console.log("La Sra." + " " + Nombre + " " + "(" + Edad + " " + "años"+")"+" "+"tiene"+" "+Nota+" "+"de nota.Esta"+" "+ calificacion)
} else if(Sexo == "mujer" && edad<=50){
    console.log("La Srta." + " " + Nombre + " " + "(" + Edad + " " + "años"+")"+" "+"tiene"+" "+Nota+" "+"de nota.Esta"+" "+ calificacion)
} else {
    console.log("ingrese bien sus datos")
}

document.write(<p>Nombre</p>)
document.write(<p>Sexo</p>)
document.write(<p>Nombre</p>)
document.write(<p>Nombre</p>)
document.write(<p>Nombre</p>)