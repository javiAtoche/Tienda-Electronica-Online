<!doctype html>
<html lang="es">
  <head>
    
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- icon in tab -->
    <link rel="icon" href="img/desarrolloweb_icono_carrito.png">


    <!-- PREFIX FREE: para que se incluyan los prefijos sin tener que hacerlo a mano -->
    <script src="js/prefixfree.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <!-- -- FontAwesome -- -->
    <!-- <link rel="stylesheet" href="css/all.css"> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <!-- Fonts -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Fugaz+One" rel="stylesheet">  -->
    <!-- -- CSS Personal -- -->
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/consulta.css">

    <!-- title -->
    <title>CONSULTA PRODUCTO</title>

  </head>
  <body>
      
<div id="div-principal" class="">

    <!-- incluye la cabecera, que sera igual en todas las paginas -->
    <?php include_once ("includes/templates/header.php"); ?>
    
    <!-- MAIN -->
    <main>

      <!-- INFO: MOSTRAR RESULT, ORDEN, PAG -->
      <div id="orden-numpag-productos" class="d-flex align-items-center p-3 font-weight-light bg-amarilloRosyHighlight">

        <!-- -- Muestra 'x' productos del 'total' de productos -- -->
        <p class="col-8 font-size-13 m-0">Mostrando <span datos="num-productos-mostrados" class="text-rojoDanger">-</span> de <span datos="num-productos-resultantes" class="text-verdeSuccess">-</span> productos</p>

        <!-- <div class="col-12 d-flex"> -->
          <select name="select-orden-productos" id="select-orden-productos"  class="col-2 ml-auto btn btn-primary rounded-left-circle text-truncate shadow-sm">
            <option value="asc-alph">Orden alfabético ascendente</option>
            <option value="desc-alph">Orden alfabético descendente</option>
            <option value="asc-num">Orden precio ascendente</option>
            <option value="desc-num">Orden precio descendente</option>
            <option value="asc-valorado">Orden peor valorados</option>
            <option value="desc-valorado">Orden mejor valorados</option>
          </select>
          <!-- icono flechita blanca al lado del 'select' -->
          <!-- <i class="fas fa-caret-down position-absolute text-white font-size-15rem"></i> -->
        <!-- </div> -->
        <!-- <div class="col-12 d-flex"> -->
          <select name="select-productos-por-pagina" id="select-productos-por-pagina" class="col-2 ml-1 btn btn-primary rounded-right-circle text-truncate shadow-sm">
            <option selected="selected" value="10">Mostrar 10 productos por página</option>
            <option value="25">Mostrar 25 productos por página</option>
            <option value="100">Mostrar 100 productos por página</option>
          </select>
          <!-- icono flechita blanca al lado del 'select' -->
          <!-- <i class="fas fa-caret-down position-absolute text-white font-size-15rem"></i> -->
        <!-- </div> -->

      </div>


      <!-- ASIDE, SECTION -->
      <div class="d-flex ">
        <!-- ASIDE -->
        <aside class="d-none d-sm-block col-3 border-right-2px-grisSecondary bg-naranjaFirstDate py-3">

          <!-- 1: ASIDE NAVEGACION -->
          <div class="">
            <h4>NO TE LO PIERDAS...</h4>
            <ul class="list-unstyled">
              <li class="ml-3"><a datos="novedades" href="#">Novedades</a></li>
              <li class="ml-3"><a datos="mas-vendidos" href="#">Más Vendidos</a></li>
              <li class="ml-3"><a datos="datos-envio" href="#">Datos de Envío</a></li>
            </ul>
          </div>


          <!-- 2: NOVEDADES -->
          <div class="card shadow-lg">
            <div class="card-header">
              <h5 class="card-title">NOVEDADES</h5>
            </div>
            <div class="card-body">
              <a href="#"><img src="img/productos/producto3.jpg" alt="" class="card-img"></a>
            </div>
            <div class="card-footer">
              <h5 class="card-link"><a href="">Titulo del producto</a></h5>
              <p class="text-rojoDanger">1229.99 €</p>

            </div>
          </div>

        </aside>

        <!-- .ASIDE -->
        
        <!-- SECTION 1:  -->
        <section id="container-prod-consulta" class="col-12 col-sm-9 p-0">

          <!-- -- lista de productos -- -->




        </section><!-- .SECTION 1 -->

      </div><!-- .ASIDE, SECTION -->
      
      <!-- PAGINACION -->
      <div datos="padre-paginador" class="d-flex justify-content-center align-items-center p-3 font-weight-light bg-amarilloRosyHighlight">

        <!-- grupo paginas -->
        <!-- <div class="mw-20rem d-flex justify-content-center align-items-center bg-grisSecondaryExtraSoft border-1px-azulPrimary roundedRem-5 text-truncate p-2"> -->

            <!-- pag Anterior -->
            <!-- <a datos="pagina-anterior" href="#" class="font-size-15 mr-1">
              <i class="fas fa-arrow-alt-circle-left"></i>
            </a> -->

            <!-- num paginas -->
            <!-- <div datos="num-paginas" class="d-flex justify-content-center align-items-center font-size-15 text-truncate"> -->

            <!-- </div> -->
            <!-- .num paginas -->

            <!-- pag Siguiente -->
            <!-- <a datos="pagina-siguiente" href="#" class="font-size-15 ml-1">
              <i class="fas fa-arrow-alt-circle-right"></i>
            </a> -->
        <!-- </div> -->
        <!-- grupo paginas -->



      </div>

    </main><!-- .MAIN -->

    <!-- FOOTER incluido a través de PHP -->
    <?php include_once('includes/templates/footer.php')?>

</div>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/bootstrap/jquery-3.3.1.slim.min.js"></script>
    <script src="js/bootstrap/popper.min.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>

    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script> -->




    <!-- JSON Files -->
    <script src="js/categoriasJSON.json"></script>
    <script src="js/productosJSON.json"></script>

    <!-- -- JS Personal -- -->
    <script src="js/utiles.js"></script>
    <script src="js/comun_pagina.js"></script>
    <script src="js/class/classPaginador.js"></script>
    <script src="js/consulta.js"></script>

  </body>
</html>








