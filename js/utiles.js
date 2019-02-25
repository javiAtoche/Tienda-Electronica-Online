//FUNCIONES
/*******************************/
// FUNCION _collapse: oculta/desoculta el elemento pasado por parametro
let _collapse = (elemento) => {
    // anyade o elimina las clases pasadas por parametro
    elemento.classList.toggle("invisible");
}
// FUNCION ANYADIR: funcion anyade el elemento hijo al final del elemento padre
function _addElementInDom(padre,hijo,posicion){
    //anyado al div de la lista de productos cada uno de los productos y para que me reconozca el codigo html que esta entrecomillado en la otra funcion necesitamos usar innerHTML, si no, 'appendChild(hijo)' fallara con el error: "InvalidCharacterError: String contains an invalid character"
    padre.insertAdjacentHTML(posicion, hijo);
}
// FUNCION ELIMINAR UNO: Dado un padre se elimina el nodo hijo dado
function _removeElementInDom(p_padre,p_hijo){
    p_padre.removeChild(p_hijo);
}
// FUNCION ELIMINAR TODOS: Dado un padre se eliminan todos sus nodos hijos
function _removeChildElementsInDom(p_padre){
    
    // while(p_padre.firstChild){
    //     p_padre.removeChild(p_padre.firstChild);
    // }
    p_padre.innerHTML = "";
}


// FUNCION BUSCAR PRODUCTO: funcion que busca un producto por su codigo en el fichero JSON y lo devuelve
function _buscarProductoXCodigo(p_codProd){
    let l_itemFound = null;
    for(let l_item of productos){
        if(l_item.codigo == p_codProd){
            l_itemFound = l_item;
            break;
        }
    }
    return l_itemFound;
}

// FUNCION FILTRA PRODUCTO CATEGORIA: funcion que devuelve los productos de una categoria determinada
function _filtraProductosXCategoria(p_prodConsulta,p_valorSelectCateg, p_valorInputSearch){
    // producto devuelto si cumple las condiciones
    let l_productoFiltrado = null;
   
    if(p_valorInputSearch == "" && p_valorSelectCateg.toLowerCase() == c_NOFILTERCATEG.toLowerCase()){

        l_productoFiltrado = p_prodConsulta;

    }else if(p_prodConsulta.nombre.toLowerCase().includes(p_valorInputSearch)  && p_valorSelectCateg.toLowerCase() == c_NOFILTERCATEG.toLowerCase()){

        l_productoFiltrado = p_prodConsulta;

    }else if(p_prodConsulta.categoria.toLowerCase() == p_valorSelectCateg.toLowerCase() && p_prodConsulta.nombre.toLowerCase().includes(p_valorInputSearch) ){

        l_productoFiltrado = p_prodConsulta;

    }

    return l_productoFiltrado;
}


/*******************/
/****   ORDEN   ****/
/*******************/

function _ordenaVentasDescendentes(p_arrayOrigen){
    
    let l_arrayAuxVentasDesc = p_arrayOrigen.slice();
 
    let elemento1;
    let elemento2;
 
    for(let i = 0; i < l_arrayAuxVentasDesc.length; i++){
        for(let j = 0; j < l_arrayAuxVentasDesc.length-1; j++){
             elemento1 = l_arrayAuxVentasDesc[j];
             elemento2 = l_arrayAuxVentasDesc[j+1];
 
             if(elemento1.ventas < elemento2.ventas){
                 l_arrayAuxVentasDesc[j] = elemento2;
                 l_arrayAuxVentasDesc[j+1] = elemento1;
             }
        }
    }
 
 //    console.log(l_arrayAuxVentasDesc.map((x)=>
 //     {
 //         return `nombre: ${x.nombre}, ventas: ${x.ventas}`;
 //     }));
 
    return l_arrayAuxVentasDesc;
 }


 


/************************/
/****   PIE PAGINA   ****/
/************************/
// Funcion COLOREA numero de pagina activa y DESCOLOREA el resto
function _coloreaPagActualyNoLasDemas(p_nodoPadreNumPaginas, p_numPagActiva){
    for(let l_child of p_nodoPadreNumPaginas.children){
        if(l_child.getAttribute("pagina") == p_numPagActiva){
            l_child.classList.add(this.getCssClassActiveNumPag());
        }else{
            l_child.classList.remove(this.getCssClassActiveNumPag());
        }
    }
}

