<!doctype html>
<html lang="es">
  <head>
    
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- icon in tab -->
    <link rel="icon" href="img/desarrolloweb_icono_carrito.ico">


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

    <!-- title -->
    <title>JS4_E-COMMERCE</title>

  </head>
  <body>
      
<div id="div-principal" class="">

  <!-- incluye la cabecera, que sera igual en todas las paginas -->
   <?php include_once ("includes/templates/header.php"); ?>

    <!-- MAIN -->
    <main>
      
      <!-- SECTION 1: CAROUSEL -->
      <section id="section-1">

        <!-- CAROUSEL -->
        <div id="carousel-section-1" class="carousel slide d-none d-lg-block" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel-section-1" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-section-1" data-slide-to="1"></li>
              <li data-target="#carousel-section-1" data-slide-to="2"></li>
              <li data-target="#carousel-section-1" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <!-- 1 -->
              <div class="carousel-item active">
                <img class="d-block w-100" src="img/carousel/carousel1.jpeg" alt="First slide">
              </div>
              <!-- 2 -->
              <div class="carousel-item">
                <img class="d-block w-100" src="img/carousel/carousel2.jpeg" alt="Second slide">
              </div>
              <!-- 3 -->
              <div class="carousel-item">
                <img class="d-block w-100" src="img/carousel/carousel3.jpeg" alt="Third slide">
              </div>
              <!-- 4 -->
              <div class="carousel-item">
                <img class="d-block w-100" src="img/carousel/carousel4.jpg" alt="Fourth slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carousel-section-1" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-section-1" role="button" data-slide="next">
              <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div><!-- .CAROUSEL -->
        

      </section><!-- .SECTION 1 -->
      
      <!-- SECTION 2: PRODUCTOS -->
      <section id="section-2" class="p-2">


          <!-- <div class="col-1 d-flex justify-content-center align-items-center bg-primary text-white">
            <i class="far fa-arrow-alt-circle-left font-size-40 cursor-pointer"></i>
          </div> -->

          <!-- -- productos -- -->
          <div id="caja-productos" class="d-flex flex-wrap">
            
            <!-- 
              -- producto -- 
            -->
            
          </div><!-- -- .productos -- -->

        

          <!-- <div id="arrow-right-caja-productos" class="col-1 d-flex justify-content-center align-items-center bg-primary text-white">
              <i class="far fa-arrow-alt-circle-right font-size-40 cursor-pointer"></i>
          </div> -->

      </section><!-- .SECTION 2 -->



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

    <!-- webpack.config.js -->
    <!-- <script src="js/webpack.config.js"></script> -->
    
    

    <!-- -- JS Personal -- -->
    <script src="js/utiles.js"></script>
    <script src="js/comun_pagina.js"></script>
    <script src="js/class/classPaginador.js"></script>
    <script src="js/index.js"></script>

  </body>
</html>








