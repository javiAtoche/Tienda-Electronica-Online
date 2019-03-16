
-- inserta un registro en la tabla `producto`o lo reemplaza si este ya existe.
-- 1
REPLACE INTO producto (categoria,nombre,precio,descripcionCorta,descripcionLarga,imagenURL,stock,descuento,ventas)
	VALUES (
		'Laptops',
		'MSI GL63 8RD-407XES Intel Core i7-8750H/8GB/512GB SSD/GTX1050Ti/15.6"',
		999,
		'Prepárate para sentir todo el poder del juego con el potente ordenador portátil de MSI GL63 8RD-407XES. Un portátil Gaming dotado con un procesador Coffeelake i7, 8GB de RAM, 512GB SSD de almacenamiento, y todo bajo una potente gráfica NVIDIA GeForce® GTX 1050Ti 4GB GDDR5.',
		'',
		'img/productos/producto1.jpg',
		30,
		9,
		7
	)
;

SELECT * FROM producto;