
//https://www.youtube.com/watch?v=PescFjv1UXM

1  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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

3  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let numeros=[];
let sum=0;
let sum1=0;

function Imprimirsuma() {
    let numero = document.querySelector("#ingresar_numero");
    let numero1 = numero.value;
   
    if (isNaN(numero1)){
        alert('ingrese un numero correctamente');
        
    
    } else if (!isNaN(numero1)) {
        numeros.push=numero1;
        for (let x of numeros){
            sum1 = sum1+sum
        }
    } else  (numero1<0) 
        document.write(numeros);
        return;
       
}





    



