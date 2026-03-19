/**
 * REPETICIÓN INTEGRADORA: SISTEMA DE GESTIÓN DE PERFILES (DEV EDITION)
 * 
 * Instrucciones: Escribe tu código debajo de cada comentario. 
 * ¡Intenta no usar Google a menos que sea estrictamente necesario!
 */

// ---------------------------------------------------------------------------
// NIVEL 1: CIMENTACIÓN (Variables y Tipos de Datos)
// ---------------------------------------------------------------------------

// 1. Un nuevo desarrollador se ha unido al equipo. 
// Declara una constante para su 'idDeEmpleado' (un número) y 
const idDeEmpleado = 101

// una variable que pueda cambiar para su 'proyectoActual' (una cadena).
let proyectoActual


// 2. El desarrollador nos dio su nombre: "  marcos rivas  ". 
// Como profesional, necesitas limpiar los espacios en blanco sobrantes 
// y asegurarte de que el nombre esté guardado en una variable 
// llamada 'nombreLimpio' (pista: usa métodos de formateo) [3].
let nombreLimpio = '  marcos rivas  '.trim()

// 3. Crea una variable llamada 'mensajeBienvenida' usando Template Literals.
// El mensaje debe decir: "Bienvenido Marcos Rivas, tu ID es [id] y trabajarás en [proyecto]".
// Nota: Asegúrate de que el nombre aparezca con la primera letra en mayúscula si puedes, 
// o al menos todo en mayúsculas para que resalte.
proyectoActual = 'Punto de venta'

let mensajeBienvenida = `Bienvenido ${nombreLimpio.toUpperCase()}, tu ID es ${idDeEmpleado} y trabajarás en ${proyectoActual}`
console.log(mensajeBienvenida)
// ---------------------------------------------------------------------------
// NIVEL 2: INSPECTOR DE DATOS (Manejo de Cadenas)
// ---------------------------------------------------------------------------

// 4. Seguridad nos pide validar la contraseña de este usuario.
// Declara una variable 'passwordIngresada' con el valor "Admin12345".
// Crea una variable booleana llamada 'esValida' que verifique si la longitud 
// es mayor o igual a 8 caracteres [3].
let passwordIngresada = 'Admin12345'
let esValida = false
if (passwordIngresada.length >= 8){
    esValida = true
}
console.log(`La contraseña es ${esValida}`)
// CORRECCION: let esValida = passwordIngresada.length >= 8;


// 5. El departamento de IT necesita un "Slug" para la URL del perfil.
// Toma el 'nombreLimpio', conviértelo todo a minúsculas y reemplaza 
// el espacio entre "marcos" y "rivas" por un guion (-). 
// Ejemplo esperado: "marcos-rivas".
console.log(nombreLimpio.toLowerCase().replace(' ','-'))

// ---------------------------------------------------------------------------
// NIVEL 3: EL FORMATEADOR PROFESIONAL (Casos de la vida real)
// ---------------------------------------------------------------------------

// 6. Recibiste un reporte de error de un sensor: "ERROR_FATAL:001:Fallo_de_Memoria".
// Necesitas extraer solo la parte del código de error ("001").
// Usa un método para buscar la posición de los dos puntos y "cortar" 
// (slice) solo ese fragmento [3].
let error = 'ERROR_FATAL:001:Fallo_de_Memoria'
let posicionDots = error.indexOf(':')
let codigoError = error.slice(posicionDots+1, posicionDots+4)
console.log(codigoError)


// 7. Simula una actualización: El desarrollador cambió de proyecto.
// Reasigna tu variable de 'proyectoActual' a "Inteligencia Artificial"
// y muestra en consola la nueva longitud de esa cadena.
proyectoActual = 'Inteligencia Artificial'
console.log(`La logitud del nombre del nuevo proyecto es: ${proyectoActual.length}`)

// ---------------------------------------------------------------------------
// SECCIÓN DE DESAFÍOS (EXTRAS RETADORES)
// ---------------------------------------------------------------------------

// EXTRA A: "El Ofuscador de Email"
// Tienes el email: "desarrollador@empresa.com". 
// Crea un nuevo string que oculte parte del email mostrando: "des...r@empresa.com"
// (Este requiere que combines métodos de búsqueda, corte y concatenación).
let email = 'desarrollador@empresa.com'
let emailOculto = email.replace('arrollado','...')
console.log(emailOculto)


// EXTRA B: "Contador de Letras Específicas"
// En la frase: "JavaScript es genial", utiliza un método de búsqueda para encontrar 
// en qué posición comienza la palabra "genial" y 
// luego usa un método de corte para extraer únicamente esa palabra en una nueva variable.
let cadena = 'JavaScript es genial'
let indice = cadena.indexOf('genial')
let palabra = cadena.slice(indice)
console.log(palabra)