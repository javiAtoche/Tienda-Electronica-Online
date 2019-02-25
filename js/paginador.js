// VARIABLES RELACIONADAS CON PAGINADOR
// let g_numPagActual = 1;
// let g_numPagTotal = 1;
let g_paginadorTipo1 = _createTipoPaginador("border-1px-azulPrimary","text-azulPrimary", "font-size-15");
let g_paginadorTipo2= _createTipoPaginador("border-1px-azulDeepKoamaru","text-azulDeepKoamaru","font-size-12");

// Funcion que crea tipo de paginadores en materia de color, y tamanyo de fuente
function _createTipoPaginador(...p_array){
    let arrayResul = [];

    for(elem of p_array){
        arrayResul.push(elem);
    }

    return arrayResul;
}



class Paginador{

    /* ------------------ CONSTRUCTOR ------------------ */
    constructor(p_nodoPadrePaginador,p_nodoPadreElementosPaginados,p_arrayTotal,p_numElementosXPag = 1,p_border = "border-1px-azulPrimary",p_textColor = "text-azulPrimary",p_tamanyoFuente = "font-size-15",p_posicionPaginadorEnNodoPadre = "beforeend",p_posicionElementosPaginados="beforeend"){

        // ESTILO
        this.setBorder(p_border);
        this.setTextColor(p_textColor);
        this.setTamanyoFuente(p_tamanyoFuente);


        // NODO PADRE DE PAGINADOR
        this.setNodoPadrePaginador(p_nodoPadrePaginador);
        this.setPosicionEnNodoPadrePaginador(p_posicionPaginadorEnNodoPadre);

        // NODO PADRE ELEMENTOS PAGINADOS
        this.setNodoPadreElementosPaginados(p_nodoPadreElementosPaginados);
        this.setPosicionEnNodoPadreElementosPaginados(p_posicionElementosPaginados);

        //PAGINAS
        // -- paginas totales --
        this.setNumPagTotales(Math.ceil(p_arrayTotal.length/p_numElementosXPag));
        // -- pagina actual --
        this.setNumPagActual(1);

        // NUMERO DE ELEMENTOS POR PAGINA
        this.setNumElementosXPagina(p_numElementosXPag);

        // ARRAY
        this.setArrayTotal(p_arrayTotal);
        // this.setArrayTramo(p_arrayTotal,p_numElementosXPag,1);

        // EVENTO 'CLICK' PIE PAGINA
        this.clickNumPagina();

    }

    /* ------------------ GETTERS AND SETTERS ------------------ */
    //GET CLASE CSS PARA PAGINA ACTUAL
    getCssClassActiveNumPag(){
        return "activeNumPage";
    }

