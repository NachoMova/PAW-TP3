**1)** ¿Qué significa que los estilos se apliquen en cascada? ¿cómo aplica la herencia de estilos?

Los elementos en los niveles bajos de la jerarquía heredan los estilos asignados a los elementos en los niveles más abajo. Los estilos heredados de elementos en niveles superiores se pueden reemplazar por nuevos estilos definidos para los elementos en niveles inferiores de la jerarquía. Algunos estilos no pueden ser heredadas, como padding o margin. Un hijo que hereda una propiedad, puede cambiarla si se le define algo distinto (de lo más general a lo más particular). Es posible forzar la herencia con “inherit”.

**2)** ¿Por qué es necesario utilizar un CSS de Reset?

El CSS de Reset lo que hace es "limpia" todas los estilos que tenga la página, para que puedan ser configurados a gusto del desarrollador. Esto se da por que la mayoría de las veces distintos navegadores muestran los estilos de muy diferente manera y a su vez le aplican ciertos estilos a algunos elementos por razones de compatibilidad.

**3)** ¿Qué es el CSS box model?

EL CSS Box Model, es el “contenedor” de cada elemento HTML. Cada elemento es considerado como un bloque/caja que está formado por: el contenido (el elemento en si), padding, border y margin.

**4)** ¿Cuál es el código que hay que insertar en una hoja de estilo para poder usar WebFonts?

A la hora de querer usar una fuente que no se encuentra instalada en el server (o donde se tenga alojada la web), se puede incluir el archivo de las mismas en el CSS.

El código es:

    @font-face {
            font-family: miFuente; src: url(mifuente.woff);
     }

Existen varios formatos de fuente (TTF, OTF, WOFF, WOFF 2.0), pero no todas son compatibles con los navegadores

**5)** ¿Qué son y para qué sirven los pseudoElementos?

Son elementos que permiten modificar una parte específica de un elemento. Los pseudoElementos son:
 - ::after -> coincide con el último hijo virtual del elemento seleccionado. Se usa generalmente para añadir contenido estético a un elemento, usando la propiedad CSS content.
 - ::before -> crea un pseudo-elemento que es el primer hijo del elemento seleccionado. Es usado normalmente para añadir contenido estético a un elemento, usando la propiedad content.  ::first-letter ? aplica reglas la primera letra del elemento.
 - ::first-line -> aplica reglas a la primera línea del elemento.  
 - ::selection -> aplica reglas a una porción de un documento que ha sido destacado (por ejemplo: selección con el mouse o algún otro puntero en un dispositivo) del usuario.

**6)** ¿Cómo se calcula la prioridad de una regla CSS? Expresarlo como una fórmula matemática.
Cuando tenemos una serie de reglas aplican sobre un mismo elemento, entra en juego el siguiente orden de prioridad:

 - **!important**: cuando un estilo es marcado como importante prevalecerá sobre los demás.
 - **Origen de las reglas**: Según el origen de la misma, siguiendo el siguiente orden: Reglas del Autor - Reglas del Lector - Reglas del Navegador.
 - **Peso de la regla**: una regla con mayor peso prevalecerá sobre otra de menor peso, teniendo en cuenta lo siguiente: Peso = ABC. Dónde:
	 - **A** = nº de selectores de ID.
	 - **B** = nº de selectores de CLASE.
	 - **C** = nº de selectores de HTML.

**7)** ¿Qué es el view port? ¿Cómo se configura? ¿qué problema soluciona?

El view port es el área de la página web que es vista por el usuario, es decir que va a ir variando dependiendo del dispositivo. Para tenerlo en cuenta y que el navegaor lo sepa manejar hay que agregar el siguiente meta:

**8)** ¿Qué son las media querys? Enumere los distintos tipos de medios y las principales características de cada uno de ellos.

Es una regla de CSS3 que permite aplicar ciertas propiedades a un elemento si se cumple una determinada condición. Su mayor uso es a la hora de aplicar estilos en caso de que la pantalla tenga una dimensión determinada, usada para hacer una web responsive, modificando tamaño, ubicación o comportamiento del elemento según el ancho de la pantalla por ejemplo ó si es una impresora.

**9)** ¿En qué circunstancias se pueden utilizar las variables css? ¿Qué problemas pueden traer aparejadas? ¿Cuándo consideras que sería bueno utilizarlas?

Las variables css pueden utilizarse cuando en sitios web complejos con una gran cantidad de código css es necesario repetir un valor debido a que el mismo se va a utilizar en diversas partes del documento. Esto es de gran utilidad, ya que en todos los casos en que se tenga que utilizar dicho valor, solo bastará con hacer referencia a la variable css declarada. Entonces, si el valor debiera ser modificado por alguna razon no es necesario realizar el cambio en todos los lugares que este aparezca. Solo alcanza con modificar el valor de la variable css. Un ejemplo de como se utilizan, Definición:

    root { 
    	--main-color: black; 
    }

