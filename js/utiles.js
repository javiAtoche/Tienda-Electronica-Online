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

/********************/
/***   BUSQUEDA   ***/
/********************/

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


// FUNCION FILTRA NOVEDADES: Funcion que muestra los ultimos X elementos de un array dado
function _muestraNovedades(p_productos,p_cantidadNovedades){
    
    let l_arrayNovedadesAux = []
    for(let i = p_cantidadNovedades; i > 0 ; i--){
        // guardamos los ultimos X elementos
        l_arrayNovedadesAux.push(p_productos[p_productos.length - i]);
    }
    return l_arrayNovedadesAux;
}
// FUNCION FILTRA MAS VENDIDOS: Funcion que muestra los X elementos mas vendidos de un array dado
function _muestraMasVendidos(p_productos,p_cantidadMasVendidos){
    let l_arrayMasVendidosAux = [];
    let l_arrayOrdenVentasDesc = _ordenaVentasDescendentes(p_productos);
    for(let i = 0; i < p_cantidadMasVendidos; i++){
        l_arrayMasVendidosAux.push(l_arrayOrdenVentasDesc[i]);
    }
    return l_arrayMasVendidosAux;
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





/**************************/
/****   VALIDACIONES   ****/
/**************************/

// -- FUNCIONES 'ES' --
function _esNoNull(p_parametro){
    return (p_parametro !== null);
}

function _esNoUndefined(p_parametro){
    return (p_parametro !== undefined);
}

function _esNoNullNoUndefined(p_parametro){
    return (_esNoNull(p_parametro) && _esNoUndefined(p_parametro) );
}

function _esNumero(p_numero){
    return !Number.isNaN(p_numero);
}

function _esNumeroMayorQueCero(p_numero){
    
    return ( _esNumero(p_numero) && (p_numero > 0) );
}

function _esNumeroMayorIgualQue(p_numero,p_numero2){
    
    return ( _esNumero(p_numero) && _esNumero(p_numero2) && (p_numero >= p_numero2) );
}

function _esNumeroEntero(p_numeroEntero){
    return (Number.isInteger(p_numeroEntero));
}

function _esNumeroDecimal(p_numeroDecimal){
    return (!Number.isInteger(p_numeroDecimal));
}

function _esCadena(p_cadena){
    return ( (typeof p_cadena == 'string') || (p_cadena instanceof String) );
}

function _esCadenaNoVacia(p_cadena){
    return (_esCadena(p_cadena) && p_cadena.length > 0);
}

function _esArray(p_array){
    return ( (typeof p_array == "object") || (p_array instanceof Array) );
}

function _esArrayNoVacio(p_array){
    return ( (_esArray(p_array)) && (p_array.length > 0) );
}

function _esPosicionInsertAdjacentHTML(p_posicion){
   return ( p_posicion.includes("beforebegin")  || p_posicion.includes("beforeend") || p_posicion.includes("afterbegin") || p_posicion.includes("afterend") );
}

// -- FUNCIONES 'VALIDA' --

function _validaNoNullNoUndefined(p_parametro){
    try {
        if(_esNoNullNoUndefined(p_parametro)){
            return true;
        }else{
            throw 'El parámetro de entrada es "null" o es "undefined". Parámetro: '+p_parametro;
        }
    } catch (error) {
		console.log('TCL: _validaNoNullNoUndefined }catch -> error:', error);
    }
}

function _validaNumero(p_numero){
    try {
        if(_esNumero(p_numero)){
            return true;
        }else{
            throw 'El parámetro de entrada no es un número. Parámetro: ' + p_numero;
        }
    } catch (error) {
		console.log('TCL: _validaNumero }catch -> error:', error);
    }
}

function _validaNumeroMayorQueCero(p_numero){

    try {
        if( _esNumeroMayorQueCero(p_numero) ){
            return true;
        }else{
            throw 'El parámetro de entrada debe ser un número mayor que cero. parámetro 1: ' + p_numero + ' ,parámetro 2: ' + p_numero2;
        }
    } catch (error) {
		console.log('TCL: _validaNumeroMayorQueCero }catch -> error:', error);
    }
}

function _validaNumeroMayorQue(p_numero, p_numero2){

    try {
        if( _esNumeroMayorIgualQue(p_numero,p_numero2) ){
            return true;
        }else{
            throw 'El parámetro 2: ' + p_numero2 + ' no es mayor que el parámetro 1: ' + p_numero;
        }
    } catch (error) {
		console.log('TCL: _validaNumeroMayorQue }catch -> error:', error);
    }
}

function _validaNumeroEntero(p_numeroEntero){
    try {
        if(_esNumeroEntero(p_numeroEntero)){
            return true;
        }else{
            throw 'El número pasado como parámetro no es un número entero';
        }
    } catch (error) {
		console.log('TCL: _validaNumeroEntero }catch -> error:', error)
    }
}

function _validaNumeroDecimal(p_numeroDecimal){
    try {
        if(_esNumeroDecimal(p_numeroDecimal)){
            return true;
        }else{
            throw 'El número pasado como parámetro no es un número decimal';
        }
    } catch (error) {
		console.log('TCL: _validaNumeroDecimal }catch -> error:', error)
    }
}
function _validaCadena(p_cadena){
    try {
        if(_esCadena(p_cadena)){
            return true;
        }else{
            throw 'El parámetro de entrada no es una cadena. Parámetro: '+ p_cadena;
        }
    } catch (error) {
		console.log('TCL: _validaCadena }catch -> error:', error);
    }
}

function _validaCadenaNoVacia(p_cadena){
    try {
        if(_esCadenaNoVacia(p_cadena)){
            return true;
        }else{
            throw 'El parámetro de entrada no es una cadena o es una cadena vacía. Parámetro: '+ p_cadena;
        }
    } catch (error) {
		console.log('TCL: _validaCadenaNoVacia }catch -> error:', error);
    }
}

function _validaArray(p_array){
    try {
        if(_esArrayNoVacio(p_array)){
            return true;
        }else{
            throw 'El parámetro de entrada no es un array o es un array vacío. Parámetro: '+p_array;
        }
    } catch (error) {
		console.log('TCL: _validaArray }catch -> error:', error);
    }
}

function _validaPosicionInsertAdjacentHTML(p_posicion){
    try {
        if(_esPosicionInsertAdjacentHTML(p_posicion)){
            return true;
        }else{
            throw 'La posicion de inserción pasada como parámetro no es válida, debe ser: "beforebegin", "beforeend", "afterbegin", "afterend". Parámetro: ' + p_posicion;
        }
    } catch (error) {
		console.log('TCL: _validaPosicionInsertAdjacentHTML }catch -> error:', error);
    }
}
