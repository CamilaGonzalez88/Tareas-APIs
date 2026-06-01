const prompt = require("prompt-sync")({sigint: true});

// bucles.js

//SIN BUCLE 
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


console.log("Ahora con bucle FINITO:"); // BUCLE FINITO: SE USA CUANDO SABES CUANTAS VECES SE VA A REPETIR EL BUCLE, EN ESE CASO SE USA EL BUCLE FOR, QUE ES UN BUCLE FINITO, HASTA QUE SE CUMPLA UNA CONDICION.    

let PRUEBA; // prueba es una variable que se va a usar para contar las veces que se repite el bucle, se le asigna un valor inicial de 1 y se le dice que mientras sea menor o igual a 5, se va a repetir el bloque de código que está dentro del bucle, y cada vez que se repita, se le va a sumar 1 a la variable PRUEBA.  

for(PRUEBA = 1; PRUEBA <= 8; PRUEBA++) {

    console.log(PRUEBA);

}

console.log ("BUCLE WHILE"); /* NO SIEMPRE SABES CUANTAS VECES SE VA A REPETIR EL BUCLE, EN ESE CASO SE USA EL BUCLE WHILE, QUE ES UN BUCLE INFINITO, HASTA QUE SE CUMPLA UNA CONDICION. */ 


let PRUEBA2 = 1; /* PRUEBA2 es una variable que se va a usar para contar las veces que se repite el bucle,
se le asigna un valor inicial de 1 y se le dice que mientras sea menor o igual a 8, 
se va a repetir el bloque de código que está dentro del bucle, y cada vez que se repita, se le va a sumar 1 a la variable PRUEBA2.   */

while(PRUEBA2 <= 8) {
    console.log(PRUEBA2);
    PRUEBA2++;
}

console.log(" bucle FOR"); /* EL BUCLE FOR ES UN BUCLE FINITO, SE USA CUANDO SABES CUANTAS VECES SE VA A REPETIR EL BUCLE, EN ESE CASO SE USA EL BUCLE FOR, QUE ES UN BUCLE FINITO, HASTA QUE SE CUMPLA UNA CONDICION. */

for(let variante = 1; variante <= 8; variante++) {
    console.log(variante);
}

console.log("Ejercicios Basicos de IA para practicar bucles:");
/* EJERCICIO 1: Imprimir los números del 1 al 20 utilizando un bucle for. */
console.log("Ejercicio 1: Imprimir los números del 1 al 20 utilizando un bucle for.");  
for(let ejercicio1 = 1; ejercicio1 <= 20; ejercicio1++) {
    console.log(ejercicio1);
}

/* EJERCICIO 2: Mostrar numeros pares 0 al 10 usando while. */
console.log("Ejercicio 2: Mostrar numeros pares 0 al 10 usando while.");

let ejercicio2 = 0;
while(ejercicio2 <= 10) {
    console.log(ejercicio2);
    ejercicio2 += 2; // se le suma 2 a la variable ejercicio2 para que solo imprima los numeros pares.
}

/* MOstrar una tabla del 5 utilizando un bucle for. */
console.log("Ejercicio 3: Mostrar una tabla del 5 utilizando un bucle for.");
for(let ejercicio3 =1;ejercicio3 <=10; ejercicio3++){
    console.log("5x" + ejercicio3 + "=" + (5*ejercicio3)); // se imprime la tabla del 5, se multiplica el numero 5 por la variable ejercicio3, que va desde 1 hasta 10, y se imprime el resultado.  
}

let contraseña = prompt("¿Cuál es tu contraseña? ");
while(true){
    if(contraseña != "1234"){
        console.log("Te equivocaste, vuelve a intentarlo");
        contraseña = prompt("¿Cuál es tu contraseña?");
    } else {
        console.log("Ingreso exitoso");
        break // Utilizamos break para terminar el bucle infinito
    }
}