// Funcion que calcula el tramo del array que queremos visualizar segun la pagina actual en la que estemos
function _calculaArrayTramo(p_array,p_numPagPedida,p_numPagTotal,p_numElemXPag){
    try {
        // variables para el problema
        let l_arrayAuxTramo = [];
        let l_indiceInicio;
        let l_indiceFin;
        // variables auxiliares
        let l_numPagPedidaAux = Number.parseInt(p_numPagPedida);
        let l_numElemXPagAux = Number.parseInt(p_numElemXPag)
        let l_numPagTotalAux = Number.parseInt(p_numPagTotal);

        if(Number.isNaN(l_numPagPedidaAux) || Number.isNaN(l_numElemXPagAux) || Number.isNaN(l_numPagTotalAux)){
            throw ('Error, La(s) variable(s) pasada(s) por parámetro, p_numPagActual o p_numItemsXPag, no es (no son) un número');
        }else{
            if(l_numPagPedidaAux < 1){
                l_indiceInicio = 0;
                l_indiceFin = l_numElemXPagAux-1;
            }else if(l_numPagPedidaAux > l_numPagTotalAux){
                l_indiceInicio = (l_numPagTotalAux*l_numElemXPagAux)-l_numElemXPagAux;
                l_indiceFin = p_array.length-1;
            }else{
                l_indiceInicio = (l_numPagPedidaAux*l_numElemXPagAux)-l_numElemXPagAux;
                l_indiceFin = (l_numPagPedidaAux*l_numElemXPagAux)-1;
            }
            // Actualizamos el valor de la página actual
            // this.setNumPagActual(l_numPagActualAux);

            // Actualiza numero total de paginas a mostrar
            // this.setNumTotalPag(this.getArrayElemTotales().length/this.getElementosXPagina());

            // Trozo de array que cumple el tramo
            l_arrayAuxTramo = p_array.slice(l_indiceInicio,l_indiceFin+1);
            // this.setArrayElemTotales(l_arrayAuxTramo);
            
            return l_arrayAuxTramo;
        }
        

    } catch (error) {
        console.log('TCL: calculaTramo }catch -> error:', error)
    }
}










// <!-- PRODUCTO 1 -->
// <article class="col-12 d-flex flex-column flex-md-row align-items-center p-0 bg-grisSecondaryExtraSoft py-2 border-bottom border-secondary">
// <!-- IMAGEN de producto -->
// <div class="col-12 col-md-3 d-flex justify-content-center align-items-center p-2 bg-grisSecondaryExtraSoft">
// <img src="${p_prodConsulta.imagenURL}" alt="${p_prodConsulta.nombre}" class="img-fit roundedPorcentaje-100">
// </div>
// <!-- .IMAGEN de producto -->

// <!-- DESCRIPCION producto -->
// <div class="col-12 col-md-9 p-3 d-flex flex-column  bg-grisSecondaryExtraSoft">

//     <!-- titulo producto -->
//     <div class=" p-1 text-wrap" title="${p_prodConsulta.nombre}">
//         <h5 class="" > <a href="#" class="">${p_prodConsulta.nombre}</a> </h5>
//     </div>
//     <!-- .titulo producto -->

//     <!-- descripcion producto -->
//     <div class="overflow-hidden shadow-sm bg-white roundedRem-10 p-2">
//         <p class="m-0 h-5rem" title="${p_prodConsulta.descripcionCorta}">${p_prodConsulta.descripcionCorta}</p>
//     </div>
//     <!-- .descripcion producto -->

//     <!-- 3 PRECIO, ANYADIR CARRITO, VER DETALLE -->
//     <div class="col-12 d-flex flex-wrap align-items-center p-1 pt-2">
//         <!-- PRECIO -->
//         <div class="col-12 order-0 col-md-4 order-md-1 d-flex justify-content-center align-items-center p-2">
//             <p class="precio-producto font-size-12  border-2px-rojoDanger roundedRem-50 m-0 p-2">${p_prodConsulta.precio.toFixed(2)} €</p>
//         </div>

//         <!-- ANYADIR a CARRITO -->
//         <div id="${p_prodConsulta.codigo}" class="col-6 order-1 d-flex flex-column col-md-4 order-md-0 flex-md-row justify-content-center align-items-center cursor-pointer p-2">
//             <i datos="${c_DATOS_ANYADIRACARRITO}" codigo_producto="${p_prodConsulta.codigo}" class="fas fa-cart-plus font-size-15 font-size-md-20 text-danger p-1"></i>
//             <p datos="${c_DATOS_ANYADIRACARRITO}" codigo_producto="${p_prodConsulta.codigo}" class="text-center text-md-left text-white border-letter-danger m-0 p-1">Añadir a carrito</p>
//         </div>

//         <!-- VER DETALLE PRODUCTO -->
//         <div id="ver-detalle-prod-hover" class="col-6 order-2 d-flex flex-column col-md-4 flex-md-row justify-content-center align-items-center cursor-pointer p-2">
//             <i datos="${c_DATOS_VERDETALLEPRODUCTO}" codigo_producto="${p_prodConsulta.codigo}" class="fas fa-info-circle font-size-15 font-size-md-20 text-warning p-1"></i>
//             <p datos="${c_DATOS_VERDETALLEPRODUCTO}" codigo_producto="${p_prodConsulta.codigo}" class="text-center text-md-left text-white border-letter-warning m-0 p-1">Ver detalle</p>
//         </div>
//     </div>
//     <!-- .3 PRECIO, ANYADIR CARRITO, VER DETALLE -->

// </div>
// <!-- .DESCRIPCION producto -->

// </article>
// <!-- .PRODUCTO 1 -->