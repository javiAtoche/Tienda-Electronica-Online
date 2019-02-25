//IMPORTS
// import * as indexJS from "index.js";

//CONSTANTES


//VARIABLES 

// spans que contienen la informacion de numero de productos mostrado en la pagina y el numero de productos total generado por la busqueda
let g_spanNumProdMostrados = document.querySelector('[datos="num-productos-mostrados"]');
let g_spanNumProdResultantes = document.querySelector('[datos="num-productos-resultantes"]');


//select que ordena los productos filtrados
let g_selectOrden = document.querySelector("#select-orden-productos");
//select que selecciona cuantos productos se van a mostrar
let g_selectNumProdMostradosXPagina = document.querySelector("#select-productos-por-pagina");
// seccion donde se incluyen los productos resultado de la busqueda
let g_sectionConsulta = document.querySelector("#container-prod-consulta");
// elemento padre que envuelve al paginador
let g_padrePaginadorProductos = document.querySelector('[datos*="padre-paginador"]')
// elemento 'a' que te lleva a la anterior pagina en el pie de pagina
// let g_paginaAnterior = document.querySelector('[datos*="pagina-anterior"]');
// elemento 'a' que te lleva a la siguiente pagina en el pie de pagina
// let g_paginaSiguiente = document.querySelector('[datos*="pagina-siguiente"]');
//div que envuelve al numero de paginas que se calcula dinamicamente
// let g_divPaginas = document.querySelector('[datos*="num-pag"]');
// ARRAY PRODUCTOS FILTRADOS
// array con todos los productos que pasan el filtro de busqueda
let g_arrayProdFiltrados = [];
// ARRAY PRODUCTOS POR PAGINA
// array auxiliar para almacenar el numero de productos que se mostrara por pagina
// let g_arrayProdPorPagina = [];
// ARRAY MATRIZ CON LOS PRODUCTOS POR CADA PAGINA
// matriz con todos los productos filtrados, donde las filas seran las paginas y cada celda representa un producto
// let g_array2DPaginado = [];
// numero de paginas total
// let g_numPagTotal = 0;
// indice de pagina actual
// let g_numPagActual = 1;

//-- PAGINADOR --
let g_paginadorConsulta; // se inicializa en el metodo '_mostrarBusqueda()'
// padre de la 'caja-paginas', donde se inserta la caja que contiene la numeracion de las paginas
let g_padreCajaPaginas = document.querySelector('[datos*="padre-paginador"]');
//'[datos="caja-paginas"]'
// let g_cajaPaginas; // se inicializa en el metodo '_mostrarBusqueda()'



// enlace novedades
let g_asideNovedades = document.querySelector('[datos*="novedades"]');
// enlace mas vendidos
let g_asideMasVendidos = document.querySelector('[datos*="mas-vendidos"]');



/*********//* LOAD *//***************/
//EVENTO LOAD: Evento que se ejecuta al cargar la pagina
window.addEventListener('load',() =>{

    

    // FUNCION CARGA DATOS BUSQUEDA ANTERIOR: Mantiene los datos de la busqueda que hemos realizado, de manera que no se pierdan al pasar de una pagina a consulta.html
    _cargaDatosBusquedaAnterior();

    // ANYADE PRODUCTOS FILTRADOS POR CONSULTA
    // ACCION CLICK AL BOTON 'SEARCH'
    _clickBusqueda(productos,g_sectionConsulta,g_selectNumProdMostradosXPagina.value);


    // REALIZA TODAS LAS FUNCIONES DE LA BUSQUEDA MOSTRANDO EL RESULTADO EN LA PAGINA 'CONSULTA.HTML'
    
    _calculaYMuestraBusqueda(g_padreCajaPaginas,g_sectionConsulta, productos,g_selectNumProdMostradosXPagina.value,...g_paginadorTipo1);

    // ANYADE PRODUCTOS AL CARRITO O VER DETALLES DEL PRODUCTO
    _clickSectionDeProductos(g_sectionConsulta);

    // EVENTO 'CLICK' SELECT NUM ELEMENTOS A MOSTRAR
    _clickSelectNumProdMostradosXPagina(g_paginadorConsulta);

    // EVENTO 'CLICK' EN PIE PAGINA
    g_padreCajaPaginas.addEventListener('click',() =>
    {
        // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
        _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,g_paginadorConsulta.getArrayTramo().length,g_paginadorConsulta.getArrayTotal().length);
    });

    /* ------     ASIDE   ------*/
    
    // _clickNovedades(productos,g_sectionConsulta,g_selectNumProdMostradosXPagina.value);

    // _clickMasVendidos(productos,g_sectionConsulta,g_selectNumProdMostradosXPagina.value);

});


