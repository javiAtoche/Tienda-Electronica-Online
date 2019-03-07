//IMPORTS
// import * as indexJS from "index.js";


//CONSTANTES
const c_BEFOREEND = "beforeend";
const c_AFTEREND = "afterend";
const c_BEFOREBEGIN = "beforebegin";
const c_AFTERBEGIN = "afterbegin";
const c_NOFILTERCATEG = categorias[0];
const c_CATEGORIA = "categoria_producto";
const c_BUSQUEDA = "barra_busqueda";

const c_DATOS_ANYADIRACARRITO = "anyadir-a-carrito";
const c_DATOS_VERDETALLEPRODUCTO = "ver-detalle-producto";

const c_CODIGO_PRODUCTO = "codigo-producto";



//VARIABLES BARRA BUSQUEDA
//select con las opciones de las categorias
let g_selectCateg = document.querySelector("#select-categorias");
//valor de la opcion de select de categorias
let g_valorCategoria = c_NOFILTERCATEG;
//valor del campo input de busqueda
let g_valorBusqueda = "";
//boton de busqueda
let g_buttonSearch = document.querySelector("#button-search-product");




// VARIABLES CARRITO COMPRA
//icono del carrito
let g_carritoLink = document.querySelector("#carrito-link");
//div que representa el minicarrito
let g_cajaCarrito = document.querySelector("#caja-carrito");
//variable que almacena la caja que envuelve a los productos que se anyaden al carrito
let g_cajaProductosCarrito = document.querySelector("#caja-productos-carrito");


//VARIABLES INFORMACION CONTACTO EN HEADER
//icono azul de informacion
let g_infoIcon = document.querySelector("#info-header-div");
 //div con los elementos de informacion
let g_infoDiv = document.querySelector("#info-header-1");




/*********//* LOAD *//***************/
//EVENTO LOAD: Evento que se ejecuta al cargar la pagina
window.addEventListener('load',() =>{

    // ANYADE CATEGORIAS A LA PAGINA PRINCIPAL
    //recorremos las 'categorias' del fichero JSON
    _anyadeCategoriasAlIndex();

    // ANYADE PRODUCTOS FILTRADOS POR CONSULTA
    // ACCION 'CLICK' AL BOTON 'SEARCH'
    _clickBusqueda();

    // EVENTO 'CLICK' COLLAPSE DE ICONO CARRITO
    _clickCollapseCarrito();
    
    // EVENTO 'CLICK' ICONO ELIMINAR PRODUCTO DE CARRITO
    _clickEliminarProductoDeCarrito();

    // EVENTO 'CLICK' COLLAPSE DE ICONO INFO
    _clickCollapseInfo();

});


/********************************************************
 *******     HEADER     ********
 *******************************************************/
//ICONO INFO 'i': Evento 'click' cuando se pulsa el ICONO INFO 'i' amarillo, y que muestra la informacion
function _clickCollapseInfo(){
    g_infoIcon.addEventListener('click',() => 
    {
        _collapse(g_infoDiv);
    });
}




/**********************************************
* BUSQUEDA
* ********************************************/

//ANYADE CATEGORIAS AL DOM
function _anyadeCategoriasAlIndex(){
    for(let cat of categorias){
        //anyade al padre, divCajaPedidos, el producto creado
        _addElementInDom(g_selectCateg,_plantillaElementCateg(cat),c_BEFOREEND);
    }
}



/* ---------------------------------------------- */
// EVENTO CLICK EN BOTON BUSQUEDA
function _clickBusqueda(){
    
    g_buttonSearch.addEventListener('click', () =>
   {
       // Almaceno en window.localStorage los campos que necesito para filtrar los productos
       window.localStorage.setItem(c_CATEGORIA,document.querySelector("#select-categorias").value);
       window.localStorage.setItem(c_BUSQUEDA,document.querySelector("#input-search").value);

        if(window.location.href.includes("consulta.html")){
            // recargar "consulta.html"
             window.location.reload();
        }else{
            
            // ir a pagina "consulta.html"
            window.open("consulta.html","_self");

        }
   });
}


 /* ---------------------------------------------- */



/**********************************************
* CARRITO DE COMPRA
* ********************************************/
//ICONO CARRITO: Evento 'click' cuando se pulsa el icono de carrito
function _clickCollapseCarrito(){
    g_carritoLink.addEventListener('click',()=>
    {
        _collapse(g_cajaCarrito);
    });
}

