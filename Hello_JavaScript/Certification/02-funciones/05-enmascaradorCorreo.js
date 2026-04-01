let email // Variable que almacenará los diferentes correos electronicos

function maskEmail(email) {
  let start = email.indexOf('@'); // Encuentra la posición del '@'
  let end = email.length; // Identifica cual es el total de caracteres

  // Si el nombre tiene al menos 3 caracteres (ej. "abc@...")
  if (start > 2) { 
    let pt2 = email.slice(start - 1, end); // Guarda en pt2, la parte final del correo
    let pt1 = email[0] + '*'.repeat(start - 2); // Guarda en pt1, la primer letra, y los asteriscos
    console.log(pt1 + pt2);  // Imprime el resultado concatenado
  } 
  // Para correos cortos (ej. "r@...", "ab@...")
  else {
    // Aquí usamos el dominio directo
    console.log('*' + email.slice(start, end)); // solo se imprime un asterisco y la parte final
  }
}
email = 'apple.pie@example.com'
maskEmail(email)

email = 'freecodecamp@example.com'
maskEmail(email)

email = 'info@test.dev'
maskEmail(email)

email = 'user@domain.org'
maskEmail(email)

email = 'r@gmail.com'
maskEmail(email)

email = 'gr@gmail.com'
maskEmail(email)