//FUNCIONES
/*******************************/


/*********************************************
* SECTION CONSULTA DE PRODUCTOS
* ********************************************/

/* ---------------------------------------------- */
/*********************************
* MUESTRA NUM PRODUCTOS && SELECTs
* ********************************/

// MUESTRA NUMERO DE PRODUCTOS MOSTRADOS / NUMERO DE PRODUCTOS TOTAL EN LA BUSQUEDA
function _muestraNumProductosMostradosDelTotal(p_spanNumProdMostrados,p_spanNumProdResultantes,p_numProductosDePagina,p_numProductosFiltrados){

    // productos mostrados en pagina
    p_spanNumProdMostrados.innerHTML = p_numProductosDePagina;
    // total productos filtrados
    p_spanNumProdResultantes.innerHTML = p_numProductosFiltrados;
}




// EVENTO 'CLICK' SELECT "MOSTRAR 'X' PRODUCTOS"
function _clickSelectNumProdMostradosXPagina(p_paginador){
    g_selectNumProdMostradosXPagina.addEventListener('change', (p_evento) =>
    {

        let l_selectNumProdMostradosXPaginaValue = p_evento.target.value;

        // Actualizar valor del paginador
        p_paginador.setNumElementosXPagina(l_selectNumProdMostradosXPaginaValue);


        //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
        // _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

        // calcula el numero de paginas total del paginador
        // let l_numPagTotal = Math.ceil(p_arrayProdFiltrados.length/l_selectNumProdMostradosXPaginaValue);

        // calcula el array tramo a mostrar en la pagina indidicada
        // let l_arrayTramo = g_paginadorConsulta.calculaArrayTramo(p_arrayProdFiltrados,1,l_numPagTotal,l_selectNumProdMostradosXPaginaValue);

        // anyade los productos filtrados a la section '#container-prod-consulta'
        // g_paginadorConsulta.anyadeElementosAPagina(l_arrayTramo,p_nodoPadreDondeMuestraResultado,1,l_numPagTotal,_plantillaElementProdConsulta);

        // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
        _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,p_paginador.getArrayTramo().length,p_paginador.getArrayTotal().length);

        // EVENTO 'CLICK' EN EL NUMERO DE PAGINA
        // g_paginadorConsulta.clickNumPagina(p_arrayProdFiltrados,g_sectionConsulta,l_selectNumProdMostradosXPaginaValue);
        
        // EVENTO 'CLICK' EN EL LINK ASIDE DE 'NOVEDADES'
        // _clickNovedades(p_arrayProdFiltrados,g_sectionConsulta,l_selectNumProdMostradosXPaginaValue);

        // EVENTO 'CLICK' EN EL LINK ASIDE DE 'MAS VENDIDOS'
        // _clickMasVendidos(p_arrayProdFiltrados,g_sectionConsulta,l_selectNumProdMostradosXPaginaValue);

    });
}

 /* ---------------------------------------------- */


    /************************
    *       BUSQUEDA
    * ***********************/

// FUNCION CARGA DATOS BUSQUEDA ANTERIOR
function _cargaDatosBusquedaAnterior(){
    document.querySelector("#select-categorias").value = window.localStorage.getItem(c_CATEGORIA);
    document.querySelector("#input-search").value = window.localStorage.getItem(c_BUSQUEDA);
}

// RESETEA LAS VARIABLES DE BUSQUEDA PARA PREPARARLAS PARA LA PROXIMA BUSQUEDA
// function _resetVariablesBusqueda(){
//     g_arrayProdFiltrados = [];
//     // g_array2DPaginado = [];
// }


