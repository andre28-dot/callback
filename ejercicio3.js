/* Ejercicio 3. Eliminación de código repetido
Un programa muestra tres mensajes de bienvenida para diferentes participantes de un
evento universitario. Actualmente, el saludo completo se escribe nuevamente para cada
participante.
Analice el bloque repetido y conviértalo en una función reutilizable que reciba el nombre
del participante. Llame a la función tres veces utilizando nombres diferentes.
El resultado deberá incluir:
• Un encabezado de bienvenida.
• El nombre del participante.
• Un mensaje de agradecimiento por asistir. */
import PromptSync from "prompt-sync";
const prompt = PromptSync();
// Función para mostrar el mensaje de bienvenida
const mostrarBienvenida = (nombre) => {
    console.log("¡Bienvenido al evento universitario!");
    console.log(`Hola, ${nombre}.`);
    console.log("Gracias por asistir.");
};
// Llamadas a la función para diferentes participantes
mostrarBienvenida("Ana");
mostrarBienvenida("Carlos");
mostrarBienvenida("María");
