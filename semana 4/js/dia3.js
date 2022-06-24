document.write( "<h1>Dia 3 Switch</h1>")

//switch
//Problem : En base a la note escribir un mensaje 
//nota < 13 = "debe mejorar"
//nota>15="alumno promedio"
//nota>18="alummno sobresaliente"
//nota=20="alumno genio"

//!Recordemos que cuando usamos prompt cualquier tiop de dato que guarde 
//!sera un string

//switch

// Angulos:
document.write("<h3>Ángulos</h3>");
let angulo = 361;
document.write("<p>" + angulo + "</p>");

if (angulo == 0) {
    document.write("<p>Nulo.</p>");
} else if (angulo < 90) {
    document.write("<p>Águdo.</p>");
} else if (angulo == 90) {
    document.write("<p>Recto.</p>");
} else if (angulo < 180) {
    document.write("<p>Obtuso.</p>");
} else if (angulo == 180) {
    document.write("<p>Llano.</p>");
} else if (angulo < 360) {
    document.write("<p>Concavo.</p>");
} else if (angulo == 360) {
    document.write("<p>Completo.</p>");
} else {
    document.write("<p>INEXISTENTE.</p>");
}

//switch
//*Esto dice que angulo va a ser la variable padre
//*y en cada case vamos a evaluar esta variable , sin embargo no hace falta
//*volver a llamar a la variable

switch (angulo) {
    case 0 :
        document.write("<p>Nulo.</p>");
        //despues de ejecutar lo que queremos
        break;
    case 90 :
        document.write("<p>React0.</p>");
    case 180 :
        document.write("<p>Llano</p>");

}

//pruebas en la pagina de html ( inspect )
const nombres = ["pepe","juan","maria","luisa","carlos","lucas","linder"]
console.log(nombres);
console.log(nombres[2]);
console.log(nombres.length);
const data = [1,true,false,-2,"hola mundo"];
console.log("datos",data[data.length-1]);
data.push("Agregando un dato")
console.log("data con push",data)

const dataprueba = [1, true, false, -2, ["pepe",2,["juan",0,"jaime",1], "maria"]]
console.log(dataprueba[4][0]); //imprime "pepe" y si puede seguir metiendo arrays
console.log(dataprueba[4][2].length);

const alumnos = ["luis","juan","maria","luciana","lucas"];
console.log("el alumno"+ alumnos.pop() + "fue eliminado");//pop elimina el ultimo
console.log("alumnos",alumnos);

alumnos.unshift("daniel"); //agrega al inicio del array
console.log("unshift",alumnos)

alumnos[1]="Fiorella"; //chanca el valor de la posicion 1
console.log("chancado posicion1",alumnos)

console.log(alumnos.indexOf("juan")) //retorna la posicion de juan . Si no existe retorna -1
