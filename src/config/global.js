export default {
  global: {
    componenteFormativo: 'Documentación de integración de <em>assetts</em>',
    descripcionCurso:
      'Se explican conceptos básicos de optimización de <em>assetts</em> y documentación de integración.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Verificación y optimización de <em>assets</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Métricas de rendimiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Optimización de archivos de salida',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Optimización de archivos de código',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentación del proceso de integración de <em>assets</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Proceso de creación y configuración del proyecto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Detalles de configuración de la plataforma de publicación y compilación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Lista de chequeo de ítems y configuraciones',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Lista de errores y métricas',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    /*  
    {
      tema: 'Manual interfaz de usuario',
      referencia:
        '<em>Bowers, M. (2019). Level Up – A guide to game UI (with infographic). [Web log post]. Designers.</em>',
      tipo: 'Blog',
      link: 'https://www.toptal.com/designers/gui/game-ui',
    },
    {
      tema: 'Sonidos',
      referencia: '<em>Freesound. (2021). Sound</em>.',
      tipo: 'Página web',
      link: 'https://freesound.org',
    },
    {
      tema: '<em>Unity</em>',
      referencia:
        '<em>Unity documentation. (2021). Unity Manual. Types of light. Unity.</em>',
      tipo: 'Página web',
      link: 'https://docs.unity3d.com/Manual/Lighting.html',
    },
  */
  ],
  glosario: [
    {
      termino: 'Audio <i>clip</i>',
      significado:
        'contenedor para datos de audio en <i>Unity. Unity</i> admite activos de audio mono, estéreo y multicanal (hasta ocho canales). <i>Unity</i> puede importar formatos de archivo de audio .aif, .wav, .mp3 y .ogg, y formatos de módulo de seguimiento .xm, .mod, .it y .s3m.',
    },
    {
      termino: '<i>Asset</i>',
      significado:
        'cualquier medio o dato que pueda usarse en su juego o proyecto. Un activo puede provenir de un archivo creado fuera de <i>Unity</i>, como un modelo 3D, un archivo de audio o una imagen. También puede crear algunos tipos de activos en <i>Unity</i>, como un <i>Animator Controller</i>, un <i>Audio Mixer</i> o una <i>Render Texture</i>.',
    },
    {
      termino: '<em>Asset package</em>',
      significado:
        'colección de archivos y datos de proyectos de <i>Unity</i>, o elementos de proyectos, que se comprimen y almacenan en un archivo, similar a los archivos <i>Zip</i>, con la extensión .<i>unitypackage</i>. Los paquetes de activos son una forma práctica de compartir y reutilizar proyectos y colecciones de activos de <i>Unity</i>. ',
    },
    {
      termino: '<i>Asset server</i>',
      significado:
        'sistema de control de activos y versiones con una interfaz gráfica de usuario integrada en <i>Unity</i>. Permite a los miembros del equipo trabajar juntos en un proyecto en diferentes computadoras.',
    },
    {
      termino: '<em>Asset store</em>',
      significado:
        'biblioteca en crecimiento de activos comerciales y gratuitos creada por <i>Unity</i> y miembros de la comunidad. Ofrece una amplia variedad de activos, desde texturas, modelos y animaciones hasta ejemplos de proyectos completos, tutoriales y extensiones de editor. ',
    },
    {
      termino: '<i>Asset store package</i>',
      significado:
        'colección agrupada de activos disponibles para comprar o descargar en <i>Unity Asset Store</i>, comprimidos y almacenados en un archivo con la extensión: .<i>unitypackage</i>, como un paquete de activos. Puede administrar los paquetes de la tienda de activos en la tienda en línea o a través de la ventana Administrador de paquetes. ',
    },
    {
      termino: '<i>Category</i>',
      significado:
        'una categoría Profiler identifica los datos de la carga de trabajo para un subsistema de <i>Unity</i> (por ejemplo, las categorías <i>Rendering, Scripting y Animation</i>). <i>Unity</i> aplica códigos de colores a las categorías para ayudar a distinguir visualmente los tipos de datos en la ventana <i>Profiler</i>.',
    },
    {
      termino: '<i>Compression</i>',
      significado:
        'método de almacenamiento de datos que reduce la cantidad de espacio de almacenamiento que se requiere. Consulte compresión de textura, compresión de animación, compresión de audio, compresión de compilación.',
    },
    {
      termino: '<em>Frustum</em>',
      significado:
        'región del espacio 3D que una cámara en perspectiva puede ver y renderizar. En la vista de Escena, el tronco está representado por una pirámide rectangular truncada con su parte superior en el plano de recorte cercano de la cámara. Un plano que limita qué tan cerca puede ver una cámara desde su posición actual. El plano es perpendicular a la dirección de avance (Z) de la cámara.',
    },
    {
      termino: '<em>GameObject</em>',
      significado:
        'objeto fundamental en las escenas de <i>Unity</i>, que puede representar personajes, accesorios, escenarios, cámaras, <i>waypoints</i> y más. La funcionalidad de un <i>GameObject</i> está definida por los Componentes adjuntos a él.',
    },
    {
      termino: '<em>Level of Detail</em>',
      significado:
        'técnica de nivel de detalle (LOD) es una optimización que reduce la cantidad de triángulos que <i>Unity</i> tiene que representar para un <i>GameObject</i> cuando aumenta su distancia de la cámara.',
    },
    {
      termino: '<em>Model</em>',
      significado:
        'representación de modelo 3D de un objeto, como un personaje, un edificio o un mueble. ',
    },
    {
      termino: '<em>Model file</em>',
      significado:
        'archivo que contiene datos 3D, que pueden incluir definiciones de mallas, huesos, animación, materiales y texturas. ',
    },
    {
      termino: '<em>Package</em>',
      significado:
        'contenedor que almacena varios tipos de características y activos para <i>Unity</i>, incluidas las herramientas y bibliotecas de Editor o Runtime, colecciones de activos y plantillas de proyectos. Los paquetes son unidades independientes que <i>Unity Package Manager</i> puede compartir entre los proyectos de <i>Unity</i>. La mayoría de las veces se denominan paquetes, pero ocasionalmente se denominan paquetes <i>Unity Package Manager</i> (UPM). ',
    },
    {
      termino: '<em>Prefab</em>',
      significado:
        'tipo de activo que le permite almacenar un <i>GameObject</i> completo con componentes y propiedades. La casa prefabricada actúa como una plantilla a partir de la cual puede crear nuevas instancias de objetos en la escena.',
    },
    {
      termino: '<em>Profiler</em>',
      significado:
        'ventana que ayuda a optimizar el juego. Muestra cuánto tiempo se pasa en las distintas áreas del juego. Por ejemplo, puede informar el porcentaje de tiempo dedicado a renderizar, animar o en la lógica de su juego.',
    },
    {
      termino: '<em>Project</em>',
      significado:
        'en <i>Unity</i> se usa un proyecto para diseñar y desarrollar un juego. Un proyecto almacena todos los archivos relacionados con un juego, como el activo y los archivos de escena. ',
    },
    {
      termino: '<em>Project Settings</em>',
      significado:
        'amplia colección de configuraciones que le permiten configurar cómo se comportan física, audio, redes, gráficos, entrada y muchas otras áreas de su proyecto. ',
    },
    {
      termino: '<em>Sprite Atlas</em>',
      significado:
        'textura que se compone de varias texturas más pequeñas. También se conoce como atlas de texturas, <i>sprite</i> de imagen, hoja de sprite o textura empaquetada.',
    },
    {
      termino: '<em>State Machine</em>',
      significado:
        'conjunto de estados en un <i>Animator Controller</i> en el que puede estar un personaje o <i>GameObject</i> animado, junto con un conjunto de transiciones entre esos estados y una variable para recordar el estado actual. Los estados disponibles dependerán del tipo de juego, pero los estados típicos incluyen cosas como inactivo, caminar, correr y saltar.',
    },
    {
      termino: '<em>State Machine Behaviour</em>',
      significado:
        'secuencia de comandos que se adjunta a un estado dentro de una máquina de estado para controlar lo que sucede cuando la máquina de estado entra, sale o permanece dentro de un estado, como reproducir sonidos cuando se ingresan los estados.',
    },
  ],
  referencias: [
    {
      referencia:
        '<i>Bond, G. J. (2014). Introduction to Game Design, Prototyping, and Development: From Concept to Playable Game with Unity and C# (Illustrated ed.) Addison-Wesley Professional</i>',
    },
    {
      referencia:
        '<i>Mernard, M. (2011). Game Development with Unity. Cengage Learning PTR.</i>',
    },
    {
      referencia:
        '<em>Okita, A. (2014). Learning C# Programming with Unity 3D. Taylor & Francis.</em>',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Álvaro Cortés Téllez',
        cargo: 'Experto Temático Videojuegos',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luz Aida Quintero Velásquez',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital- Centro de Metrología y Diseño',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
}
