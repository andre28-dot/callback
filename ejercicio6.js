/* Ejercicio 6. Refactorización del registro de ventas
Retome el programa de registro de ventas desarrollado en la sesión anterior. Organice el
código mediante funciones para reducir su extensión y facilitar su lectura.
El programa deberá conservar su comportamiento original y utilizar funciones separadas
para realizar, como mínimo, las siguientes tareas:
• Mostrar el encabezado del sistema.
• Validar o convertir el precio ingresado.
• Clasificar el tipo de cliente.
• Calcular el total de la venta.
• Mostrar el resumen final.
Analice qué información debe recibir cada función, qué tipo de dato debe retornar y cuáles
funciones solamente mostrarán información. */
import PromptSync from "prompt-sync";
const prompt = PromptSync();
// Función para mostrar el encabezado del sistema
function mostrarEncabezado() {
    console.log("================================");
    console.log("   Sistema de Registro de Ventas");
    console.log("================================");
    console.log("Ingrese los datos de la venta a continuación:");
}
// Función para obtener los datos de la venta
function obtenerDatosVenta() {
    console.log("Ingrese el nombre del cliente:");
    const nombreCliente = prompt("");
    console.log("Ingrese el precio del producto:");
    const precioProducto = prompt("");
    console.log("Ingrese el tipo de cliente (Regular, Premium, VIP):");
    const tipoCliente = prompt("");
    return { nombreCliente, precioProducto, tipoCliente };
}
// Función para validar y convertir el precio
function convertirPrecio(precio) {
    const precioConvertido = parseFloat(precio);
    if (isNaN(precioConvertido) || precioConvertido <= 0) {
        return 0;
    }
    return precioConvertido;
}
// Función para clasificar el tipo de cliente
function clasificarCliente(tipoCliente) {
    const tipo = tipoCliente.toLowerCase();
    if (tipo === "regular") {
        return "Regular";
    }
    else if (tipo === "premium") {
        return "Premium";
    }
    else if (tipo === "vip") {
        return "VIP";
    }
    else {
        return "Regular";
    }
}
// Función para calcular el total de la venta
function calcularTotal(precio, tipoCliente) {
    let descuento = 0;
    if (tipoCliente === "Premium") {
        descuento = 0.10;
    }
    else if (tipoCliente === "VIP") {
        descuento = 0.20;
    }
    return precio - (precio * descuento);
}
// Función para mostrar el resumen final
function mostrarResumen(nombreCliente, precio, tipoCliente, total) {
    console.log("\n================================");
    console.log("        RESUMEN DE LA VENTA");
    console.log("================================");
    console.log("Cliente:", nombreCliente);
    console.log("Precio original: $", precio.toFixed(2));
    console.log("Tipo de cliente:", tipoCliente);
    console.log("Total a pagar: $", total.toFixed(2));
    console.log("================================");
}
// Programa principal
mostrarEncabezado();
const datos = obtenerDatosVenta();
const precio = convertirPrecio(datos.precioProducto);
const tipoCliente = clasificarCliente(datos.tipoCliente);
const total = calcularTotal(precio, tipoCliente);
mostrarResumen(datos.nombreCliente, precio, tipoCliente, total);