// REALIZA TODAS LAS FUNCIONES DE LA BUSQUEDA MOSTRANDO EL RESULTADO EN LA PAGINA 'CONSULTA.HTML'
function _calculaYMuestraBusqueda(p_padreCajaPaginas,p_sectionElementos, p_arrayElementosTotales,p_selectNumProdMostradosXPaginaValue,...p_paginadorTipo1){

        // recogemos el valor en las variables de categoria y busqueda
        g_valorCategoria = window.localStorage.getItem(c_CATEGORIA);
        g_valorBusqueda = window.localStorage.getItem(c_BUSQUEDA);

        //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
        // _removeChildElementsInDom(p_sectionElementos);

        // resetea las variables que se usan para la busqueda
        // _resetVariablesBusqueda();

        //recupera todos los productos que cumplen el filtro de busqueda
        g_arrayProdFiltrados = _recuperaProductosFiltrados(p_arrayElementosTotales,g_valorCategoria, g_valorBusqueda);

        // calculo numero de paginas totales mediante array.length y el select de productos a mostrar por pagina
        // let l_numPagTotal = Math.ceil(g_arrayProdFiltrados.length/p_selectNumProdMostradosXPaginaValue);
        // Se crea el paginador con el array filtrado
        g_paginadorConsulta = new Paginador(p_padreCajaPaginas,p_sectionElementos,g_arrayProdFiltrados,p_selectNumProdMostradosXPaginaValue,...p_paginadorTipo1);
        
        // calcula el array tramo a mostrar en la pagina indidicada
        // let l_arrayTramo = g_paginadorConsulta.privateCalculaArrayTramo(g_arrayProdFiltrados,1,l_numPagTotal,p_selectNumProdMostradosXPaginaValue);

        // anyade los productos filtrados a la section '#container-prod-consulta'
        // g_paginadorConsulta.privateAnyadeElementosAPagina(l_arrayTramo);

        // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
        _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,g_paginadorConsulta.getArrayTramo().length,g_paginadorConsulta.getArrayTotal().length);

        // EVENTO 'CLICK'SELECT PAGINA A MOSTRAR
        // _clickSelectNumProdMostradosXPagina(g_arrayProdFiltrados, p_nodoPadreDondeMuestraResultado);

        // // EVENTO 'CLICK' EN EL NUMERO DE PAGINA
        // g_paginadorConsulta.clickNumPagina(g_arrayProdFiltrados,g_sectionConsulta,p_selectNumProdMostradosXPaginaValue);

}


// recupera todos los productos que cumplen el filtro de busqueda
function _recuperaProductosFiltrados(p_productos,p_valorCategoria, p_valorBusqueda){

    let l_arrayProdFiltrados = []

    for(let l_p of p_productos){
        let l_prodFiltrado = _filtraProductosXCategoria(l_p,p_valorCategoria,p_valorBusqueda);
        if(l_prodFiltrado != null){
            l_arrayProdFiltrados.push(l_prodFiltrado);
        }
    }

    return l_arrayProdFiltrados;
}


// FUNCION ANYADE PRODUCTOS A UNA PAGINA CONCRETA
// function _anyadeProductosAPagina(p_arrayProdFiltrados,p_nodoPadre,p_numPagSeleccionada = 1,p_selectNumProdMostradosXPaginaValue = 10){

//     // calcula numero de paginas total segun el array de busqueda filtrado y el numero de productos mostrados por pagina
//     let l_numPagTotal = Math.ceil(p_arrayProdFiltrados.length/p_selectNumProdMostradosXPaginaValue);
//     // calcula y devuelve el array con el tramo a mostrar en la pagina
//     let l_arrayProdXPag = _calculaArrayTramo(p_arrayProdFiltrados,p_numPagSeleccionada,l_numPagTotal,p_selectNumProdMostradosXPaginaValue);

//     for(let l_p of l_arrayProdXPag){
//         if(l_p != (undefined && null)){
//             _addElementInDom(p_nodoPadre,_plantillaElementProdConsulta(l_p),c_BEFOREEND);
//         }
//     }

//     //PIE PAGINA
//     g_paginadorConsulta.redibujaPaginador(l_numPagTotal,p_numPagSeleccionada);

//     // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
//     _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,l_arrayProdXPag.length,p_arrayProdFiltrados.length);
//  }

 
/* ---------------------------------------------- */
/**********************************************
* PIE NUMERO PAGINAS
* ********************************************/
// // EVENTO 'CLICK' EN PIE PAGINA
// function _eventoClickPiePagina(){
//     this.getNodoPadrePaginador().addEventListener('click',(p_evento) =>
//     {
        