uso de la variable css:

    h1 { 
    	background-color: var (--main-color); 
    }

Las variables css son establecidas mediante la notación de propiedades personalizadas. Esto quiere decir que deben ser declaradas dentro de un selector para fijar su alcance. En el ejemplo anterior, se declaró dentro del selector :root, el cual tiene un alcance global para todo el documento css. Las variables también respetan el concepto de cascada y heredan su valor de sus padres.

Los problemas que puede traer la utilización de variables css son los siguientes:

Debido a que son hereditarios los valores que puede tomar una variable en un determinado elemento, puede que se utilize el valor de una variable en un determinado selector, y este por no estar definido arriba en la jerarquía, de como resultado un valor inválido. Esto conllevaría a que la propiedad no se aplique como corresponde.
Puede haber dificultades para intrerpretar el código css si se usan demasiadas variables css y sus nombres no son tann explicativos.
Hay varios navegadores que aún no soportan variables css. Por lo tanto, las propiedades declaradas mediante variables css, no se reflejarán adecuadamente en estos navegadores.
En algunas ocasiones, puede que el uso de variables haga que el proceso de rederización de una página sea ejecutado más lentamente por el navegador.

**10)** CSS Grid Layout ¿Qué es? Explicar las reglas que intervienen en el armado de una grilla. ¿Qué ventajas y desventajas tiene frente a otros Layouts?

Grid Layout es un sistema de diseño css de los más potentes. Permite realizar diseños bidimensionales en los cuales los elementos pueden posicionarse mediante el uso de filas y columnas. Además este Layout ofrece la posibilidad de dividir una página web en áreas o regiones principales y definir la relación de los elementos en base al tamaño y el posicionamiento. Para ello se deben aplicar reglas css a un elemento definido como prinicipal (contenedor) y a los elementos secundarios (items). 

Las reglas que intervienen en el armado de una rejilla son las siguientes: 

1- Definir el *grid container*: Para ello se debe seleccionar un elemento y definir su propiedad display en grid.

    .grid-container {
		display:grid;
	} 
Los hijos directos del elemento *grid container* se convierten automáticamente en *grid items*.

2- Las líneas verticales de items se denominan *columns*.
Para definir la cantidad de columns que tendrá el container  y su ancho, podemos usar la siguiente regla: 

    .grid-container {
	    display:  grid;
	    grid-template-columns: 80px 50px;
	}
Donde definimos que el container tendrá dos columns con la primera de un ancho de 80px y la segunda de 50px. 

3- Las líneas horizontales de items se denominan *rows*, y lsu definición es similar a las columns: 

    .grid-container {
	    display: grid;
	    grid-template-rows: 20px 50px 20px;
	}
En este caso hemos definido 3 rows, donde la primera tiene un alto de 20px, la segunda de 50px, y la tercera un alto de 20px. 

4- El espacio entre rows o entre columns se denomina *grid gap*. Este puede ser definido específicamente para las columns o rows de la siguiente manera: 

    grid-column-gap: 1px;
    grid-row-gap: 2px;
Sino puede definirse para ambos usando la siguiente regla: 

    grid-gap: 1px;

5- Las líneas entre columnas se denominan *column lines*, y estas son utilizadas para indicar cuantas columnas ocupará un item. Por ejemplo: 

    .item1 {
	    grid-column-start: 1;
	    grid-column-end: 3;
	}
También de manera más elegante se puede definir de la siguiente manera: 

    .item1 {
	    grid-column: 1 / 5;
	}
Esto indica que el *item 1* comienza en la column line 1 y termina en la column line 5. 

6- Las líneas entre rows se denominan *row lines*, y estas son utilizadas para delimitar cuantas filas ocupará un item. Por ejemplo: 

    .item 1 {
	    grid-row: 2 / 4; 
	}
Esto indica que el *item1* comienza en la row line 2 y termina en la row line 4. 

7- También existe la propiedad *grid-area* que puede utilizarse para simplificar el uso de grid-column-start, grid-column-end, grid-row-start y grid-row-end. Ejemplo: 

    .item 1 {
	    grid-area: 1 / 2 / 5 / 6;
	}
Esto indica que el item 1 comienza en la row line 1 y en la column line 2; y termina en la row line 5 y en la column line 6. 

La propiedad grid-area permite además nombrar a los elementos de la grilla, logrando resultados interesantes. Por ejemplo: 

    .item1 { grid-area:  header; } 
    .item2 { grid-area:  menu; }
    .item3 { grid-area:  main; }
    .item4 { grid-area:  right; }
    .item5 { grid-area:  footer; }

    .grid-container {  
	    grid-template-areas: 
		    'header header header header header header'  
		    'menu main main main right right'   
		    'menu footer footer footer footer footer';
	}
	
**11)** ¿Qué puntos en común y en que se diferencian las Material Design Guidelines de Google y las Human Interface Guidelines de Apple?

