<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 2
      h1 Documentación del proceso de integración de <em>assets</em>
    p.mb-4(data-aos="fade-down-right") En este apartado se observará la información pertinente que, a manera de manual de integración, podrá servir para documentar el proceso de creación y configuración de un proyecto de videojuego, y el consecuente proceso de integración de assets y recursos del videojuego. En primera instancia se observarán los detalles de creación del proyecto y, posteriormente, los detalles de integración de los sistemas de <i>assets</i> y posteriores procesos de optimización y ajuste preliminar.
    .row.justify-content-center
      .col-lg-10.col-md-12.mb-5(data-aos="fade-down-right")
        img.mb-4(src='@/assets/curso/tema2/img1.png')
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.cambioimg(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.cambiotexto.px-4.py-5
            p.mb-0 Es importante que en esta fase de desarrollo, se tengan detalles de los requerimientos del proyecto, es decir, una base documental que, en esencia, es el documento de diseño del videojuego o <i>Game Design Document</i>.
    .row.justify-content-center.mb-4
      .col-lg-6.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        p Los detalles de requerimientos podrán ofrecer una orientación sobre las características esenciales que deberá tener la 
          span.text-bold carpeta de proyecto de <i>Unity 3D </i>  
          span y, por consiguiente, de la manera como se deberá configurar y optimizar cada asset a integrar o integrado en la plataforma.
        p Por otro lado, brindará información pertinente a cada miembro del equipo de trabajo, sobre los detalles y paso a paso de los procesos de configuración. En términos generales, esta documentación se podrá definir y pensar como una bitácora de viaje donde se registran los detalles de cada evento y servirá, posteriormente, como referente para el análisis de errores y fallas, y por consiguiente de cambios y ajustes.
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        img.mb-4(src='@/assets/curso/tema2/img3.jpg')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 2.1 Proceso de creación y configuración del proyecto
    p(data-aos="fade-down-right") Al crear un proyecto de aplicación dentro del entorno de desarrollo de <i>Unity</i>, es necesario realizar una serie de pasos ordenados y consecuentes que podrán determinar las características esenciales para el buen funcionamiento y configuración del proyecto. 
    p(data-aos="fade-down-right") Sin embargo, se hace necesario tener una serie de documentos claramente diseñados y parametrizados que permitan delimitar los detalles de configuración del proyecto, que involucra variables como plataformas de publicación, ubicación y organización de archivos, configuración de parámetros de compilación e incluso de perfiles de optimización.
    p.mb-5(data-aos="fade-down-right") Para mayor ilustración sobre la 
      span.text-bold creación de la carpeta de proyecto
      span , se invita a ver el siguiente video.
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h3.mb-4(data-aos="fade-down-right") Configuración predeterminada / personalizada de un proyecto en <i>Unity</i>
    p.mb-4(data-aos="fade-down-right") Configuración predeterminada / personalizada de un proyecto en <i>Unity</i>: cuando se crea un proyecto nuevo en <i>Unity</i>, se abre una ventana que funciona como asistente de creación de proyecto, solicitando una primera información de base, como el nombre del proyecto, su ubicación en el sistema de carpetas y su plantilla de base, que define si será 2D o 3D. 
    .row.justify-content-center.mb-4
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Figura 7. 
          span Ventana del asistente de creación de proyecto
        img.mb-4(src='@/assets/curso/tema2/img4.png')
    //-titulo
    .row.align-items-center(data-aos="fade-down-right")
      .col-sm-1.col-2.p-0.p-lg-3.p-xl-4.pad1
        img.p-2(src='@/assets/curso/tema1/mando.svg')
      .col-auto.col-10.ps-0
        h3.mb-0.correr-izq Crear proyecto 2D vs. 3D
    p(data-aos="fade-down-right") Una vez se eligen las opciones, principalmente la plantilla 2D o 3D, se comienza la definición de cada parámetro. Es importante tener claridad de las dimensiones del videojuego, es decir 2D o 3D, porque una vez se crea con este parámetro, se cargarán configuraciones predeterminadas para una u otra dimensión de juego.
    p.mb-4(data-aos="fade-down-right") Ahora, se invita a ver el video para la 
      span.text-bold configuración compilación.
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    p.mb-4(data-aos="fade-down-right") Sin embargo, puede darse la circunstancia que deba cambiarse esta configuración y realizar este cambio sin mayores dificultades, teniendo en cuenta que cambiarán aspectos internos de la carpeta de proyecto. Puede cambiarse de 2D a 3D o viceversa. Para realizar este cambio se recurre a la siguiente opción de ruta en menú <i>Edit</i>  (menú: <i>Edit > Project Settings > Editor</i>), tal cual como se muestra en la siguiente figura.
    .row.justify-content-center.mb-4
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Figura 8. 
          span Ventana de diálogo para la configuración del modo de plantilla
        img.mb-4(src='@/assets/curso/tema2/img5.png')
    p.mb-4(data-aos="fade-down-right") En el Inspector, aparecerá la opción Default Behavior Mode y podrá elegir el modo específico de comportamiento.
    .row.justify-content-center.mb-4
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Figura 9. 
          span Detalle de la ventana de diálogo para la configuración del modo de plantilla
        img.mb-4(src='@/assets/curso/tema2/img6.png')
    //-titulo
    .row.align-items-center(data-aos="fade-down-right")
      .col-sm-1.col-2.p-0.p-lg-3.p-xl-4.pad1
        img.p-2(src='@/assets/curso/tema1/mando.svg')
      .col-auto.col-10.ps-0
        h3.mb-0.correr-izq Configuración predeterminada de un proyecto 2D y 3D en <i>Unity</i>
    p.mb-4(data-aos="fade-down") Como se anotó anteriormente, la configuración de cada plantilla es diferente y realiza ajustes preestablecidos de manera específica para cada plantilla. A continuación, se podrán observar los aspectos básicos de configuración según el modo escogido.

    TabsA.color-acento-contenido.mb-5(data-aos="fade-down-right")

      .tarjeta.fondo-10.p-4(titulo="Para la configuración<br/> predeterminada de <i>Unity</i> <br/>en modo 2D")
        h4 Para la configuración predeterminada de <i>Unity</i> en modo 2D
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span Las imágenes se integran e importan como <i>Sprites</i>.
          li 
            i.lista-ul__vineta
            | La vista en el Panel o Visor de Edición aparece como 2D.
          li 
            i.lista-ul__vineta
            span Se habilita la herramienta  #[em Sprite Packer].
          li 
            i.lista-ul__vineta
            span Los <i>game objects</i>, no presentan luz discrecional.
          li 
            i.lista-ul__vineta
            | La posición de la cámara aparece en modo de vista ortográfica y en una posición de coordenadas X = 0, Y = 0, Z = -10.
        h4 En la ventana de iluminación
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span La opción de <i>Skybox</i> esta deshabilitado para nuevas escenas.
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span La opción de <i>Ambient Source</i> es un color sólido gris oscuro (RGB: 54, 58, 66).
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span La opción de <i>Precomputed Realtime GI</i> está desactivada.
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span La opción de <i>Backed GI</i> está desactivada.
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span La opción de <i>Auto Building</i> está desactivada.
      .tarjeta.fondo-10.p-4(titulo="Para la configuración<br/> predeterminada de <i>Unity</i> <br/>en modo 3D")
        h4 Para la configuración predeterminada de <i>Unity</i> en modo 3D
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span Al importar las imágenes del videojuego, <i>Unity</i> las integrará como texturas. 
          li 
            i.lista-ul__vineta
            | La vista en el Panel o Visor de Edición aparece como 3D.
          li 
            i.lista-ul__vineta
            span Se deshabilita la herramienta <i>Sprite Packer</i>.
          li 
            i.lista-ul__vineta
            span Los <i>game objects</i> presentan luz discrecional en tiempo real que permite visualizar volumetría.
          li 
            i.lista-ul__vineta
            | La posición de la cámara aparece en modo de vista perspectivas y en una posición de coordenadas X = 0, Y = 1, Z = -10.
        h4 En la ventana de iluminación
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span La opción de <i>Skybox</i> usa el <i>default Skybox Material</i>.
          li 
            i.lista-ul__vineta
            span La opción de <i>Ambient Source</i> está preconfigurada en <i>Skybox</i>.
          li 
            i.lista-ul__vineta
            span La opción de <i>Precomputed realtime GI</i> está activa.
          li 
            i.lista-ul__vineta
            span La opción de <i>Backed GI</i> está activa.
          li 
            i.lista-ul__vineta
            span La opción de <i>Auto-Building</i> está activa.
    p(data-aos="fade-down-right") Es importante tener claridad que si bien el proyecto puede ser de modo 2D en la plantilla, puede contener elementos de características 3D como modelos tridimensionales poligonales. O puede configurarse en modo 3D en la plantilla y contener elementos bidimensionales como Sprites.
    p.mb-4(data-aos="fade-down-right") Ahora, se verá cómo funciona la 
      span.text-bold integración y caracterización de <i>assets </i> 
      span mediante el siguiente video.
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Figura 10. 
          span Paneles de configuración de atributos, integración de componentes y organización de <i>assets</i>
        img.mb-4(src='@/assets/curso/tema2/img7.png')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 2.2 Detalles de configuración de la plataforma de publicación y compilación
    p.mb-4(data-aos="fade-down-right") A continuación, se verá cómo se puede hacer el 
      span.gtext-bold cambio de plataforma 
      span a través del siguiente video. 
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4(data-aos="fade-down-right") Una vez se determina la plataforma definitiva e incluso las posibilidades de conversión, se hace necesario documentar los detalles de configuración, asegurándose de concluir cada aspecto inherente a la compilación y plataforma de publicación.
    .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-down-right")
      h5 Tabla 3. 
      span Configuraciones para compilación
    .tabla-c.my-4(data-aos="fade-down-right")
      table
        tr.fondo-5.text-white.text-center
          td.ancho-col 
            h4.mb-0 Configuración
          th 
            h4.mb-0 Descripción
        tr
          td.text-center Plataforma destino
          td 
        tr
          td.text-center <i>Windows</i>
          td Compilación para <i>Windows</i>.
        tr
          td.text-center <i>macOS X (Not available on Linux)</i>
          td Compilación para macOS.
        tr
          td.text-center <i>Linux (not available on Mac)</i>
          td Compilación para <i>Linux</i>.
        tr
          td.text-center Arquitectura
          td <i>Not available on macOS</i>
        tr
          td.text-center x86
          td 32-bit CPU.
        tr
          td.text-center x86_64
          td 64-bit CPU.
        tr
          td.text-center x86 + x86_64 (Universal)
          td Todos los dispositivos CPU para <i>Linux</i>.
        tr
          td.text-center <em>Server Build</em>
          td Habilitar esta configuración para crear el reproductor para uso del servidor y sin elementos visuales (sin cabeza), sin la necesidad de ninguna opción de línea de comando. Cuando se habilita esta configuración, <i>Unity</i> crea <i>scripts</i> administrados con la definición de <i>UNITY_SERVER</i>, lo que significa que se puede escribir código específico del servidor para la aplicación. También se puede compilar la versión de <i>Windows</i> como una aplicación de consola para acceder a <i>stdin</i> y <i>stdout</i>. Los registros de <i>Unity</i> van a la salida estándar de forma predeterminada.
        tr
          td.text-center <i>Copy PDB files (Windows only)</i>
          td Habilitar esta configuración para incluir archivos de base de datos de programas de <i>Microsoft</i> (.pdb) en el reproductor independiente integrado. Los archivos .pdb contienen información de depuración de la aplicación que puede utilizar para depurar la aplicación. La copia de archivos .pdb puede aumentar el tamaño de su reproductor, por lo que debe deshabilitar esta configuración para las compilaciones destinadas a la publicación. Esta configuración está deshabilitada de forma predeterminada.
        tr
          td.text-center <i>Create Visual Studio Solution(Windows only)</i>
          td Habilitar esta configuración para generar archivos de la solución de <i>Visual Studio</i> para su proyecto, de modo que pueda crear su ejecutable final en Visual Studio.
        tr
          td.text-center <i>Create Xcode Project (Mac Only)</i>
          td Habilitar esta configuración para generar un proyecto de <i>Xcode</i> para que pueda construir su paquete de aplicación final en <i>Xcode. Xcode</i> tiene soporte integrado para la firma de código y la carga de la aplicación en la <i>Mac App Store</i>.
        tr
          td.text-center <i>Development Build</i>
          td Habilitar esta configuración para incluir símbolos de depuración de secuencias de comandos e incluir el generador de perfiles en su compilación. Cuando se habilita esta configuración, se establece la definición de <i>scripting DEVELOPMENT_BUILD</i>. Debe utilizar esta opción cuando desee probar la aplicación.
        tr
          td.text-center <i>Autoconnect profiler</i>
          td Requiere que se habilite la opción <i>Development Build</i>. Cuando habilita esta configuración, <i>Unity Profiler</i> se conecta automáticamente a su compilación.
        tr
          td.text-center <i>Deep Profiling Support</i>
          td Requiere que se habilite la opción <i>Development Build. Deep Profiling Support</i> permite que <i>Unity Profiler</i> registre datos más detallados instrumentando cada llamada de función. Se debe habilitar <i>Deep Profiling might slow down script execution</i>.
        tr
          td.text-center <i>Script debugging</i>
          td Requiere que se habilite la opción <i>Development Build</i>. Cuando habilita esta configuración, <i>Unity</i> agrega símbolos de depuración a su código de secuencia de comandos.
        tr
          td.text-center <i>Scripts Only Build</i>
          td Requiere que se habilite la opción <i>Development Build</i>. Cuando habilita esta configuración, puede reconstruir solo los <i>scripts</i> para la aplicación mientras deja intactos los archivos de datos de una compilación que ha ejecutado previamente. La compilación de <i>scripts</i> solo mejora significativamente los tiempos de iteración si solo está cambiando el código en la aplicación. Se debe compilar todo el proyecto una vez antes de poder utilizar esta configuración.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-down-right")
      h2 2.3 Lista de chequeo de ítems y configuraciones
    .row.justify-content-center
      .col-lg-10.col-md-12.mb-5(data-aos="fade-down-right")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.cambioimg(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img8.jpg')})`}"
          )
          .bloque-texto-g__texto.cambiotexto.px-4.py-5
            p.mb-0 Hasta el momento se han definido los conceptos relativos a los aspectos esenciales de optimización de recursos del videojuego y de configuración de la compilación y plataforma de publicación. Es necesario, a partir de este punto, realizar una serie de listas de chequeo que permitan determinar el cumplimiento de los requisitos del videojuego y los detalles fundamentales de configuración.
    .row.justify-content-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema2/fig1.svg')
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        p Básicamente se trata de enumerar en primer lugar los ítems, determinar si se encuentran presentes o no en la carpeta de proyecto y verificar si su integración se logró con éxito en un primer intento, y de no ser así, describir en los detalles el proceso que se llevó a cabo para su optimización y/o correcta integración. Como componente de bitácora, la lista tendrá, además, la ruta de acceso al recurso, y de ser posible, capturas de los paneles de Inspector y Jerarquía para visualizar gráficamente los detalles de su configuración y/o integración de componentes de juego como archivos de código o efectos.
        p Por otro lado, se listan las características de compilación, mostrando incluso de forma gráfica mediante captura, que en efecto se realizó la configuración de acuerdo con los requerimientos, ayudando a mismo tiempo al equipo de trabajo, a entender la ruta de acceso e interacción con las herramientas de compilación (<i>Build Settings</i>).
    p.mb-4(data-aos="fade-down-right") A continuación, se presenta un ejemplo de lista de chequeo de integración y configuración de <i>assets</i>, donde puede observarse el orden de caracterización del ítem, de lo general (categoría) a lo particular (criterio / atributo). Y en un espacio de la lista, lo correspondiente al listado de errores y ajustes, de ser necesario.
    .row.justify-content-center
      .col-lg-10.col-md-12.mb-5
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-down-right")
          h5 Tabla 4. 
          span Ejemplo lista de chequeo de integración y configuración de <i>assets</i>
        .tabla-c.my-4(data-aos="fade-down-right")
          table.bordes
            tr.fondo-5.text-white.text-center.bordes
              <td colspan="5"> 
                h4.mb-0 Lista de chequeo de integración y configuración de assets
              </td>
            tr.fondo-11.bordes
              <td colspan="2" class="bordes">CATEGORÍA / ITEM</td>
              <td colspan="3">Modelos 3DS / <i>BuggyEnemy.3ds</i> </td>
            tr
              <td colspan="5" class="bordes">REFERENCIA</td>
            tr.fondo-11
              td.text-center.borde-der N.°
              td CRITERIO / ATRIBUTO
              <td colspan="2" class="bordes">
                p.mb-0.text-bold.text-center CUMPLIDO
              </td>
              td.text-bold OBSERVACIONES

            tr
              td.borde-der
              td 
              td.bordes.anchocol.text-center SI
              td.bordes.anchocol.text-center NO
              td
            tr
              td.bordes 1
              td.bordes Poligonalidad <i>LowPoly</i>
              td.bordes.text-center X
              td
              td.bordes El modelo presenta configuración <i>LOWPOLY</i>: 2.832 tris
            tr
              td.bordes 2
              td.bordes Materiales
              td.bordes.text-center X
              td.bordes
              td.bordes 1 material: <i>mat_buggy_enemy</i>
            tr
              td.bordes 3
              td.bordes Texturas
              td.bordes.text-center X
              td.bordes
              td.bordes 1 textura: text_uv_buggy_enemy.png (512px X 512px)
            tr
              td.bordes 4
              td.bordes Mapeado UV
              td.bordes.text-center X
              td.bordes 
              td.bordes 1 UVMap
            tr
              td.borde-der N°
              td ASPECTO / ERROR
              <td colspan="2" class="bordes">
                p.mb-0.text-bold.text-center CORREGIDO
              </td>
              td.text-bold DETALLES
            tr
              td.borde-der
              td 
              td.bordes.text-center SI
              td.bordes.text-center NO
              td 
            tr.bordes
              td.bordes 1
              td Normales / Invertidas
              td.bordes.text-center X
              td 
              td.bordes El modelo presentaba las normales invertidas de la carrocería, y no era posible verla en el motor. Se corrigió desde la aplicación de origen.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-down-right")
      h2 2.4 Lista de errores y métricas
    .row.justify-content-center
      .col-lg-10.col-md-12.mb-5
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-down-right")
          .bloque-texto-g__img.cambioimg(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img9.jpg')})`}"
          )
          .bloque-texto-g__texto.cambiotexto.px-4.py-5
            p.mb-0 En apartados anteriores se describió la metodología básica para recurrir a herramientas propias de <i>Unity</i> para perfilar y obtener datos de rendimiento en tiempo de ejecución clasificados por módulos funcionales. Desde esta herramienta de análisis e información y otras que se describirán a continuación, se pueden establecer listas de errores y métricas, que representan en orden cronológico, toda la serie de datos pertinentes para determinar su nivel de error falla o influencia en rendimiento. Esta información se genera de manera automática y su diferencia entre versiones de datos de un mismo indicador analizado, radicará en la forma como se haya logrado optimizar.
    p.mb-4(data-aos="fade-down-right") Por otro lado, además de los datos de error y falla, se describen los correspondientes a los de ajuste y optimización que se hayan podido caracterizar, pero que obedecerán a procesos manuales y elaborados por determinado miembro del equipo de desarrollo.
    h3.mb-4(data-aos="fade-down-right") Lista de eventos desde Log.Files
    p(data-aos="fade-down-right") Puede haber momentos durante el desarrollo en los que necesite obtener información de los registros del reproductor independiente que ha creado, el dispositivo de destino, el Administrador de paquetes o el Editor. Los archivos de registro son útiles cuando se ha experimentado un problema, para averiguar exactamente dónde ocurrió el problema.
    p.mb-4(data-aos="fade-down-right") Todos los mensajes, advertencias y errores escritos en la ventana de la consola en el Editor también se escriben en estos archivos de registro. Se pueden escribir los propios mensajes en la consola y los archivos de registro utilizando la clase <i>Debug</i>.
    .cajon.color-primario.fondo-cajon.p-4.mb-4(data-aos="fade-down-right")
      p En <i>macOS</i>, se puede acceder a los registros del reproductor, el administrador de paquetes y el Editor a través de la utilidad <i>Console.app</i>.
      p.mb-0 En <i>Windows</i>, los registros del Administrador de paquetes y del Editor se ponen en carpetas que no se muestran en el Explorador de <i>Windows</i> de forma predeterminada.
    //-titulo 2
    .row.align-items-center(data-aos="fade-down-right")
      .col-sm-1.col-2.p-0.p-lg-3.p-xl-4.pad1
        img.p-2(src='@/assets/curso/tema1/fig21.svg')
      .col-auto.col-10.ps-0
        p.mb-0.correr-izq Administrador de empaquetación
    p.mb-4(data-aos="fade-down-right") para ver el registro de Package Manager, se debe navegar hasta la carpeta de registro de <i>Unity</i>:
    .tabla-c(data-aos="fade-down-right")
      table
        tr.fondo-5.text-white.text-center
          td.ancho-col 
            h4.mb-0 Sistema operativo
          th 
            h4.mb-0 <i>Log Files</i>
        tr
          td.text-center <em>Linux</em>
          td <em>~/.config/unity3d/upm.log</em>
        tr
          td.text-center <i>MacOS</i>
          td <i>~/library/logs/unity/upm.log</i>
            p también puede utilizar la utilidad console.app desde su la carpeta /applications/utilities para buscar el archivo <i>log</i>.
        tr
          td.text-center <i>Windows (non-system user account)</i>
          td <i>%localappdata%\unity\editor\upm.log</i>
        tr
          td.text-center <i>Windows (system user account)</i>
          td <i>%allusersprofile%\unity\editor\upm.log</i>
    //-titulo 2
    .row.align-items-center(data-aos="fade-down-right")
      .col-sm-1.col-2.p-0.p-lg-3.p-xl-4.pad1
        img.p-2(src='@/assets/curso/tema1/fig21.svg')
      .col-auto.col-10.ps-0
        p.mb-0.correr-izq Editor
    p.mb-4(data-aos="fade-down-right") Para ver el registro del editor, se debe abrir una ventana de la consola (menu: <i>Window > General > Console</i>) y seleccionar Abrir registro del editor en el menú de la ventana de la consola. También se puede navegar a la siguiente carpeta:
    .tabla-c(data-aos="fade-down-right")
      table
        tr.fondo-5.text-white.text-center
          td.ancho-col 
            h4.mb-0 Sistema operativo
          th 
            h4.mb-0 <i>Log Files</i>
        tr
          td.text-center <em>Linux</em>
          td <em>~/.config/unity3d/Editor.log</em>
        tr
          td.text-center <i>MacOS</i>
          td <i>~/Library/Logs/Unity/Editor.log</i>
            p También puede utilizar la utilidad <i>Console.app</i> desde su la carpeta <i>/Applications/Utilities</i> para buscar el archivo <i>log</i>.
        tr
          td.text-center <i>Windows</i>
          td <i>%LOCALAPPDATA%\Unity\Editor\Editor.log</i>

    //-titulo 2
    .row.align-items-center(data-aos="fade-down-right")
      .col-sm-1.col-2.p-0.p-lg-3.p-xl-4.pad1
        img.p-2(src='@/assets/curso/tema1/fig21.svg')
      .col-auto.col-10.ps-0
        p.mb-0.correr-izq Jugador
    p.mb-4(data-aos="fade-down-right") Para ver el registro del jugador, se debe abrir una ventana de la consola (menú: <i>Window > General > Console</i>) y seleccionar Abrir registro del jugador en el menú de la ventana de la consola. También se puede navegar a la siguiente carpeta:
    .tabla-c(data-aos="fade-down-right")
      table
        tr.fondo-5.text-white.text-center
          td.ancho-col 
            h4.mb-0 Sistema operativo
          th 
            h4.mb-0 <i>Log Files</i>
        tr
          td.text-center <em>Linux</em>
          td <em>~/.config/unity3d/CompanyName/ProductName/Player.log</em>
        tr
          td.text-center <i>MacOS</i>
          td <i>~/Library/Logs/Company Name/Product Name/Player.log</i>
            p También puede utilizar la utilidad Console.app desde su la carpeta <i>/Applications/Utilities</i> para buscar el archivo <i>log</i>.
        tr
          td.text-center <i>Windows</i>
          td <i>%USERPROFILE%\AppData\LocalLow\CompanyName\ProductName\Player.log</i>

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
