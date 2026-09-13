/* Ejercicio 5. Función sin valor de retorno
Una aplicación necesita mostrar un aviso antes de iniciar el registro de datos. Cree una
función llamada mostrarInstrucciones que no reciba parámetros y que únicamente imprima
las indicaciones en la consola.
La función deberá utilizar el tipo de retorno void. Llámela antes de mostrar cualquier otro
contenido del programa. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Funcion para mostrar las instrucciones

function mostrarInstrucciones(): void {
    console.log("Bienvenido al registro de datos.");
    console.log("Por favor, siga las instrucciones a continuación:");
    console.log("1. Ingrese su nombre completo.");
    console.log("2. Ingrese su número de identificación.");
    console.log("3. Ingrese su dirección de correo electrónico.");
    console.log("4. Asegúrese de que toda la información sea correcta antes de enviar.");
}

//Llamada a la funcion para mostrar las instrucciones antes de cualquier otro contenido
mostrarInstrucciones();

