// Una funcion es un bloque de codigo que realiza una accion

// la sintaxis de una function se divide. en 3

// Los mas clasico y antiguo
function nombreDeLaFuncion() {
    // En este espacio podemos escribir codigo
    const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];
  
    for (let alumno of alumnos) {
      console.log(alumno);
    }
  }
  
  // Nota para hacer que una funcion se ejecute debemos llamarla
  // Esta accion que acabamos de hacer se llama ejecutar a la funcions
  nombreDeLaFuncion();
  
  // Ahora haremos una funcion que retorne una valor
  
  // Teoricamente hay 2 clases de funciones
  // Funciones impuras => Es una funcion que no retorna un valor
  // Funciones puras.  => Es una funcion que retorna valor
  
  // * Las funcion tienen la opcion de usar "return" que es una
  // * parala reserva de JS la cual sirve para devolver un valor
  
  function cuboDeUnNumero() {
    return Math.pow(10, 3);
  }
  
  // recurden que esta es llamar a una funcion
  const resultado = cuboDeUnNumero();
  
  console.log("resultado", resultado);
  
  // Una funcionalidad es el poder enviar valores a las funciones
  // Lo que esta dentro del parentesis en una funcion se llaman parametros
  // y podemos enviar n parametros
  //* Los parametros deben estar separados por comas
  function potenciaDeUnNumero(numero, potencia) {
    return Math.pow(numero, potencia);
  }
  
  const ejemplo1 = potenciaDeUnNumero(4, 3); // 4 al cubo
  const ejemplo2 = potenciaDeUnNumero(6, 2); // 6 al cuadrado
  console.log(ejemplo1);
  console.log(ejemplo2);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

    function Sumarargumentos(arg1,arg2) {
    //validaciones : cuando hagamos una funcion debemos tener en cuenta que casos puede suceder
    const n1 = Number(arg1)
    const n2 = Number(arg2)

    if (isNaN(n1) || isNaN(n2)) {
        return "No se pueden sumar";
    }
    
    document.write(arg1+arg2);
    
    }

    Sumarargumentos();

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//     // Paso 1 creo una funcion que me retorne el factorial
//     function calcularFactorial(numero) {
//     // 4 = 1 x 2 x 3 x 4 = 24
//     const number = Number(numero);
  
//     //! Nota el return aparte de retornar un valor da fin a la
//     //! ejecucion de la funcion
//     if (isNaN(number)) {
//       return "Esto no se puede hacer porque no es un numero";
//     }
  
//     let resultado = 1;
//     for (let i = 1; i <= numero; i++) {
//       resultado *= i;
//     }
  
//     return resultado;
//   }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//     function imprimirFactorial() {
//     const inputValor = document.getElementById("input_number").value;
//     const resultado = calcularFactorial(inputValor);
  
//     const container = document.querySelector(".container");
//     container.innerHTML +=
//       "<p>Factortorial de " + inputValor + ": " + resultado + "</p>";
//   }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    
    function calcularTabla() {
    const inputNumber = document.querySelector("#input_number_2");
    let container = document.querySelector(".resultado");
  
    container.innerHTML = "";
  
    const numero = Number(inputNumber.value);
    // Es es basicamente para limpiar el input
    inputNumber.value = "";
  
    if (isNaN(numero)) {
      alert("Ingrese un numero valido");
      // Recureden que el return aparte de retonar un valor tambien terminar la ejecucuion
      // de la funcuion en este nos retornarmos pero si tenemos una alert
      // y luego un return sin nada para que en este caso solo se encargue de terminar la ejecucion
      return;
    }
  
    for (let i = 1; i <= 12; i++) {
      container.innerHTML +=
        "<p>" + numero + " x " + i + " = " + i * numero + "</p>";
    }
  }