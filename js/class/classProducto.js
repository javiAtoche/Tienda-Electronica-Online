let g_codigoProductoUnico = 0;
class Producto{

    /* -- PROPIEDADES -- */
    // this.l_categoria;
    // this.l_codigo;
    // this.l_nombre;
    // this.l_precio;
    // this.l_descripcionCorta;
    // this.l_descripcionLarga; // hacer clase(?)
    // this.l_imagenURL;
    // this.l_stock;
    // this.l_descuento;
    // this.l_ventas;
    // this.l_paginaURLProducto

    /* ----- CONSTRUCTOR ----- */
    constructor(p_categoria,p_codigo,p_nombre,p_precio,p_descripcionCorta,p_descripcionLarga,p_imagenURL,p_stock,p_descuento,p_ventas,p_paginaURLProducto){

        this.setCategoria(p_categoria);
        this.setCodigo(p_codigo);
        this.setNombre(p_nombre);
        this.setPrecio(p_precio);
        this.setDescripcionCorta(p_descripcionCorta);
        this.setDescripcionLarga(p_descripcionLarga);
        this.setImagenURL(p_imagenURL);
        this.setStock(p_stock);
        this.setDescuento(p_descuento);
        this.setVentas(p_ventas);
        this.setPaginaURLProducto(p_paginaURLProducto);

    }

    /* ----- GETTERS & SETTERS ----- */

    /* categoria */
    getCategoria(){
        return this.l_categoria;
    }
    setCategoria(p_categoria){
        if(_validaNoNullNoUndefined(p_categoria) && _validaCadenaNoVacia(p_categoria) ){
            this.l_categoria = p_categoria;
        }
    }
    /* codigo */
    getCodigo(){
        return this.l_codigo;
    }
    setCodigo(p_codigo){
        if(_validaNoNullNoUndefined(p_codigo) && _validaNumero(p_codigo)){
            this.l_codigo = Number.parseInt(p_codigo);
        }
    }
    // asigna un codigo nuevo que se autoincrementa con cada objeto Producto creado
    asignaNuevoCodigoProducto(){
        //aumenta codigo del producto
        g_codigoProductoUnico++;
        // asigna el nuevo codigo a la propiedad codigo
        this.l_codigo = Number.parseInt(g_codigoProductoUnico);
    }

    /* nombre */
    getNombre(){
        return this.l_nombre;
    }

    setNombre(p_nombre){
        if(_validaNoNullNoUndefined(p_nombre) && _validaCadenaNoVacia(p_nombre)){
            this.l_nombre = p_nombre;
        }
    }
    /* precio */
    getPrecio(){
        return  this.l_precio;
    }
    setPrecio(p_precio){
        if(_validaNoNullNoUndefined(p_precio) && _validaNumeroDecimal(p_precio)){
            this.l_precio = Number.parseFloat(p_precio).toFixed(2);
        }
    }
    /* descripcion corta */
    getDescripcioncCorta(){
        return  this.l_descripcionCorta;
    }
    setDescripcionCorta(p_descripcionCorta){
        if(_validaNoNullNoUndefined(p_descripcionCorta)){
            this.l_descripcionCorta = p_descripcionCorta;
        }
    }
    /* descripcion larga */
    getDescripcioncLarga(){
        return this.l_descripcionLarga; 
    }
    setDescripcionLarga(p_descripcionLarga){
        if(_validaNoNullNoUndefined(p_descripcionLarga)){
            this.l_descripcionLarga = p_descripcionLarga;
        }
    }
    /* imagen URL */
    getImagenURL(){
        return this.l_imagenURL;
    }
    setImagenURL(p_imagenURL){
        if(_validaNoNullNoUndefined(p_imagenURL)){
            this.l_imagenURL = p_imagenURL;
        }
    }
    /* stock */
    getStock(){
        return this.l_stock;
    }
    setStock(p_stock){
        if(_validaNoNullNoUndefined(p_stock) && _validaNumeroEntero(p_stock)){
            this.l_stock = Number.parseInt(p_stock);
        }
    }
    /* descuento */
    getDescuento(){
        return this.l_descuento;
    }
    setDescuento(p_descuento){
        if(_validaNoNullNoUndefined(p_descuento) && _validaNumeroEntero(p_descuento)){
            this.l_descuento = Number.parseInt(p_descuento);
        }
    }
    /* ventas */
    getVentas(){
        return this.l_ventas;
    }
    setVentas(p_ventas){
        if(_validaNoNullNoUndefined(p_ventas) && _validaNumeroEntero(p_ventas)){

        }
    }
    /* paginaProducto */
    getPaginaURLProducto(){
        return this.l_paginaURLProducto;
    }
    setPaginaURLProducto(p_paginaURLProducto){
        if(_validaNoNullNoUndefined(p_paginaURLProducto) && _validaCadena(p_paginaURLProducto)){
            this.l_paginaURLProducto = p_paginaURLProducto
        }
    }
    

}