/*
Los puntos y comas se usan principalmente para marcar el final de una sentencia. 
Esto ayuda al motor de JavaScript a entender la separación de instrucciones individuales,
lo cual es importante para una ejecución correcta.
*/

let variableOne = 5;  // Declare a variable and assign a value
let variableTwo = 10; // Declare another variable and assign a value

let a = 1;   // Statement ends here
let b = 2;   // Another statement starts here

// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? 'english';
const I18N_CURRICULUM_DIR = path.resolve(
  __dirname,
  curriculumLocale === 'english' ? '.' : 'i18n-curriculum/curriculum'
);