-- drop tabla `categoria`
DROP TABLE if EXISTS `tienda_online`.`categoria`;

-- create tabla `categoria`
CREATE TABLE if NOT EXISTS `tienda_online`.`categoria`(
	`categ_id` VARCHAR(3) NOT NULL,
	`categ_nombre` VARCHAR(30) NOT NULL,	
	PRIMARY KEY (`categ_id`)
);

-- describe tabla `categoria`
DESCRIBE `categoria`;

