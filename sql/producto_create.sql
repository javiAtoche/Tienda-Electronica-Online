-- crea base de datos
CREATE DATABASE tienda_online;
-- elimina base de datos;
DROP DATABASE tienda_online;

-- usar base de datos `tienda_online`
USE tienda_online;

-- elimina la tabla `producto` si existe
DROP TABLE if EXISTS `tienda_online`.`producto`;

-- crea la tabla `producto`si no existe ya
CREATE TABLE if NOT EXISTS `tienda_online`.`producto`(
	`prod_id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
	`prod_categ_id` VARCHAR(3) NOT NULL,
	`prod_nombre` VARCHAR(150) NOT NULL,
	`prod_desc_corta` VARCHAR(1000) NOT NULL DEFAULT '',
	`prod_desc_larga` VARCHAR(9000) NOT NULL DEFAULT '',
	`prod_precio` FLOAT(7,2) UNSIGNED NOT NULL DEFAULT 0,
	`prod_imagenurl` VARCHAR(300) NOT NULL DEFAULT '',
	`prod_stock` INTEGER UNSIGNED NOT NULL DEFAULT 0,
	`prod_descuento` INTEGER(3) UNSIGNED NOT NULL DEFAULT 0,
	PRIMARY KEY (`prod_id`)
--	FOREIGN KEY (`fk_prod_categ_id`)
);

-- modificamos los nombres de las columnas de la tabla `producto`
/*
ALTER TABLE producto RENAME COLUMN codigo TO prod_id;
ALTER TABLE producto RENAME COLUMN nombre TO prod_nombre;
ALTER TABLE producto RENAME COLUMN categoria TO prod_categ;
ALTER TABLE producto RENAME COLUMN precio TO prod_precio;
ALTER TABLE producto RENAME COLUMN descripcionCorta TO prod_descrip_corta;
ALTER TABLE producto RENAME COLUMN descripcionLarga TO prod_descrip_larga;
ALTER TABLE producto RENAME COLUMN imagenURL TO prod_imagenurl;
ALTER TABLE producto RENAME COLUMN stock TO prod_stock;
ALTER TABLE producto RENAME COLUMN descuento TO prod_descuento;
ALTER TABLE producto RENAME COLUMN ventas TO prod_ventas;
*/
-- modificamos el tipo de los campos tipo 'Text' para optimizar el espacio
ALTER TABLE producto MODIFY prod_descrip_corta VARCHAR(3000) NOT NULL DEFAULT '';

ALTER TABLE producto MODIFY prod_descrip_larga VARCHAR(12000) NOT NULL DEFAULT '';

-- describe la tabla `producto`
DESCRIBE producto;

-- selecciona todos los registros de la tabla `producto`
SELECT * FROM producto;