//     });
// }

// FUNCION DIBUJA EL PIE DE PAGINA
// function _dibujaNumPaginas(p_divPaginas,p_numPagTotal){
//     //limpiamos antes de dibujar
//     _removeChildElementsInDom(p_divPaginas);

//     // for(let i = 1; i <= p_numPagTotal; i++){
//     //     _addElementInDom(p_divPaginas,_plantillaElementPiePag(i),c_BEFOREEND);
//     // }
//  }


// EVENTO 'CLICK' EN EL NUMERO DE PAGINA
// function _clickNumPagina(p_arrayProdFiltrados, p_nodoPadreDondeMuestraResultado,p_selectNumProdMostradosXPaginaValue){

//     // click en paginas 1..2..3..
//     g_padrePaginadorProductos.addEventListener('click',(p_evento) =>
//     {
        
//         let l_numPulsadoChar = p_evento.target.getAttribute("pagina");
//         let l_numPulsado = Number.parseInt(l_numPulsadoChar);
//         if(p_evento.target.nodeName == "A"){

//             if(!Number.isNaN(l_numPulsado)){
  
//                 // actualizamos el valor de pagina actual = una pagina menos a la actual
//                 g_paginadorConsulta.setNumPagActual(l_numPulsado);

//                 //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
//                 _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

//                 // muestra la pagina especifica con sus productos
//                 _anyadeProductosAPagina(p_arrayProdFiltrados,p_nodoPadreDondeMuestraResultado,g_paginadorConsulta.getNumPagActual(),p_selectNumProdMostradosXPaginaValue);

//             }
            
//         }else if(p_evento.target.nodeName == "I"){
//             l_numPulsadoChar = p_evento.target.parentNode.getAttribute("pagina");
//             if(l_numPulsadoChar == 'pagina-anterior'){
//                 // Si nos encontramos en una pagina mayor a la 1
//                 if(g_paginadorConsulta.getNumPagActual() > 1){

//                     // actualizamos el valor de pagina actual = una pagina menos a la actual
//                     g_paginadorConsulta.setNumPagActual(g_paginadorConsulta.getNumPagActual()-1);

//                     //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
//                     _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

//                     // muestra la pagina especifica con sus productos
//                     _anyadeProductosAPagina(p_arrayProdFiltrados,p_nodoPadreDondeMuestraResultado,g_paginadorConsulta.getNumPagActual(),p_selectNumProdMostradosXPaginaValue);

//                 }
//             }else if(l_numPulsadoChar == 'pagina-siguiente'){
//                 if(g_paginadorConsulta.getNumPagActual() < g_paginadorConsulta.getNumTotalPag()){

//                     // actualizamos el valor de pagina actual = una pagina menos a la actual
//                     g_paginadorConsulta.setNumPagActual(g_paginadorConsulta.getNumPagActual() + 1);
        
//                     //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
//                     _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

//                     // muestra la pagina especifica con sus productos
//                     _anyadeProductosAPagina(p_arrayProdFiltrados,p_nodoPadreDondeMuestraResultado,g_paginadorConsulta.getNumPagActual(),p_selectNumProdMostradosXPaginaValue);

//                 }
//             }
//         }
//     });
// }

// muestra los productos de la pagina especificada en el click
// function _muestraPagEspecifica(p_arrayProdAMostrar,p_sectionConsulta,p_numPagActiva){
    

//     //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
//     _removeChildElementsInDom(p_sectionConsulta);
    
//     // anyade los productos filtrados a la section '#container-prod-consulta'
//     _anyadeProductosAPagina(p_arrayProdAMostrar,p_sectionConsulta);
   

//     //colorea pagina actual
//     _coloreaPagActualyNoLasDemas(g_paginadorConsulta.getNodoPadre(), p_numPagActiva);
// }





/* ---------------------------------------------- */
/**********************************************
* -------   ASIDE   -------
* ********************************************/

function _clickNovedades(p_productos,p_nodoPadreDondeMuestraResultado,p_selectNumProdMostradosXPaginaValue){

    g_asideNovedades.addEventListener('click', () => 
    {
        _muestraNovedades(p_productos,p_nodoPadreDondeMuestraResultado,p_selectNumProdMostradosXPaginaValue);
    });
    
}

