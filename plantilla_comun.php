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
    <title>PLANTILLA COMUN</title>

  </head>
  <body>
      
<div id="div-principal" class="">

    <!-- incluye la cabecera, que sera igual en todas las paginas -->
   <?php include_once ("includes/templates/header.php"); ?>

    <!-- MAIN -->
    <main>
   
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

  </body>
</html>








