
/* Ejercicio 2. Verificación de números pares
En una actividad académica, los estudiantes con número de lista par formarán un equipo y
los estudiantes con número impar formarán otro. Cree una función flecha llamada
esNumeroPar que reciba un número y retorne un valor booleano.
Pruebe la función con diferentes números y muestre un mensaje que indique si cada número
evaluado es par o impar. */


import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Funcion flecha para verificar si un número es par
const esNumeroPar = (numero: number): boolean => {
    return numero % 2 === 0;
}

//Solicitamos al usuario que ingrese un número
const numero: number = parseInt(prompt("Ingrese un número para verificar si es par o impar: "));

//Verificamos si el número es par o impar y mostramos el resultado
if (esNumeroPar(numero)) {
    console.log(`El número ${numero} es par.`);

} else {
    console.log(`El número ${numero} es impar.`);
}