function _muestraNovedades(p_productos,p_nodoPadreDondeMuestraResultado,p_selectNumProdMostradosXPaginaValue){

    //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
    _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

    // obtiene los 10 ultimos productos anyadidos en el objeto productos del archivo JSON
    let l_numNovedades = 5;
    let l_arrayNovedadesAux = []
    for(let i = l_numNovedades; i > 0 ; i--){
        // guardamos los ultimos 10 elementos
        l_arrayNovedadesAux.push(p_productos[p_productos.length - i]);
    }

    // calcula el numero de paginas total del paginador
    let l_numPagTotal = Math.ceil(l_arrayNovedadesAux.length/p_selectNumProdMostradosXPaginaValue);

    // anyade los productos filtrados a la section '#container-prod-consulta'
    g_paginadorConsulta.anyadeElementosAPagina(l_arrayNovedadesAux,p_nodoPadreDondeMuestraResultado,1,l_numPagTotal,_plantillaElementProdConsulta);
    
    // calcula la cantidad de productos mostrados por pagina en novedades, respecto del total que seria 'l_arrayNovedadesAux.length'
    let l_arrayNovedadesAuxLength = (l_arrayNovedadesAux.length > p_selectNumProdMostradosXPaginaValue) ? p_selectNumProdMostradosXPaginaValue : l_arrayNovedadesAux.length;

    // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
    _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,l_arrayNovedadesAuxLength,l_arrayNovedadesAux.length);

    // EVENTO 'CLICK'SELECT PAGINA A MOSTRAR
    _clickSelectNumProdMostradosXPagina(l_arrayNovedadesAux,p_nodoPadreDondeMuestraResultado);

    // EVENTO 'CLICK' EN EL NUMERO DE PAGINA
    g_paginadorConsulta.clickNumPagina(l_arrayNovedadesAux,g_sectionConsulta,p_selectNumProdMostradosXPaginaValue);

}

function _clickMasVendidos(p_productos,p_nodoPadreDondeMuestraResultado,p_selectNumProdMostradosXPaginaValue){
    g_asideMasVendidos.addEventListener('click', () =>
    {
        _muestraMasVendidos(p_productos,p_nodoPadreDondeMuestraResultado,p_selectNumProdMostradosXPaginaValue);
    });
}

function _muestraMasVendidos(p_productos,p_nodoPadreDondeMuestraResultado,p_selectNumProdMostradosXPaginaValue){

    //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
    _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

    // calcula los 10 productos mas vendidos comparando la propiedad 'ventas' de cada producto del JSON
    let l_arrayMasVendidosAux = [];
    let l_numMasVendidos = 15;
    let l_arrayOrdenVentasDesc = _ordenaVentasDescendentes(p_productos);
    for(let i = 0; i < l_numMasVendidos; i++){
        l_arrayMasVendidosAux.push(l_arrayOrdenVentasDesc[i]);
    }

    // calcula el numero de paginas total del paginador
    let l_numPagTotal = Math.ceil(l_arrayMasVendidosAux.length/p_selectNumProdMostradosXPaginaValue);
    
    // anyade los productos filtrados a la section '#container-prod-consulta'
    g_paginadorConsulta.anyadeElementosAPagina(l_arrayMasVendidosAux,p_nodoPadreDondeMuestraResultado,1,l_numPagTotal,_plantillaElementProdConsulta);


    // calcula la cantidad de productos mostrados por pagina en novedades, respecto del total que seria 'l_arrayMasVendidosAux.length'
    let l_arrayMasVendidosAuxLength = (l_arrayMasVendidosAux.length > p_selectNumProdMostradosXPaginaValue) ? p_selectNumProdMostradosXPaginaValue : l_arrayMasVendidosAux.length;

    // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
    _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,l_arrayMasVendidosAuxLength,l_arrayMasVendidosAux.length);

    // EVENTO 'CLICK' EN EL NUMERO DE PAGINA
    g_paginadorConsulta.clickNumPagina(l_arrayMasVendidosAux,g_sectionConsulta,p_selectNumProdMostradosXPaginaValue);

}




/* ---------------------------------------------- */

/*  PLANTILLAS
************************************* */

