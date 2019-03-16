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
    <link rel="stylesheet" href="css/detalle_producto.css">

    <!-- title -->
    <title>DETALLE PRODUCTO</title>

  </head>
  <body>
      
<div id="div-principal" class="">

    <!-- incluye la cabecera, que sera igual en todas las paginas -->
   <?php include_once ("includes/templates/header.php"); ?>

    <!-- MAIN -->
    <main>
      
      <!-- SECTION 1: DETALLE PRODUCTO -->
      <section datos="section1-detalle-producto" class="d-flex justify-content-center align-items-center h-25rem mb-5">

        <!-- INSERTA DATOS DEL PRODUCTO -->
        

      </section>
  
      <!-- SECTION 2: COMENTARIOS -->
      <section datos="section2-detalle-producto" class="d-flex justify-content-center align-items-center mb-5 bg-grisSecondaryExtraSoft">

        <!-- rueda con puntuacion de 0 a 10 del producto -->
        <div class="col-3 d-flex justify-content-center align-items-center bg-grisSecondaryExtraSoft">
          
            <!-- circulo progreso -->
            <div class="circulo d-flex justify-content-center align-items-center">
              <span class="font-size-25 text-white">
                0.0
              </span> 
            </div><!-- .circulo progreso -->
        
        </div><!-- .rueda con puntuacion de 0 a 10 del producto -->

        <!-- caja comentarios -->
        <div datos="section2-caja-comentarios" class="col-9 d-flex flex-column justify-content-center align-items-center p-2 bg-amarilloBeekeeper">
          <!-- comentarios -->
          <div class="col-12 d-flex flex-column justify-content-center p-2 mb-2 roundedRem-10">

              <!-- texto -->
              <!-- 1 -->
              <div class="w-100 mb-2 roundedRem-10 bg-light position-relative">
                <span class="position-absolute left-10rem text-rojoPomeGranate">usuario1</span>
                <p class="p-4 m-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora assumenda sint veritatis ducimus. At nisi reiciendis incidunt nihil, dolore deleniti harum praesentium voluptatum aperiam rerum consequatur quisquam temporibus illum repellat!
                </p>
              </div><!-- .1 -->
              <!-- 2 -->
              <div class="w-100 mb-2 roundedRem-10 bg-light position-relative">
                  <span class="position-absolute left-10rem text-rojoPomeGranate">usuario2</span>
                  <p class="p-4 m-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet quae a nostrum nulla dignissimos id, omnis ipsa neque animi laborum natus eius magni soluta, vel sapiente, expedita libero facilis debitis enim! Ab dolores perferendis, doloremque est error labore? Dolor deserunt incidunt officiis pariatur alias animi illum, aspernatur dolore, qui cum optio neque sed nulla. Officia, laborum minima maiores impedit ad sapiente, eum provident placeat quos pariatur nostrum reiciendis ipsa consectetur in itaque asperiores cumque? Sed alias iste ex, voluptatem dolor et adipisci, minima veniam, laborum cumque aliquid asperiores aut amet. Eveniet cum, a tempore harum odit adipisci illo voluptate.
                  </p>
              </div><!-- .2 -->

            
          </div><!-- .comentarios -->

          <!-- num paginas -->
            <!-- AQUI VA EL PAGINADOR -->
          <!-- .num paginas -->

        </div><!-- .caja comentarios -->

        
      </section><!-- .SECTION 2 -->

      <!-- SECTION 3: PRODUCTOS RELACIONADOS POR CATEGORIA -->
      <section>

      </section>



      



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
    <script src="js/detalle_producto.js"></script>

  </body>
</html>








