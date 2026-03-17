-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS `inventario_productos`;

-- Usar la base de datos recién creada
USE `inventario_productos`;

--
-- Estructura de la tabla para `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
    `id_producto` INT AUTO_INCREMENT PRIMARY KEY,
    `nombre_producto` VARCHAR(255) NOT NULL,
    `descripcion` TEXT,
    `precio` DECIMAL(10, 2) NOT NULL,
    `stock` INT NOT NULL DEFAULT 0,
    `fecha_creacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `fecha_actualizacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Inserción de datos de ejemplo en la tabla `productos`
--

INSERT INTO `productos` (
    `nombre_producto`,
    `descripcion`,
    `precio`,
    `stock`
)
VALUES (
    'Laptop HP Pavilion',
    'Laptop con procesador Intel Core i5, 8GB RAM, 256GB SSD.',
    899.99,
    50
);

INSERT INTO `productos` (
    `nombre_producto`,
    `descripcion`,
    `precio`,
    `stock`
)
VALUES (
    'Monitor Dell UltraSharp',
    'Monitor de 27 pulgadas, resolución 4K, ideal para diseño gráfico.',
    450.00,
    30
);

INSERT INTO `productos` (
    `nombre_producto`,
    `descripcion`,
    `precio`,
    `stock`
)
VALUES (
    'Teclado Mecánico HyperX Alloy',
    'Teclado mecánico con switches Cherry MX Red y retroiluminación RGB.',
    120.50,
    100
);

INSERT INTO `productos` (
    `nombre_producto`,
    `descripcion`,
    `precio`,
    `stock`
)
VALUES (
    'Mouse Logitech MX Master 3',
    'Mouse inalámbrico avanzado con ergonomía superior y botones personalizables.',
    99.99,
    75
);

INSERT INTO `productos` (
    `nombre_producto`,
    `descripcion`,
    `precio`,
    `stock`
)
VALUES (
    'Auriculares Sony WH-1000XM4',
    'Auriculares con cancelación de ruido líderes en la industria, sonido premium.',
    349.00,
    40
);