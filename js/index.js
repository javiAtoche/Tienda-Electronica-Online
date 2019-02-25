//IMPORTS
// import sass from '../scss/index.scss'

//CONSTANTES


//VARIABLES SECTION 2 PRODUCTOS
//#caja-productos, es la caja que envuelve a los productos que se muestran en la seccion 2
let g_divCajaProductos = document.querySelector("#caja-productos");



/************************/
//EVENTO LOAD: Evento que se ejecuta al cargar la pagina
window.addEventListener('load',() =>{

    // ANYADE PRODUCTOS A LA PAGINA PRINCIPAL
    //recorremos los 'productos' del fichero JSON
    _anyadeProductosAlIndex();

    // ANYADE PRODUCTOS AL CARRITO O VER DETALLES DEL PRODUCTO
    _clickSectionDeProductos(g_divCajaProductos);

});


//FUNCIONES
/*******************************/

/**********************************************
* PRODUCTOS EN PAGINA
* ********************************************/
//ANYADE PRODUCTOS AL DOM
function _anyadeProductosAlIndex(){
    for(let l_item of productos){
        //anyade al padre, divCajaPedidos, el producto creado
        _addElementInDom(g_divCajaProductos,_plantillaElementProduct(l_item),c_BEFOREEND);
    }
}



/* ---------------------------------------------- */

/*  PLANTILLAS
************************************* */

// PLANTILLA PRODUCTO: funcion CREA LA PLANTILLA PRODUCTO con codigo HTML
function _plantillaElementProduct(p_producto){

    let l_templateProduct = 
    `
    <!-- producto -->
    <div class="producto col-8 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center m-auto p-2">
        <!-- DIV que define el elemento que se mostrara encima del producto cuando se posicione el raton por encima -->
        <!-- producto-hover -->
        <div class="producto-hover cursor-pointer d-flex flex-column justify-content-center align-items-center text-white p-2">
            
            <!-- ANYADIR a CARRITO -->
            <!-- id="${p_producto.codigo}" -->
            <div class="d-flex flex-column justify-content-center align-items-center">
                <i datos="${c_DATOS_ANYADIRACARRITO}" codigo_producto="${p_producto.codigo}" class="fas fa-cart-plus font-size-50 text-danger"></i>
                <p datos="${c_DATOS_ANYADIRACARRITO}" codigo_producto="${p_producto.codigo}" class="font-size-18 border-letter-danger text-center">Añadir a carrito</p>
            </div>

            <!-- VER DETALLE PRODUCTO -->
            <div id="ver-detalle-prod-hover" class="d-flex flex-column justify-content-center align-items-center">
                <i datos="${c_DATOS_VERDETALLEPRODUCTO}" codigo_producto="${p_producto.codigo}" class="fas fa-info-circle font-size-50 text-warning"></i>
                <p datos="${c_DATOS_VERDETALLEPRODUCTO}" codigo_producto="${p_producto.codigo}" class="font-size-18 border-letter-warning text-center">Ver detalle</p>
            </div>

        </div><!-- .producto-hover -->

        <!-- Caja de imagen -->
        <div class="caja-imagen d-flex justify-content-center align-items-center h-20rem w-100">
            <img src="${p_producto.imagenURL}" alt="${p_producto.nombre}" title="${p_producto.nombre}" class="img-fit h-100 w-100 roundedRem-20">
        </div>

        <!-- Caja de informacion del producto -->
        <div class="caja-descripcion d-flex flex-column align-items-center w-100">
            <h5 class="titulo-producto m-0">${p_producto.nombre}</h5>
            <p class="precio-producto text-wrap text-center w-100 m-0">${p_producto.precio.toFixed(2)} €</p>
        </div>
    </div><!-- .producto -->
    `;
    return l_templateProduct;
}









