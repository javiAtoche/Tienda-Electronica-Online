-- drop tabla `cliente`
DROP TABLE if EXISTS `cliente`;

-- create tabla `cliente`
CREATE TABLE if NOT EXISTS `cliente`(
	`cli_id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
	`cli_nombre` VARCHAR(50) NOT NULL,
	`cli_direccion` VARCHAR(150) NOT NULL,
	`cli_telefono` CHAR(9),
	`cli_email` VARCHAR(30),
	`cli_cif` VARCHAR(15),
	`cli_tarjeta` VARCHAR(21),
	PRIMARY KEY (`cli_id`)
);
