CREATE DATABASE Proyecto_Irving2;
SHOW databases;
USE Proyecto_Irving2;

CREATE TABLE IF NOT EXISTS Zapatos(
codigo INT PRIMARY KEY AUTO_INCREMENT,
modelo VARCHAR (50) NOT NULL,
marca VARCHAR (50) NOT NULL,
color VARCHAR (50) NOT NULL,
numero INT NULL,
precio DECIMAL(10,2) NOT NULL,
material VARCHAR (30) NOT NULL,
genero VARCHAR (20) NOT NULL,
stock INT NULL DEFAULT 0
);

INSERT INTO Zapatos (modelo,marca,color,numero,precio,material,genero,stock) VALUES
('TENIS', 'NIKE', 'NEGRO', 6, 1950, 'SINTETICO', 'CABALLERO',7),
('TENIS', 'ADIDAS', 'BLANCO', 7, 2632, 'SINTETICO', 'DAMA',5),
('TENIS', 'PIRMA', 'ROJO', 6, 3100, 'PIEL', 'CABALLERO',10),
('TENIS', 'PUMA', 'AZUL', 5, 2999, 'PIEL', 'DAMA',8);

-- Tabla para almacenar la cabecera de la venta
CREATE TABLE ventas (
	    venta_id INT PRIMARY KEY AUTO_INCREMENT,
        fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		total DECIMAL(10,2) NOT NULL
	);

-- Tabla para almacenar los productos de cada venta
CREATE TABLE detalle_ventas (
	DETALLE_id INT PRIMARY KEY AUTO_INCREMENT,
	VENTA_id INT NOT NULL,                  -- El ID de la venta a la que pertenece
	CODIGO INT NOT NULL,                 -- El ID del juego vendido
	CANTIDAD INT NOT NULL,
	PRECIO_unitario DECIMAL(10, 2) NOT NULL, -- Guardamos precio al momento de la venta
	IMPORTE DECIMAL(10, 2) NOT NULL,      -- (cantidad * precio_unitario)

	-- Creamos las llaves foraneas para mantener la integridad
	FOREIGN KEY (venta_id) REFERENCES ventas(venta_id) ON DELETE CASCADE,
	FOREIGN KEY (CODIGO) REFERENCES ZAPATOS(CODIGO)
	);
