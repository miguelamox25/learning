/**
 * TAREA TÉCNICA: SISTEMA DE FACTURACIÓN Y REGISTRO "FIT-TECH"
 * ROL: Desarrollador Backend Junior
 * 
 * OBJETIVO: Crear un motor de procesamiento que limpie datos de entrada,
 * calcule costos basados en lógica de negocio y devuelva un reporte.
 */

// --- CONFIGURACIÓN GLOBAL (Precios de la empresa) ---
const COSTO_MEMBRESIA_MENSUAL = 50;
const IVA_PORCENTAJE = 0.16;

// 1. FUNCIÓN DE LIMPIEZA DE DATOS (Basado en 'Formateador de Cadenas')
// El sistema recibe nombres como "  mArCoS rIvAs  ". 
// Crea una función que elimine espacios y devuelva el nombre en MAYÚSCULAS.
function limpiarNombreSocio(nombreSucio) {
    // Tu código aquí
    let nombreLimpio = nombreSucio.toUpperCase().trim()
    return nombreLimpio ? nombreLimpio : "SIN NOMBRE";
    // nombreLimpio: devuelve false si esta vacio
}

// 2. FUNCIÓN DE LÓGICA DE ACCESO (Basado en 'Booleanos y Números')
// La empresa solo acepta socios de entre 18 y 60 años.
// La función debe devolver 'true' si la edad es válida, de lo contrario 'false'.
function validarEdadSocio(edad) {
    // Tu código aquí
    if (edad >= 18 && edad <= 60) {
        return true
    } else {
        return false
    }
}

// 3. FUNCIÓN DE CÁLCULO FINANCIERO (Basado en 'Operaciones Matemáticas')
// Recibe el precio base y un booleano que indica si es "Socio VIP".
// Si es VIP, aplica un 20% de descuento. Al final, suma el 16% de IVA.
function calcularTotalAPagar(esVIP) {
    // Pista: Usa COSTO_MEMBRESIA_MENSUAL y aplica la lógica
    let pago
    esVIP == true ? pago = COSTO_MEMBRESIA_MENSUAL - (COSTO_MEMBRESIA_MENSUAL * 0.2) : pago = COSTO_MEMBRESIA_MENSUAL
    pago = pago + (pago * 0.16)
    return pago
}

// 4. FUNCIÓN INTEGRADORA (El "Cerebro" del sistema)
// Esta función debe llamar a las anteriores para generar el mensaje final.
function procesarNuevoSocio(nombre, edad, esVIP) {
    // Paso A: Validar edad. Si no es válida, retornar: "Registro rechazado por edad".
    let valido = validarEdadSocio(edad)
    if (valido) {
        // Paso B: Limpiar el nombre.
        let nombreLimpio = limpiarNombreSocio(nombre)

        // Paso C: Calcular el total a pagar.
        let pago = calcularTotalAPagar(esVIP)
        let vip = esVIP == true ? 'VIP' : 'ESTÁNDAR'

        // Paso D: Generar el mensaje usando Template Literals:
        // "FACTURA GENERADA: Socio [NOMBRE]. Total con IVA: $[TOTAL]. Estado: [VIP/ESTÁNDAR]"
        return `FACTURA GENERADA: Socio ${nombreLimpio}. Total con IVA: ${pago.toFixed(2)}. Estado: ${vip}`
    }else{
        return `REGISTRO RECHAZADO POR EDAD`
    }
}

// --- PRUEBA TU CÓDIGO (Simulación de entrada de datos) ---
const resultado = procesarNuevoSocio(" ", 25, true);
console.log(resultado);