//EVENTO 'CLICK' ICONO ELIMINAR PRODUCTO DE CARRITO
function _clickEliminarProductoDeCarrito(){
    g_cajaProductosCarrito.addEventListener('click', (p_evento)=>
    {
        _eliminarProductoDeCarrito(p_evento.target.parentNode.parentNode);
    });
}

// FUNCION ELIMINA PRODUCTO DE CARRITO: elimina un producto del carrito dado el envoltorio de ese producto
function _eliminarProductoDeCarrito(p_productoAEliminar){
    _removeElementInDom(g_cajaProductosCarrito,p_productoAEliminar);
}


/**********************************************
* SECTION DE PRODUCTOS
* ********************************************/
// ANYADE PRODUCTOS AL CARRITO O VER DETALLES DEL PRODUCTO
// function _clickAnyadirProductoACarrito(p_contenedorProductos){
function _clickSectionDeProductos(p_contenedorProductos){
    p_contenedorProductos.addEventListener('click', (p_evento) =>
    {
        if(p_evento.target.getAttribute("datos") == c_DATOS_ANYADIRACARRITO){
            // ANYADE PRODUCTOS AL CARRITO
            _anyadirProductoACarrito(p_evento.target.getAttribute("codigo_producto"));
        }else if(p_evento.target.getAttribute("datos") == c_DATOS_VERDETALLEPRODUCTO){
            // VER DETALLE DEL PRODUCTO EN PAGINA DE PRODUCTO
            _verDetalleProducto(p_evento.target.getAttribute("codigo_producto"));
        }

    });
}



// FUNCION ANYADE PRODUCTO A CARRITO: anyade un producto al carrito dado su id de producto
function _anyadirProductoACarrito(p_idProducto){
    
    let l_foundProduct = _buscarProductoXCodigo(p_idProducto);

    if( l_foundProduct != null){
        _addElementInDom(g_cajaProductosCarrito,_plantillaElementCarrito(l_foundProduct),c_BEFOREEND);
    }
}

// FUNCION VER DETALLE PRODUCTO: nos envia a la pagina de detalle del producto
function _verDetalleProducto(p_idProducto){
    //guarda id de producto, para recuperarlo en la pagina del producto cuando esta cargue, y asi cargar el producto deseado
    window.localStorage.setItem(c_CODIGO_PRODUCTO,p_idProducto);

    window.open("detalle_producto.html", "_self");
}





/* ---------------------------------------------- */

/*  PLANTILLAS
************************************* */

// CATEGORIAS
function _plantillaElementCateg(p_categoria){
    // <option class="bg-dark text-dark" value="${categorias.indexOf(`${categoria}`)}">${categoria}</option>
    let l_plantillaCategoria = '';
    if(p_categoria.toLowerCase() == 'Categorias'.toLowerCase()){
        l_plantillaCategoria =
        `
        <option class="bg-dark text-light" selected>${p_categoria}</option>
        `;
    }else{
        l_plantillaCategoria =
        `
        <option class="bg-dark text-light">${p_categoria}</option>
        `;
    }
    return l_plantillaCategoria;
}

// PLANTILLA PRODUCTO CARRITO:  funcion CREA LA PLANTILLA para un PRODUCTO EN EL CARRITO con codigo HTML
function _plantillaElementCarrito(p_prod){
    let l_plantillaCar =
    `
    <!-- fila i -->
    <div class="fila-producto-carrito d-flex p-2">
      <!-- col 1 -->
      <div class="col1-carrito col-2 d-flex justify-content-center align-items-center p-2">
        <img src="${p_prod.imagenURL}" alt="producto1" class="img-fit ">
      </div>
      <!-- col 2 -->
      <div class="col2-carrito col d-flex flex-column justify-content-center align-items-center text-dark p-2">
        <p class="text-center font-size-12 border-bottom border-dark" >${p_prod.nombre}</p>
        <p class="text-center font-size-15 text-danger" >${p_prod.precio.toFixed(2)} €</p>
      </div>
      <!-- col 3 -->
      <div class="col3-carrito col-1 d-flex justify-content-center align-items-center p-2">
        <i class="fas fa-times text-danger cursor-pointer"></i>
      </div>
    </div><!-- .fila i -->

    `;
    return l_plantillaCar;
}

 