    //GET y SET  BORDE
    getBorder(){
        return this.l_border;
    }
    setBorder(p_border){
        try {
            if(p_border == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else if( ((typeof p_border) != 'string') || (!p_border instanceof  String)){
                throw ('La variable pasada por parámetro debe ser un string');
            }else{
                this.l_border = p_border;

                //comprueba metodo get
                // if( (this.getNumPagActual() && this.getNumPagTotales()) != null ){
                    // actualiza la plantilla HTML del paginador
                    this.privateUpdatePlantillaPaginadorHTML(this.getNumPagActual(),this.getNumPagTotales());
                // }

                // dibuja los elementos y el paginador
                this.dibuja();

            }
            
        } catch (error) {
			console.log('TCL: setBorder }catch -> error:', error)
            
        }
        
    }

    //GET y SET  TEXT COLOR
    getTextColor(){
        return this.l_textColor;
    }
    setTextColor(p_textColor){
        try {
            if(p_textColor == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else if( (typeof p_textColor != 'string') || (!p_textColor instanceof String) ){
                throw ('La variable pasada por parámetro debe ser un string');
            }else{
                this.l_textColor = p_textColor;
                // actualiza la plantilla HTML del paginador
                this.privateUpdatePlantillaPaginadorHTML(this.getNumPagActual(),this.getNumPagTotales());

                // dibuja los elementos y el paginador
                this.dibuja();
            }
        } catch (error) {
			console.log('TCL: setTextColor }catch -> error:', error)
            
        }
    }

    //GET y SET TAMANYO DE FUENTE
    getTamanyoFuente(){
        return this.l_tamanyoFuente;
    }
    setTamanyoFuente(p_tamanyoFuente){
        try {
            if(p_tamanyoFuente == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else if( (typeof p_tamanyoFuente != 'string') || (!p_tamanyoFuente instanceof String) ){
                throw ('La variable pasada por parámetro debe ser un string');
            }else{
                this.l_tamanyoFuente = p_tamanyoFuente;
                //comprueba metodo get
                // if( (this.getNumPagActual() && this.getNumPagTotales()) != null ){
                    // actualiza la plantilla HTML del paginador
                    this.privateUpdatePlantillaPaginadorHTML(this.getNumPagActual(),this.getNumPagTotales());
                // }

                // dibuja los elementos y el paginador
                this.dibuja();
            }
        } catch (error) {
			console.log('TCL: setTamanyoFuente }catch -> error:', error)
            
        }
    }

    //GET y SET NODO PADRE DE PAGINADOR
    getNodoPadrePaginador(){
        return this.l_nodoPadre;
    }
    setNodoPadrePaginador(p_nodoPadre){
        try {
            if(p_nodoPadre == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else{
                this.l_nodoPadre = p_nodoPadre;

                // dibuja los elementos y el paginador
                this.dibuja();
            }
        } catch (error) {
			console.log('TCL: setNodoPadrePaginador }catch -> error:', error)
            
        }
    }

    //GET y SET  POSICION EN EL NODO PADRE PAGINADOR
    getPosicionEnNodoPadrePaginador(){
        return this.l_posicionEnNodoPadrePaginador;
    }
    setPosicionEnNodoPadrePaginador(p_posicionEnNodoPadrePaginador){
        try {
            if(p_posicionEnNodoPadrePaginador == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else if( (typeof p_posicionEnNodoPadrePaginador != 'string') || (!p_posicionEnNodoPadrePaginador instanceof String) ){
                throw ('La variable pasada por parámetro debe ser un string');
            }else if(!p_posicionEnNodoPadrePaginador.includes("beforebegin")  && !p_posicionEnNodoPadrePaginador.includes("beforeend") && !p_posicionEnNodoPadrePaginador.includes("afterbegin") && !p_posicionEnNodoPadrePaginador.includes("afterend")){
                throw ('La variable pasada por parámetro debe ser alguno de los siguientes valores: ("beforebegin","beforeend","afterbegin","afterend")');
            }else{
                this.l_posicionEnNodoPadrePaginador = p_posicionEnNodoPadrePaginador;

                // dibuja los elementos y el paginador
                this.dibuja();
            }
        } catch (error) {
            console.log('TCL: setPosicionEnNodoPadrePaginador }catch -> error:', error);
        }
    }

    //GET y SET NODO PADRE DE ELEMENTOS PAGINADOS
    getNodoPadreElementosPaginados(){
        return this.l_nodoPadreElementosPaginados;
    }
    setNodoPadreElementosPaginados(p_nodoPadreElementosPaginados){
        try {
            if(p_nodoPadreElementosPaginados == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else{
                this.l_nodoPadreElementosPaginados = p_nodoPadreElementosPaginados;
                
                // dibuja los elementos y el paginador
                this.dibuja();
            }
        } catch (error) {
			console.log('TCL: setNodoPadreElementosPaginados }catch -> error:', error)
            
        }
    }

    //GET y SET  POSICION EN EL NODO PADRE DE ELEMENTOS PAGINADOS
    getPosicionEnNodoPadreElementosPaginados(){
        return this.l_posicionEnNodoPadreElementosPaginados;
    }
    setPosicionEnNodoPadreElementosPaginados(p_posicionEnNodoPadreElementosPaginados){
        try {
            if(p_posicionEnNodoPadreElementosPaginados == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else if( (typeof p_posicionEnNodoPadreElementosPaginados != 'string') || (!p_posicionEnNodoPadreElementosPaginados instanceof String) ){
                throw ('La variable pasada por parámetro debe ser un string');
            }else if(!p_posicionEnNodoPadreElementosPaginados.includes("beforebegin")  && !p_posicionEnNodoPadreElementosPaginados.includes("beforeend") && !p_posicionEnNodoPadreElementosPaginados.includes("afterbegin") && !p_posicionEnNodoPadreElementosPaginados.includes("afterend")){
                throw ('La variable pasada por parámetro debe ser alguno de los siguientes valores: ("beforebegin","beforeend","afterbegin","afterend")');
            }else{
                this.l_posicionEnNodoPadreElementosPaginados = p_posicionEnNodoPadreElementosPaginados;

                // dibuja los elementos y el paginador
                this.dibuja();
            }
        } catch (error) {
            console.log('TCL: setPosicionPaginadorEnNodoPadre }catch -> error:', error);
        }
    }

    //GET y SET NUMERO DE PAGINA ACTUAL
    getNumPagActual(){
        return this.l_paginaActual;
    }
    setNumPagActual(p_paginaActual){
        try {
            if(p_paginaActual === (null || undefined)){
                throw ('Error, La variable pasada por parámetro, p_paginaActual, no puede ser "null" ni "undefined"');
            }else{
                let l_aux = Number.parseInt(p_paginaActual);
                if(Number.isNaN(l_aux)){
                    throw ('Error, La variable pasada por parámetro, p_paginaActual, debe ser un string');
                }else{
                    // asigna el nuevo valor de pagina actual
                    this.l_paginaActual = l_aux;
                    //comprueba metodo get
                    // if( (this.getNumPagTotales()) != null ){
                        // actualiza la plantilla HTML del paginador
                        this.privateUpdatePlantillaPaginadorHTML(l_aux,this.getNumPagTotales());
                    // }
                    // if( (this.getArrayTotal() && this.getNumPagActual() && this.getNumElementosXPagina() ) != null){
                        this.setArrayTramo(this.getArrayTotal(),this.getNumElementosXPagina(),this.getNumPagActual());
                    // }else{
                    //     throw 'El array total, el número de página actual y el número de elementos por página no pueden ser "undefined" o "null"';
                    // }

                    // dibuja los elementos y el paginador
                    this.dibuja();
                }
            }
        } catch (error) {
			console.log('TCL: setNumPagActual -> }catch -> error:', error);
        }
    }

    //GET y SET  NUMERO DE PAGINAS TOTALES
    getNumPagTotales(){
        return this.l_numPagTotales;
    }
    setNumPagTotales(p_numTotalPag){
        try {
            if(p_numTotalPag == null){
                throw ('La variable pasada por parámetro no puede ser "null" ni "undefined"');
            }else{
                let l_aux = Number.parseInt(p_numTotalPag);
                if(Number.isNaN(l_aux)){
                    throw ('La variable pasada por parámetro debe ser un número válido');
                }else{
                    // actualiza el valor del numero de paginas totales del paginador
                    this.l_numPagTotales = l_aux;
                    //comprueba metodo get
                    // if( (this.getNumPagActual()) != null ){
                        // actualiza la plantilla HTML del paginador
                        this.privateUpdatePlantillaPaginadorHTML(this.getNumPagActual(),l_aux);
                    // }

                    // dibuja los elementos y el paginador
                    this.dibuja();
                }
            }
        } catch (error) {
			console.log('TCL: setNumTotalPag -> }catch -> error:', error);
        }
    }

    // GET y SET NUMERO DE ELEMENTOS POR PAGINA
    getNumElementosXPagina(){
        return this.l_numElementosXPag;
    }
    setNumElementosXPagina(p_numElementosXPag){
        try {
            if( (p_numElementosXPag) == null){
                throw 'El argumento no puede ser "undefined" o "null"';
            }else{
                let l_numElementosXPagAux = Number.parseInt(p_numElementosXPag);
                if(Number.isNaN(l_numElementosXPagAux)){
                    throw 'El argumento pasado por parámetro debe ser un número';
                }
                else if(l_numElementosXPagAux < 1){
                    throw 'El argumento pasado por parámetro no puede ser menor a 1';
                }else{
                    this.l_numElementosXPag = l_numElementosXPagAux;

                    // Actualiza pagina actual
                    this.setNumPagActual(1);
                    //comprueba metodo get
                    if( (this.getArrayTotal()) != null ){
                        // actualizamos el numero de paginas totales que depende de la longitud del array y del numero de elementos por pagina
                        this.setNumPagTotales(Math.ceil(this.getArrayTotal().length/this.getNumElementosXPagina()));
                    }
                    // if( (this.getArrayTotal() && this.getNumPagActual() && this.getNumElementosXPagina() ) != null){
                        this.setArrayTramo(this.getArrayTotal(),this.getNumElementosXPagina(),this.getNumPagActual());
                    // }else{
                    //     throw 'El array total, el número de página actual y el número de elementos por página no pueden ser "undefined" o "null"';
                    // }

                    // dibuja los elementos y el paginador
                    this.dibuja();
                }
            }
        } catch (error) {
			console.log('TCL: setNumElementosXPagina -> }catch -> error:', error);
        }
    }

    // GET y SET ARRAY TOTAL
    getArrayTotal(){
        return this.l_arrayTotal;
    }
    setArrayTotal(p_arrayTotal){
        try {
            if( (p_arrayTotal) == null){
                throw 'El argumento no puede ser "undefined" o "null"';
            }else if(p_arrayTotal.length == 0){
                throw 'El array pasado como argumento no puede ser vacío';
            }else{
                this.l_arrayTotal = p_arrayTotal;
                //comprueba metodo get
                if( (this.getNumElementosXPagina()) != null ){
                    // actualizamos el numero de paginas totales que depende de la longitud del array y del numero de elementos por pagina
                    this.setNumPagTotales(Math.ceil(p_arrayTotal.length/this.getNumElementosXPagina()));
                }
                // if( (this.getArrayTotal() && this.getNumPagActual() && this.getNumElementosXPagina() ) != null){
                    this.setArrayTramo(this.getArrayTotal(),this.getNumElementosXPagina(),this.getNumPagActual());
                // }else{
                //     throw 'El array total, el número de página actual y el número de elementos por página no pueden ser "undefined" o "null"';
                // }

                // dibuja los elementos y el paginador
                this.dibuja();
            }
        } catch (error) {
			console.log('TCL: setArrayTotal -> }catch -> error:', error);
        }
    }

    // GET y SET ARRAY TOTAL
    getArrayTramo(){
        return this.l_arrayTramo;
    }
    setArrayTramo(p_arrayTotal,p_numElementosXPag,p_numPagSolicitada){

        if( (p_arrayTotal && p_numElementosXPag && p_numPagSolicitada ) != null){
            try {
                if( (p_arrayTotal || p_numElementosXPag || p_numPagSolicitada) == null){
                    throw 'El (Los) argumento(s) no puede(n) ser "undefined" o "null"';
                }else{
                    let l_numPagSolicitadaAux = Number.parseInt(p_numPagSolicitada);
                    let l_numElementosXPagAux = Number.parseInt(p_numElementosXPag);
                    if(p_arrayTotal.length == 0){
                        throw 'El array pasado como argumento no puede ser vacío';
                    }else if(Number.isNaN(l_numPagSolicitadaAux)){
                        throw 'El número de página seleccionada pasada como argumento debe ser un número';
                    }else if(Number.isNaN(l_numElementosXPagAux)){
                        throw 'El número elementos por página pasado como argumento debe ser un número';
                    }else if(l_numPagSolicitadaAux < 1){
                        throw 'El número de página solicitada pasado por parámetro no puede ser menor a 1';
                    }else if(l_numElementosXPagAux < 1){
                        throw 'El número de elementos por página pasado por parámetro no puede ser menor a 1';
                    }else if( (this.getNumPagTotales()) == null ){
                        throw 'El número de paginas totales del paginador no puede ser "undefined" o "null"';
                    }else if(l_numPagSolicitadaAux > this.getNumPagTotales() || l_numPagSolicitadaAux < 1){
                        throw 'El número de página solicitada pasada por parámetro no puede ser mayor que el total de paginas ni menor a 1';
                    }else{
                        this.l_arrayTramo = this.privateCalculaArrayTramo(p_arrayTotal,l_numElementosXPagAux,l_numPagSolicitadaAux);
                    }
    
                    // dibuja los elementos y el paginador
                    this.dibuja();
                }
            } catch (error) {
                console.log('TCL: setArrayTramo -> }catch -> error:', error);
            }
        }
    }

    //GET PLANTILLA HTML DEL PAGINADOR
    getPlantillaPaginadorHTML(){
        return this.l_plantillaPaginadorHTML;
    }

    /* ------------------ METODOS UTILES ------------------ */

    // METODO PRIVADO: ACTUALIZA la propiedad "l_plantillaPaginadorHTML" con el numero de paginas totales y numero de pagina actual pasadas por parametro
    privateUpdatePlantillaPaginadorHTML(p_numPagActual,p_numPagTotal){
        if( (p_numPagActual && p_numPagTotal) != null ){
            try {
                if((p_numPagActual || p_numPagTotal) == null){
                    throw ('La(s) variable(s) pasada(s) por parámetro no puede(n) ser "null" ni "undefined"');
                }else if( Number.isNaN(Number.parseInt(p_numPagActual)) || Number.isNaN(Number.parseInt(p_numPagTotal)) ){
                    throw ('La(s) variable(s) pasada(s) por parámetro debe(n) ser númericas');
                }else{

                    // variable auxiliar que guarda el numero de pagina actual convertida a entero
                    let l_numPagActualAux = Number.parseInt(p_numPagActual);
                    // variable auxiliar que guarda el numero de paginas totales convertida a entero
                    let l_numPagTotalesAux = Number.parseInt(p_numPagTotal);

                    // crea la plantilla del paginador HTML
                    this.l_plantillaPaginadorHTML = this.privateCreatePlantillaPaginadorHTML(l_numPagActualAux,l_numPagTotalesAux);
                    
                }
            } catch (error) {
                console.log('TCL: privateUpdatePlantillaPaginadorHTML }catch -> error:', error)
                
            }
        }
    }

    // METODO PRIVADO: Funcion que obtiene la plantilla HTML con varias paginas y el contenedor de la pagina
    privateCreatePlantillaPaginadorHTML(p_numPagActual,p_numPagTotal){

        let l_plantillaPagina =
        `
        <!-- grupo paginas -->
        <div datos="caja-paginas" class="mw-20rem d-flex justify-content-center align-items-center bg-grisSecondaryExtraSoft ${this.getBorder()} roundedRem-5 text-truncate p-2">

            <!-- pag Anterior -->
            <a href='javascript:void(0)' pagina='pagina-anterior' class='${this.getTextColor()} ${this.getTamanyoFuente()} mr-1'>
              <i class='fas fa-arrow-alt-circle-left'></i>
            </a>
        `
        ;
       
        for(let i = 1; i <= p_numPagTotal;i++){
            if(i == p_numPagActual){
                l_plantillaPagina += 
                `
                    <a href='javascript:void(0)' pagina='${i}' class='mx-1 ${this.getTamanyoFuente()} ${this.getTextColor()} ${this.getCssClassActiveNumPag()}'>
                        ${i}
                    </a>
                `;
            }else{
                l_plantillaPagina += 
                `
                    <a href='javascript:void(0)' pagina='${i}' class='mx-1 ${this.getTamanyoFuente()} ${this.getTextColor()} '>
                        ${i}
                    </a>
                `;
            }
        }

        l_plantillaPagina+= 
        `
            <!-- pag Siguiente -->
            <a href='javascript:void(0)' pagina='pagina-siguiente' class='${this.getTextColor()} ${this.getTamanyoFuente()} ml-1'>
              <i class='fas fa-arrow-alt-circle-right'></i>
            </a>
        </div>
        `;

        // console.log(l_plantillaPaginador);
        return (l_plantillaPagina);

    }

    // EVENTO 'CLICK' EN EL NUMERO DE PAGINA
    clickNumPagina(){

        // click en paginas 1..2..3..
        this.getNodoPadrePaginador().addEventListener('click',(p_evento) =>
        {
            // let l_numPagTotal = Math.ceil(p_arrayProdFiltrados.length/p_selectNumProdMostradosXPaginaValue);
            let l_numPulsadoChar = p_evento.target.getAttribute("pagina");
            let l_numPulsado = Number.parseInt(l_numPulsadoChar);
            if(p_evento.target.nodeName == "A"){

                if(!Number.isNaN(l_numPulsado)){
    
                    // // limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
                    // _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

                    // actualizamos el valor de pagina actual con el valor de la pagina pulsada
                    this.setNumPagActual(l_numPulsado);

                    // calcula el array tramo a mostrar en la pagina indidicada
                    // let l_arrayTramo = this.privateCalculaArrayTramo();

                    // muestra la pagina especifica con sus productos
                    // this.privateAnyadeElementosAPagina(l_arrayTramo);

                    // dibuja los elementos y el paginador
                    this.dibuja();

                    

                    // // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
                    // _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,l_arrayTramo.length,p_arrayProdFiltrados.length);

                }
                
            }else if(p_evento.target.nodeName == "I"){
                l_numPulsadoChar = p_evento.target.parentNode.getAttribute("pagina");
                if(l_numPulsadoChar == 'pagina-anterior'){
                    // Si nos encontramos en una pagina mayor a la 1
                    if(this.getNumPagActual() > 1){

                        // //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
                        // _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);
                        
                        // actualizamos el valor de pagina actual a una pagina menos a la actual
                        this.setNumPagActual(this.getNumPagActual()-1);

                        // calcula el array tramo a mostrar en la pagina indidicada
                        // let l_arrayTramo = this.privateCalculaArrayTramo();

                        // muestra la pagina especifica con sus productos
                        // this.privateAnyadeElementosAPagina(l_arrayTramo);

                        // dibuja los elementos y el paginador
                        this.dibuja();

                        // // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
                        // _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,l_arrayTramo.length,p_arrayProdFiltrados.length);

                    }
                }else if(l_numPulsadoChar == 'pagina-siguiente'){
                    if(this.getNumPagActual() < this.getNumPagTotales()){

                        // actualizamos el valor de pagina actual a una pagina mas a la actual
                        this.setNumPagActual(this.getNumPagActual() + 1);
            
                        // //limpiamos la pagina antes de mostrar el resultado, si no, se acumularan los productos de otras busquedas
                        // _removeChildElementsInDom(p_nodoPadreDondeMuestraResultado);

                        // calcula el array tramo a mostrar en la pagina indidicada
                        // let l_arrayTramo = this.privateCalculaArrayTramo();

                        // muestra la pagina especifica con sus productos
                        // this.privateAnyadeElementosAPagina(l_arrayTramo);
                        
                        // dibuja los elementos y el paginador
                        this.dibuja();

                        // // refresca la informacion del numero de productos mostrado por pagina y del total de productos mostrados que han pasado el filtro
                        // _muestraNumProductosMostradosDelTotal(g_spanNumProdMostrados,g_spanNumProdResultantes,l_arrayTramo.length,p_arrayProdFiltrados.length);

                    }
                }
            }
        });
    }


    // METODO PRIVADO: Funcion que calcula y devuelve el tramo de array seleccionado
    privateCalculaArrayTramo(p_arrayTotal,p_numElementosXPag,p_numPagSolicitada){
        try {
    
            if( (p_arrayTotal || p_numElementosXPag || p_numPagSolicitada) == null){
                throw 'El (Los) argumento(s) no puede(n) ser "undefined" o "null"';
            }else{
                // variables para el problema
                let l_arrayAuxTramo = [];
                let l_indiceInicio;
                let l_indiceFin;
                // variables auxiliares
                let l_numElementosXPagAux = Number.parseInt(p_numElementosXPag);
                let l_numPagSolicitadaAux = Number.parseInt(p_numPagSolicitada);
                let l_numPagTotalesAux;

                if(p_arrayTotal.length == 0){
                    throw ('El array pasado por parámetro no puede ser vacío');
                }else if(Number.isNaN(l_numElementosXPagAux)){
                    throw ('El número de elementos por página pasado por parámetro no es un número');
                }else if(Number.isNaN(l_numPagSolicitadaAux)){
                    throw ('El número de elementos por página pasado por parámetro no es un número');
                }else{
                    // numero paginas totales
                    l_numPagTotalesAux = Math.ceil(p_arrayTotal.length/l_numElementosXPagAux);

                    if(l_numPagSolicitadaAux < 1){
                        l_indiceInicio = 0;
                        l_indiceFin = l_numElementosXPagAux-1;
                    }else if(l_numPagSolicitadaAux >= l_numPagTotalesAux){
                        l_indiceInicio = (l_numPagTotalesAux*l_numElementosXPagAux)-l_numElementosXPagAux;
                        l_indiceFin = p_arrayTotal.length-1;
                    }else{
                        l_indiceInicio = (l_numPagSolicitadaAux*l_numElementosXPagAux)-l_numElementosXPagAux;
                        l_indiceFin = (l_numPagSolicitadaAux*l_numElementosXPagAux)-1;
                    }
                    // Actualizamos el valor de la página actual
                    // this.setNumPagActual(l_numPagActualAux);
        
                    // Actualiza numero total de paginas a mostrar
                    // this.setNumTotalPag(this.getArrayElemTotales().length/this.getElementosXPagina());
        
                    // Trozo de array que cumple el tramo
                    l_arrayAuxTramo = p_arrayTotal.slice(l_indiceInicio,l_indiceFin+1);
                    // this.setArrayElemTotales(l_arrayAuxTramo);
                    
                    return l_arrayAuxTramo;
                }
            }
            
            
    
        } catch (error) {
            console.log('TCL: privateCalculaArrayTramo }catch -> error:', error)
        }
    }
    

    // Dibuja los elementos y el paginador
    dibuja(){

        if( (this.getNodoPadreElementosPaginados() && this.getNodoPadrePaginador() && this.getArrayTramo() && this.getPosicionEnNodoPadreElementosPaginados() && this.getPlantillaPaginadorHTML() && this.getPosicionEnNodoPadrePaginador()) != null){

            // vacia el espacio donde van los productos
            _removeChildElementsInDom(this.getNodoPadreElementosPaginados());
            // vacia el espacio donde se encuentra el paginador
            _removeChildElementsInDom(this.getNodoPadrePaginador());

            // anyade los elementos a la pagina de elementos
            for(let l_item of this.getArrayTramo()){
                if(l_item != null){
                    _addElementInDom(this.getNodoPadreElementosPaginados(),_plantillaElementProdConsulta(l_item),this.getPosicionEnNodoPadreElementosPaginados());
                }
            }

            // anyade los numeros de paginas al paginador
            _addElementInDom(this.getNodoPadrePaginador(),this.getPlantillaPaginadorHTML(),this.getPosicionEnNodoPadrePaginador());
        }
    }


    // funcion toSTRING
    toString(){
        // console.log('TCL: Paginador -> toString -> l_paginaActual', this.getNumPagActual());
        // console.log('TCL: Paginador -> toString -> l_numPagTotales', this.getNumTotalPag());
        // console.log('TCL: Paginador -> toString -> l_border', this.getBorder());
        // console.log('TCL: Paginador -> toString -> l_textColor', this.getTextColor());
		// console.log('TCL: Paginador -> toString -> l_tamanyoFuente', this.getTamanyoFuente());
    }


    // //GET y SET l_arrayElemTotales
    // getArrayElemTotales(){
    //     return this.l_arrayElemTotales;
    // }

    // setArrayElemTotales(p_arrayIn){

    //     try {
            
    //         if(p_arrayIn.length == 0){
    //             throw ('Error, La variable pasada por parámetro, p_arrayIn, no puede ser vacía');
    //         }else{
    //             // this.l_arrayElemTotales = p_arrayIn.slice();
    //             this.l_arrayElemTotales = p_arrayIn;


    //             // Actualiza numero total de paginas
    //             this.setNumPagTotal(Math.ceil(l_arrayElemTotales.length/this.getElementosXPagina()));
    //         }
    //     } catch (error) {
	// 		console.log('TCL: setIndiceInicioPag -> }catch -> error:', error)
    //     }
    // }

    // //GET y SET l_elementosXPagina
    // getElementosXPagina(){
    //     return this.l_elementosXPagina;
    // }

    // setElementosXPagina(p_numElementosXPagina){
    //     try {
            
    //         let l_numEle = Number.parseInt(p_numElementosXPagina);
    //         if(Number.isNaN(l_numEle)){
    //             throw ('Error, La variable pasada por parámetro, p_numElementosXPagina, no es un número');
    //         }else{
    //             this.l_elementosXPagina = l_numEle;
    //         }
    //     } catch (error) {
	// 		console.log('TCL: setElementosXPagina -> }catch -> error:', error)
    //     }
    // }

    // //GET y SET l_indiceInicioPag
    // getIndiceInicioPag(){
    //     return this.l_indiceInicioPag;
    // }

    // setIndiceInicioPag(p_indiceInicio){

    //     try {
    //         let l_indiceNum = Number.parseInt(p_indiceInicio);
    //         if(Number.isNaN(l_indiceNum)){
    //             throw ('Error, La variable pasada por parámetro, p_indiceInicio, no es un número');
    //         }else{
    //             this.l_indiceInicioPag = l_indiceNum;
    //         }
    //     } catch (error) {
	// 		console.log('TCL: setIndiceInicioPag -> }catch -> error:', error)
    //     }
    // }

    // //GET y SET l_indiceFinPag
    // getIndiceFinPag(){
    //     return this.l_indiceFinPag;
    // }

    // setIndiceFinPag(p_indiceFin){

    //     try {
    //         let l_indiceNum = Number.parseInt(p_indiceFin);
    //         if(Number.isNaN(l_indiceNum)){
    //             throw ('Error, La variable pasada por parámetro, p_indiceFin, no es un número');
    //         }else{
    //             this.l_indiceFinPag = l_indiceNum;
    //         }
    //     } catch (error) {
	// 		console.log('TCL: setIndiceFinPag -> }catch -> error:', error)
    //     }
    // }


    // // Funcion ACTUALIZA paginador
    // redibujaPaginador(p_numPagTotal=1,p_numPagActual=1){
    //     _removeChildElementsInDom(this.getNodoPadre());
    //     this.updatePlantillaPaginadorHTML(p_numPagTotal,p_numPagActual);
    //     _addElementInDom(this.getNodoPadre(),this.getPlantillaPaginadorHTML(),this.getPosicionEnNodoPadre());
    //     // Actualiza pagina actual y colorea el numero de pagina
    //     // this.setNumPagActual(p_numPagActual);
    // }


    // // Funcion ACTUALIZA paginador
    // redibujaPaginador(){
    //     _removeChildElementsInDom(this.getNodoPadrePaginador());
    //     // this.updatePlantillaPaginadorHTML(p_numPagTotal,p_numPagActual);
    //     _addElementInDom(this.getNodoPadrePaginador(),this.getPlantillaPaginadorHTML(),this.getPosicionEnNodoPadrePaginador());
    //     // Actualiza pagina actual y colorea el numero de pagina
    //     // this.setNumPagActual(p_numPagActual);
    // }


    // // FUNCION ANYADE PRODUCTOS A UNA PAGINA CONCRETA
    // privateAnyadeElementosAPagina(p_arrayTramoADibujar){

    //     // calcula numero de paginas total segun el array de busqueda filtrado y el numero de productos mostrados por pagina
    //     // let l_numPagTotal = Math.ceil(p_arrayProdFiltrados.length/p_selectNumProdMostradosXPaginaValue);

    //     // calcula y devuelve el array con el tramo a mostrar en la pagina
    //     // let l_arrayProdXPag = this.calculaArrayTramo(p_arrayParaPaginaDeterminada,p_numPagSeleccionada,this.getNumTotalPag(),p_selectNumProdMostradosXPaginaValue);

    //     for(let l_item of p_arrayTramoADibujar){
    //         if(l_item != null){
    //             // _addElementInDom(p_nodoPadre,_plantillaElementProdConsulta(l_p),c_BEFOREEND);
    //             _addElementInDom(this.getNodoPadreElementosPaginados(),_plantillaElementProdConsulta(l_item),this.getPosicionEnNodoPadreElementosPaginados());
    //         }
    //     }

    //     //PIE PAGINA
    //     // recalcula numero total paginas para redibujarPaginador
    //     // this.redibujaPaginador();
        
    //     // EVENTO 'CLICK' EN EL NUMERO DE PAGINA
    //     // this.clickNumPagina(p_arrayParaPaginaDeterminada,p_nodoPadre,p_selectNumProdMostradosXPaginaValue);

        
    // }







}



