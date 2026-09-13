/* Ejercicio 1. Cálculo del área de un espacio
Una empresa de San Miguel necesita calcular el área de diferentes espacios antes de instalar
piso cerámico. Cree una función tradicional llamada calcularAreaRectangulo que reciba el
largo y el ancho del espacio como números y retorne el área calculada.
Pruebe la función con al menos dos espacios de dimensiones diferentes y presente los
resultados mediante mensajes comprensibles , utilizamos validaciones y utilizar la variable resumen*/
import promptSync from "prompt-sync";
const prompt = promptSync();
/**
 * Solicita la cantidad de espacios y valida que sea
 * un número entero mayor que cero.
 */
function solicitarCantidadEspacios() {
    let cantidadEspacios;
    do {
        const entrada = prompt("¿Cuántos espacios desea procesar? ");
        cantidadEspacios = Number(entrada);
        if (isNaN(cantidadEspacios)) {
            console.log("Error: debe ingresar un valor numérico.");
        }
        else if (!Number.isInteger(cantidadEspacios)) {
            console.log("Error: debe ingresar un número entero.");
        }
        else if (cantidadEspacios <= 0) {
            console.log("Error: la cantidad debe ser mayor que cero.");
        }
    } while (isNaN(cantidadEspacios) ||
        !Number.isInteger(cantidadEspacios) ||
        cantidadEspacios <= 0);
    return cantidadEspacios;
}
/**
 * Solicita una medida y valida que sea
 * un número mayor que cero.
 */
function solicitarMedida(mensaje) {
    let medida;
    do {
        const entrada = prompt(mensaje);
        medida = parseFloat(entrada);
        if (isNaN(medida)) {
            console.log("Error: debe ingresar un valor numérico.");
        }
        else if (medida <= 0) {
            console.log("Error: la medida debe ser mayor que cero.");
        }
    } while (isNaN(medida) || medida <= 0);
    return medida;
}
/**
 * Calcula y retorna el área de un rectángulo.
 */
function calcularAreaRectangulo(largo, ancho) {
    return largo * ancho;
}
// Programa principal
console.log("====================================");
console.log(" SISTEMA DE CÁLCULO DE ÁREAS");
console.log("====================================");
const cantidadEspacios = solicitarCantidadEspacios();
let resumen = "";
for (let numeroEspacio = 1; numeroEspacio <= cantidadEspacios; numeroEspacio++) {
    console.log(`\n--- Registro del espacio ${numeroEspacio} ---`);
    const nombreEspacio = prompt("Ingrese el nombre del espacio: ").trim();
    const largo = solicitarMedida("Ingrese el largo en metros: ");
    const ancho = solicitarMedida("Ingrese el ancho en metros: ");
    const area = calcularAreaRectangulo(largo, ancho);
    resumen += `
Espacio ${numeroEspacio}: ${nombreEspacio}
Largo: ${largo.toFixed(2)} metros
Ancho: ${ancho.toFixed(2)} metros
Área: ${area.toFixed(2)} metros cuadrados
------------------------------------
`;
}
// Presentación final
console.log("\n====================================");
console.log("       RESUMEN DE LOS ESPACIOS");
console.log("====================================");
console.log(resumen);
console.log(`Total de espacios procesados: ${cantidadEspacios}`);
