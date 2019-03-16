 <!-- HEADER -->
 <header class="bg-dark p-2 border-bottom border-primary border-w-5">

<!-- ++++++ HEADER ROW 1 ++++++ -->
<!-- logo, busqueda carrito -->
<div class="flex-wrap d-flex justify-content-between align-items-center">

  <!-- 1 -->
  <!-- logo -->
  <div class="order-0 col-6 col-lg-2 d-flex align-items-center py-1">
    <img class="logo img-fit" src="img/logo2.png" alt="logo2.png" title="logo de la empresa">
  </div><!-- .1 -->

  <!-- 2 -->
  <!-- buscador barra search -->
  <div class="order-2 order-lg-1 col-12 col-lg-8 d-flex justify-content-center align-items-center h-3rem position-relative py-1">
    
    <!-- 1 dropdown -->
    <select id="select-categorias" name="categorias"  class="col-3 h-100 btn btn-outline-primary rounded-left-circle text-truncate">
      
    </select>
    <!-- icono flechita blanca al lado del 'select' -->
    <i class="fas fa-caret-down position-absolute text-white font-size-15rem"></i>

    <!-- 2 input -->
    <input id="input-search" type="text" class="col-7 h-100" placeholder="Search here" aria-label="Search" aria-describedby="searching">

    <!-- 3 button search -->
    <button id="button-search-product" type="button" class=" col-2 btn btn-outline-primary rounded-right-circle h-100 text-truncate">
        <!-- texto search -->
      <span class="d-none d-md-block">Search</span>
        <!-- icono search -->
      <i class="d-md-none fas fa-search"></i>
    </button>

  </div><!-- .2 -->

  <!-- 3 -->
  <!-- iconos corazon y carrito -->
  <div class="order-1 order-lg-2 col-6 col-lg-2 d-flex justify-content-end align-items-center text-white py-1">
    <!-- 1 -->
    <a class="d-flex flex-column justify-content-center align-items-center px-2 text-white" href="#">
      <i class="far fa-heart text-danger"></i>
      <p class="m-0 text-center">Your Wish List</p>
    </a>
    <!-- 2 -->
    <a id="carrito-link" class="d-flex flex-column justify-content-center align-items-center px-2 text-white" href="#">
      <i class="fas fa-cart-arrow-down text-danger"></i>
      <p class="m-0 text-center">Your Cart</p>
    </a>

    <!-- CAJA CARRITO -->
    <div id="caja-carrito" class="invisible d-flex flex-column align-items-center bg-light border border-primary rounded p-2">
      <!-- caja fila productos carrito -->
      <div id="caja-productos-carrito" class="w-100 p-2">

        <!-- 
          -- fila i -- 
        -->

      </div><!-- .caja fila productos carrito -->
      <!-- fila 2 -->
      <div class="fila-btn-carrito d-flex justify-content-around">
        <!-- boton ir a carro -->
        <button id="btn-ir-a-carro" class="col-5 btn btn-outline-success mt-3">
            Ir a carrito
        </button><!-- .boton ir a carrito -->
        <!-- boton compra -->
        <button id="btn-comprar-carrito" class="col-5 btn btn-outline-danger mt-3">
            Comprar
        </button><!-- .boton compra -->
      </div><!-- .fila 2 -->

    </div><!-- .CAJA CARRITO -->


  </div><!-- .3 -->

</div><!-- .logo, busqueda carrito -->

<!-- ++++++ HEADER ROW 2 ++++++ -->
<!-- informacion -->
<div id="info-header" class="d-flex mt-2">
    
    <!-- --1-- ICONO INFO -->
    <div id="info-header-div" class="d-flex justify-content-center align-items-center text-white position-relative px-3">
      <i class="fas fa-info-circle text-warning"></i>
      <!-- <p class="d-none m-0 pl-1">Información</p> -->

      <!-- CUADRO INFO OCULTO -->
      <!-- el cuadro flotante con la informacion que se mostrara al pulsar el boton info ** CUADRO INFORMACION **-->
      <div id="info-header-1" class="invisible d-flex flex-column align-items-start position-absolute bg-dark border border-warning rounded border-w-3 p-2">
        <!-- telefono -->
        <a class="col-12 d-flex justify-content-center align-items-baseline px-2 text-nowrap" href="#">
            <i class="col-2 fas fa-phone-volume text-danger"></i>
            <p class="col-10 text-white m-0 pl-1">+34-965558887</p>
        </a>
        <!-- email -->
        <a class="col-12 d-flex justify-content-center align-items-baseline px-2 text-nowrap" href="#">
            <i class="col-2 far fa-envelope text-danger"></i>
            <p class="col-10 text-white m-0 pl-1">ventaelectronica@email.com</p>
        </a>
        <!-- localizacion -->
        <a class="col-12 d-flex justify-content-center align-items-baseline px-2 text-nowrap" href="#">
            <i class="col-2 fas fa-map-marker-alt text-danger"></i>
            <p class="col-10 text-white m-0 pl-1">La Puebla de Cazalla,Sevilla</p>
        </a>
      </div><!-- .CUADRO INFO OCULTO -->

    </div><!-- .ICONO INFO -->
    
    

    <!-- --2-- -->
    <!-- la informacion la pondremos en una caja aparte, asi que guardaremos el espacio de 7 columnas para que los elementos queden  colocados de esa manera -->
    <!-- <div class="col-7 d-flex align-items-center "></div> -->
  
    <!-- --3-- -->
    <div id="info-header-2" class=" d-flex justify-content-end align-items-center ml-auto">
        <!-- moneda -->
        <a class="d-flex justify-content-between align-items-baseline px-2" href="#">
            <i class="fas fa-coins text-danger"></i>
            <p class="text-white m-0 pl-1 text-center">EUR</p>
        </a>
        <!-- usuario -->
        <a class="d-flex justify-content-between align-items-baseline px-2" href="#">
            <i class="fas fa-user text-danger"></i>
            <p class="text-white m-0 pl-1 text-center">My Account</p>
        </a>
    </div>
</div><!-- .informacion -->

</header><!-- .HEADER -->

<!-- NAVEGACION -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">

<!-- brand icon -->
<a class="navbar-brand" href="#"><img class="navbar-brand logo m-0 p-0" src="img/logo2.png" alt="logo2.png" title="logo de la empresa"></a>

<!-- boton de hamburguesa -->
<button class="navbar-toggler ml-auto border-2px-dark" type="button" data-toggle="collapse" data-target="#header-navbar" aria-controls="header-navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button><!-- .boton de hamburguesa -->

<!-- navegacion -->
<div id="header-navbar" class="collapse navbar-collapse">
  <ul class="navbar-nav">
    <li opcion="home" class="nav-item">
      <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
    </li>

    <li opcion="productos" class="nav-item">
      <a class="nav-link" href="consulta.php">Productos</a>
    </li>
  </ul>
</div><!-- .navegacion -->

</nav><!-- .NAVEGACION -->

<?php 
    echo  
      '<script>
        if(window.location.href.includes("index.php")){
          let opcion = document.querySelector("[opcion*=\'home\']");
          opcion.classList.toggle("active");
        }else if(window.location.href.includes("consulta.php")){
          let opcion = document.querySelector("[opcion*=\'productos\']");
          opcion.classList.toggle("active");
        }
      </script>';
?>