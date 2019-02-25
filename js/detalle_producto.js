//IMPORTS
// import * as indexJS from "index.js";


//CONSTANTES

//VARIABLES DE SECTION 1
let g_section1DetalleProducto = document.querySelector('[datos*="section1-detalle-producto"]');

//VARIABLES DE SECTION 2
let g_section2Comentarios = document.querySelector('[datos*="section2-detalle-producto"]');
let g_cajaComentarios = document.querySelector('[datos*="section2-caja-comentarios"]')
let g_paginadorComentarios;




/*********//* LOAD *//***************/
//EVENTO LOAD: Evento que se ejecuta al cargar la pagina
window.addEventListener('load',() =>{
    // recupero el ID del producto del que quiero ver el detalle
    let l_idCodigo = window.localStorage.getItem(c_CODIGO_PRODUCTO);
    // recupero el PRODUCTO dado su ID
    let l_producto = _buscarProductoXCodigo(l_idCodigo);
    // anyado el producto formateado a la section 1
    _anyadeSection1DetalleProducto(g_section1DetalleProducto,_plantillaElementDetalleProducto(l_producto),c_BEFOREEND);

    //ANYADE PAGINADOR
    g_paginadorComentarios = new Paginador(1,...g_paginadorTipo2);
    g_paginadorComentarios.insertPlantillaPaginasHTML(g_cajaComentarios,c_BEFOREEND);
});



// FUNCION ANYADE LA INFORMACION DEL PRODUCTO A LA SECTION 1
function _anyadeSection1DetalleProducto(p_nodoPadre,p_nodoHijo,p_posicionDeInsercion){

    _addElementInDom(p_nodoPadre,p_nodoHijo,p_posicionDeInsercion);
}

/* ---------------------------------------------- */

/*  PLANTILLAS
************************************* */
function _plantillaElementDetalleProducto(p_producto){
    let l_plantillaDetalleProducto = 
    `
    <!-- imagen del producto -->
    <div class="col-5 h-100">
        <img src="${p_producto.imagenURL}" alt="${p_producto.nombre}" class="img-fit">
    </div>
    <div class="col-7 h-100 align-self-stretch text-grisWizardGrey">
        <!-- titulo producto -->
        <h1 class="titulo-producto1">${p_producto.nombre}</h1>
        <div class="h-80 scroll-y">
            <!-- descripcion corta -->
            <p>
              ${p_producto.descripcionCorta}
            </p>
            <!-- Caracteristicas -->
            <h6 class="w-5 font-size-15 border-bottom-2px-rojoPomeGranate">
                Características:
            </h6>
    `;

    // usa plantilla para la lista de caracteristicas
    l_plantillaDetalleProducto = l_plantillaDetalleProducto.concat( _plantillaLista_detalleProducto(p_producto.descripcionLarga.caracteristicas));
    
    l_plantillaDetalleProducto = l_plantillaDetalleProducto.concat(
        `
        <!-- Especificaciones -->
        
        <h6 class="w-5 font-size-15 border-bottom-2px-rojoPomeGranate">
            Especificaciones:
        </h6>
        `
    );

    // usa plantilla para la lista de especificaciones
    l_plantillaDetalleProducto = l_plantillaDetalleProducto.concat( _plantillaLista_detalleProducto(p_producto.descripcionLarga.especificaciones));
    
    l_plantillaDetalleProducto = l_plantillaDetalleProducto.concat(
        `
            </div>
        </div>
        `
    );

    // console.log(l_plantillaDetalleProducto);
    return l_plantillaDetalleProducto;
}


function _plantillaLista_detalleProducto(p_array){

    let l_plantillaLista = '';

    l_plantillaLista = l_plantillaLista.concat(`<ul>`);

    for(l_element of p_array){
        l_plantillaLista = l_plantillaLista.concat(
            `
            <li>
                <span class="font-weight-bold">
                    ${l_element.titulo}
                </span>
                <ul>
            `
        );
        for(l_elementoDescripcion of l_element.descripcion){
            if(l_elementoDescripcion != ''){
                l_plantillaLista = l_plantillaLista.concat(
                    `
                        <li>${l_elementoDescripcion}</li>
                    `
                );
            }
        }
        l_plantillaLista = l_plantillaLista.concat(
            `
                </ul>
            </li>
            `
        );
    }
    l_plantillaLista = l_plantillaLista.concat(`</ul>`);

    return l_plantillaLista;
}