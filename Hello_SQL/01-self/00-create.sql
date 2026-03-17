-- TEORICO 1: 
-- EN ESTE ARCHIVO REVISAMOS LAS PRINCIPALES CONSULTAS: MANIPULACION DE DATOS Y SQL BASICO
-- CREATE DATABASE
-- Esta instruccion se usa para crear un contendedor, es decir la BASE DE DATOS
CREATE DATABASE TEORICO1;

-- USE
-- Selecciona la base de datos indicada
USE TEORICO1;

-- CREATE TABLE
--Define la estructura de una tabla
CREATE TABLE datos (
    codigo INT AUTO_INCREMENT PRIMARY KEY, -- AUTO_INCREMENT: Auto numeracion
    nombre VARCHAR(100), -- VARCHAR: Cadenas de caracteres
    precio DECIMAL(10,2), -- DECIMAL: Numeros exactos
    stok INT, -- INT/INTEGER: Numeros enteros
    fecha_ingreso DATE, -- DATE: fechas, solo la fecha sin la hora YYYY-MM-DD
    fecha_hora DATETIME DEFAULT CURRENT_TIMESTAMP, -- DATETIME: cuando necesites almacenar fechas muy lejanas en el futuro o pasado
    fecha_hora1 TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- TIMESTAMP si necesitas que las fechas se ajusten automáticamente a la zona horaria del usuario
    genero char, -- CHAR: Longitud fija
    poema text -- TEXT: Para grande cantidades de datos
);