// PLANTILLA DE PRODUCTO CONSULTA EN MENU 'PRODUCTOS'
function _plantillaElementProdConsulta(p_prodConsulta){
    let l_plantillaProdConsulta = 
    `
       <!-- PRODUCTO 1 -->
       <article class="col-12 d-flex flex-column flex-md-row align-items-center p-0 bg-grisSecondaryExtraSoft py-2 border-bottom border-secondary">
           <!-- IMAGEN de producto -->
           <div class="col-12 col-md-3 d-flex justify-content-center align-items-center p-2 bg-grisSecondaryExtraSoft">
           <img src="${p_prodConsulta.imagenURL}" alt="${p_prodConsulta.nombre}" class="img-fit roundedPorcentaje-100">
           </div>
           <!-- .IMAGEN de producto -->
           
           <!-- DESCRIPCION producto -->
           <div class="col-12 col-md-9 p-3 d-flex flex-column  bg-grisSecondaryExtraSoft">
           
               <!-- titulo producto -->
               <div class=" p-1 text-wrap" title="${p_prodConsulta.nombre}">
                   <h5 class="" > <a href="#" class="">${p_prodConsulta.nombre}</a> </h5>
               </div>
               <!-- .titulo producto -->

               <!-- descripcion producto -->
               <div class="overflow-hidden shadow-sm bg-white roundedRem-10 p-2">
                   <p class="m-0 h-5rem" title="${p_prodConsulta.descripcionCorta}">${p_prodConsulta.descripcionCorta}</p>
               </div>
               <!-- .descripcion producto -->

               <!-- 3 PRECIO, ANYADIR CARRITO, VER DETALLE -->
               <div class="col-12 d-flex flex-wrap align-items-center p-1 pt-2">
                   <!-- PRECIO -->
                   <div class="col-12 order-0 col-md-4 order-md-1 d-flex justify-content-center align-items-center p-2">
                       <p class="precio-producto font-size-12  border-2px-rojoDanger roundedRem-50 m-0 p-2">${p_prodConsulta.precio.toFixed(2)} €</p>
                   </div>

                   <!-- ANYADIR a CARRITO -->
                   <div id="${p_prodConsulta.codigo}" class="col-6 order-1 d-flex flex-column col-md-4 order-md-0 flex-md-row justify-content-center align-items-center cursor-pointer p-2">
                       <i datos="${c_DATOS_ANYADIRACARRITO}" codigo_producto="${p_prodConsulta.codigo}" class="fas fa-cart-plus font-size-15 font-size-md-20 text-danger p-1"></i>
                       <p datos="${c_DATOS_ANYADIRACARRITO}" codigo_producto="${p_prodConsulta.codigo}" class="text-center text-md-left text-white border-letter-danger m-0 p-1">Añadir a carrito</p>
                   </div>

                   <!-- VER DETALLE PRODUCTO -->
                   <div id="ver-detalle-prod-hover" class="col-6 order-2 d-flex flex-column col-md-4 flex-md-row justify-content-center align-items-center cursor-pointer p-2">
                       <i datos="${c_DATOS_VERDETALLEPRODUCTO}" codigo_producto="${p_prodConsulta.codigo}" class="fas fa-info-circle font-size-15 font-size-md-20 text-warning p-1"></i>
                       <p datos="${c_DATOS_VERDETALLEPRODUCTO}" codigo_producto="${p_prodConsulta.codigo}" class="text-center text-md-left text-white border-letter-warning m-0 p-1">Ver detalle</p>
                   </div>
               </div>
               <!-- .3 PRECIO, ANYADIR CARRITO, VER DETALLE -->

           </div>
           <!-- .DESCRIPCION producto -->

       </article>
       <!-- .PRODUCTO 1 -->
    `;

    return l_plantillaProdConsulta;
}




// PLANTILLA DE PIE CON PAGINAS
function _plantillaElementPiePag(p_numPag){
    let l_plantillaPiePag = 1;
    if(p_numPag == 1){
        l_plantillaPiePag = 
        `
            <a href="#" pagina="${p_numPag}" class="mx-1 activeNumPage">
                ${p_numPag}
            </a>
    
        `;
    }else{
        l_plantillaPiePag = 
        `
            <a href="#" pagina="${p_numPag}" class="mx-1">
                ${p_numPag}
            </a>
    
        `;
    }
   
    return l_plantillaPiePag;


}