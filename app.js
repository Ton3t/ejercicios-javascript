/* 4. Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33
- 44, etc. (No se ingresan valores por teclado). */

function serie() {
    var num = 11;

    document.write("Ejercicio 4 <br><br>");
    for(var i = 0; i < 25; i++) {
        document.write(num + " - " + (num + 11) + " - " + (num + 22) + " - " + (num + 33) + "<br>");
        num = num + 44; 
    }
}

/* 5. Realizar un programa que lea un número indeterminado de números
distintos (prompt) y muestre el mayor de ellos. El proceso de petición
de número finaliza al introducir el número 0. */

function numMayor() {
    document.write("<br><br>Ejercicio 4 <br><br>")

    var num = 1;
    var mayor = 0;

    while(num != 0) {
        num = parseInt(prompt("Inserta un número."));

        if(isNaN(num)) {
            
        }
        else {
            if(num > mayor) {
                mayor = num;
            }
        }
    }
    document.write(mayor + " es el mayor <br><br>");
}

/* 8. Introducir un importe (prompt) e indicar 
la descomposición en monedas de curso legal, 
utilizando el menor número de monedas y billetes. (Unidad mínima 1 euro) */

function desglosar() {

    document.write("<br>Desglosar billetes<br>");

    var billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    var cantBilletes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    var importe = parseInt(prompt("Ingresa cantidad ha desglosar:"));

    if(isNaN(importe)) {
        document.write("Cantidad o valor nulo... ingrese una cantidad de billetes por encima de 1€");
    }
    else {

        document.write(" " + importe + "€<br>");

        for(var i = 0; i < billetes.length; i++) {
            if(importe >= billetes[i]) {
                cantBilletes[i]++;
                importe = importe - billetes[i];
                i--;
            }
        }

        for(var i = 0; i < billetes.length; i++) {
            document.write(billetes[i] + " = " + cantBilletes[i] + "<br>");
        }
    }
}

/* 11. Desarrollar un programa que permita cargar números enteros y 
luego nos informe cuántos valores fueron pares, cuántos impares y 
cuantos erróneos (NaN). Utilizar bucles. Finaliza al introducir el valor 0 (cero) */

function paresinones() {
    var num = 1;
    var nombre = ["Pares: ", "Impares: ", "Errores: "];
    var tipo = [0, 0, 0];

    while(num != 0) {
        num = parseInt(prompt("Pares / Nones / Errores"));

        if(isNaN(num)) {
            tipo[2]++;
        }

        else {
            if(num % 2 == 0) {
                tipo[0]++;
            }
            else if(num % 2 != 0) {
                tipo[1]++;
            }
        }

    }

    for(var i = 0; i < nombre.length; i++) {
        document.write(nombre[i] + tipo[i] + "<br>");
    }

}

window.onload = function() {
    this.numMayor();
    this.serie();
    this.desglosar();
    this.paresinones();
}