Las Material Design Guidlines de Google y las Human Interface Guidlines de Apple comparten un objetivo en común, establecer reglas de diseño en las aplicaciones utilizadas en sus dispositivos con el fin de obtener una buena UX (User Experience).  Ambas buscan que sus aplicaciones sean fáciles de usar , que tengan una rápida interpretación y que el aprendizaje no sea una dificultad. Buscan que sus interfaces sean claras (texto leíble, uso de iconos representativos de su función, y no sobrecargar con demasiada decoración al usuario y hacer que este se pierda o se fatigue). Además, buscan que sus diseños permitan identificar rápidamente cuales son las partes funcionales de la aplicación, mediante el uso de colores que permitan resaltar estas secciones, e indicandole al usuario que puede interactuar con ellas. 
A pesar de que ambas apuntan a lo mismo, tienen características que las diferencian: 

En cuanto a la profundidad de los elementos, Google se ha inspirado en el movimiento de diseño plano y cree que los humanos deberían interactuar con sus componentes como si fueran hojas de papel apiladas una encima de la otra. La profundidad es táctil y hace que el usuario sienta que sostiene cada pantalla en la palma de su mano. 
Por su lado, Apple abarca una profundidad infinita en sus aplicaciones y utilizan componentes como sus botones de alerta y mensajes de texto con fondo borroso para crear la sensación de que los elementos están flotando y existen en su propio espacio. 

Si nos centramos en la animación, Google lo ve como una forma de mejorar la experiencia del usuario y dar vida a sus componentes. Esta es, con mucho, una postura mucho más humanista que la que tiene Apple sobre la animación. Google utiliza una animación única para expresar el tipo de "material" con el que estás interactuando. 
Por su parte, Apple tiene un enfoque sin sentido para la animación. Creen que la animación solo debería llevarte de A a B sin distraer al usuario del contenido real. Donde Google tiende a apoyarse en el lado humanista, Apple tiende a apoyarse en el lado inorgánico. 

Observando la navegación, Google  brinda a los diseñadores más flexibilidad para la personalización. Sin embargo, esto hace que sea un poco más exigente para los usuarios comprender los patrones de navegación de una aplicación. Google cree que la navegación debería ser obvia y que puede ser en muchos lugares diferentes. Puede usar una variedad de componentes, tales como: botones de acción que revelan opciones, tarjetas que conducen a páginas similares al concepto de un tablero de instrumentos, usando pestañas, e incluso resaltando secciones utilizando códigos de color con iconos en una vista de lista.
Por lo contrario,  Apple utiliza un sistema de navegación muy simple que es fácil de entender para todos los usuarios. Usan una "barra de pestañas" que se adjunta a la parte inferior de la pantalla con las funciones principales de una aplicación. Por lo general, no contiene más de 5 funciones principales, un icono de hamburguesa a veces aparece en la barra de pestañas para elementos de navegación menos importantes, como es el caso de la aplicación de música de Apple. La idea de que una aplicación no debe tener más de 5 funciones principales obliga a los diseñadores a pensar detenidamente sobre las características de su aplicación (es decir, ¡solo obtienes 5!). Apple también usa "pestañas" como la especificación de diseño de material de Google, pero en su lugar utiliza un componente llamado "control segmentado". Permitiendo solo hasta 3 controles segmentados como máximo, restringiendo las opciones del usuario y los diseñadores.

Además, la visión de Google y Apple difiere mucho en cuanto al uso del icono de la hamburguesa. Google a menudo utiliza el menú de hamburguesas para su navegación principal. Una vez que haces clic en la hamburguesa, se abre un "cajón" como lo llaman o, a la inversa, un "navegador lateral" para Apple. Este cajón a menudo contiene una imagen de perfil del usuario, opciones de inicio de sesión, nombre de perfil y una lista basada en iconos de la navegación principal. Sin embargo, Apple no está de acuerdo con este sentimiento, ya que considera que los elementos de navegación principales deben estar presentes en el primer plano y que la hamburguesa debe usarse solo como un lugar para almacenar funciones que no son tareas diarias realizadas por el usuario. Apple utiliza su función de navegación lateral para almacenar los artículos que el usuario desee fuera del sitio. (ej: la hamburguesa de iOS facebook abre un navegador lateral que contiene preferencias y detalles de chat) Lo hacen para que los usuarios no se distraigan con las opciones y tengan una ruta enfocada (a través de la barra de pestañas inferior) a seguir para que los usuarios completen las funciones principales.

Con respecto a la tipografia. Cada uno tiene sus propias fuentes predeterminadas que se recomiendan para los diseñadores, la cual ayuda a crear una sensación de coherencia y apariencia nativa en toda la plataforma. Google sugiere Roboto como su fuente de sistema por defecto. Mientras que Apple prefiere la fuente San Francisco.
