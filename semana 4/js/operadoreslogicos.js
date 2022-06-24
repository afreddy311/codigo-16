// Operadores Lógicos:
    // document.body.style.backgroundColor = 'red';
    let h1_texto = document.getElementsByTagName("h1")[0].innerText;
    console.log(h1_texto);
    // document.getElementsByTagName("h1")[0].innerText = 'Bruno Díaz';
    // document.getElementsByTagName("body")[0].style.color = 'blue';

    // Tipos de datos:
    // Boolean (booleano True / False)
    // && (AND)
    // || (OR)
    // !  (NOT)

    // alert(true && true); // true
    // alert(true && false); // false
    // alert(false && true); // false
    // alert(false && false); // false

    // (AND) Si 1 de los valores es false, entonces false.
    // (AND) Si todos son true, entonces true.
    document.write("<h1>Cielo</h1>");
    let hora = 10;
    // hora < 18 // false
    // hora > 6 // true
    let cielo;
    if (hora < 18 && hora > 6) {
        cielo = 'dia';
    } else {
        cielo = 'noche';
    }

    document.write("<p>Son las " + hora + " horas y es de " + cielo + "</p>");
    document.write("<hr>");

    // alert(true || true); // true
    // alert(true || false); // true
    // alert(false || true); // true
    // alert(false || false); // false

    // (OR) Si 1 de los valores es true, entonces true.
    // (OR) Si todos son false, entonces false.

    let nombre = "Magaly";
    let edad = 30; // > 30
    let estado_civil = 'soltera'; // casada
    let numero_hijos = 0; // > 0

    if ("30" === "30") {
        document.write("<p>Buen día sra. " + nombre + "</p>");
    } else {
        document.write("<p>Buen día señorita " + nombre + "</p>");
    }

    // = Asignar valor a una variable.
    // == Comparar 2 valores. (se usa en una condición).
    // === Comparar 2 valores adicionalmente por el tipo de dato.
    // > Mayor que
    // < Menor que
    // >= Mayor O igual
    // <= Menor O igual   