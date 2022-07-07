//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let a = prompt('ingrese primer numero ');
// while (isNaN(a) || a<=0) {
//   let a = prompt('ingrese primer numero nuevamente')
    
//     if ( !isNaN(a)) {
//         break;
//     }

// }

// let b = prompt('ingrese segundo numero'); 
// while (isNaN(b)|| b<=0) {
//     let b = prompt('ingrese segundo numero nuevamente')
    
//     if ( !isNaN(b) ) {
//         break;
//     }

// }

// if (a==b){
//     document.write("Ambos numeros son iguales")
// } else if (a>b) {
//     document.write("El primer numero es mayor y el sguendo menor")
//  }else if (b>a) {
//     document.write('El segundo numero es mayor y el primero menor')
// }

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let cont=0;
let rept=0;
    let numero = document.querySelector("#ingresar_numero");
    let a = numero.value
    let Sumar = () => {
    while (isNaN(a)||!isNaN(a)) {      
    
    if (isNaN(a)){
        alert('ingrese un numero correctamente');
        return;
    }
    
    if (a<0) {
        let prom = rept / (cont)    
        document.write("La suma de los num ingresados es "+ rept + " Y el promedio es " + prom)
        break;  
    }

    if (!isNaN(a)) {
    cont+=1;
    rept =rept + a; }   
    
    } 
}


    


