-- Ejercicios para medir tu aprendizaje
-- Instrucciones: Realiza estos ejercicios en tu entorno de MySQL para practicar los conceptos vistos.

/*
-- Creación de Esquema: 
-- Crea una base de datos llamada Biblioteca y una tabla llamada Libros. 
-- La tabla debe tener: 
un ID autoincrementable, 
un título (texto variable), 
un autor (texto variable), 
el año de publicación (número entero) y 
el estado (si está disponible o no, puedes usar un tipo de dato como CHAR(1)).
*/
CREATE DATABASE biblioteca_self;

USE biblioteca_self;

CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    autor VARCHAR(50),
    anio INT,
    estado char
);

-- Carga de Datos: Inserta al menos 3 libros de tu preferencia en la tabla Libros. Asegúrate de usar el formato correcto para cada tipo de dato.
-- Consulta con Filtro: Realiza una consulta que muestre únicamente el título y el autor de los libros publicados después del año 2010.
-- Actualización Segura: Cambia el estado de un libro específico (identificándolo por su ID) para marcarlo como no disponible.
-- Limpieza: Escribe la sentencia necesaria para borrar un libro de la tabla, pero ten cuidado de no borrar todos los registros.
*/