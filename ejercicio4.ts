/* Ejercicio 4. Saludo personalizado
Cree una función que reciba el nombre de una persona y retorne un saludo formateado. El
mensaje deberá incluir el nombre recibido y una bienvenida a la Universidad de Oriente.
Guarde el valor retornado por la función en una variable y después muéstrelo en la consola.
Pruebe la función con al menos dos nombres. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Funcion para generar un saludo personalizado, esta es una funcion flecha que es mas corta, o en pocas palabras más faciles
const generarSaludo = (nombre: string, nombre2?: string, universidad:string = "UNIVO" ): string => {
    if (nombre2 !== undefined && nombre2 !== "") {
        return `¡Hola, ${nombre}  ${nombre2}! Bienvenidos a la ${universidad}, donde su estudio sera de calidad.`;
    }
    return `¡Hola, ${nombre}! Bienvenido a la ${universidad}, donde tu estudio sera de calidad.`;
};

//Solicitamos al usuario que ingrese un nombre
const nombre1: string = prompt("Ingrese el primer nombre: ");
const saludo1: string = generarSaludo(nombre1);
console.log(saludo1);

//Solicitamos al usuario que ingrese un segundo nombre
const nombre2: string = prompt("Ingrese el segundo nombre (opcional): ");
const saludo2: string = generarSaludo(nombre1, nombre2);
console.log(saludo2);





