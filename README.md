# PAW-TP3 Diseño Web: Hojas de Estilos, Programación FrontEnd: Introducción a JavaScript
Fecha de entrega: 10/05/2019
<br><br>
Objetivo: Iniciarse en los primeros conceptos relacionados con el diseño orientado a la web. Iniciarse en la programación del lado del cliente. Conocer los arboles DOM y DOMCSS. Sin olvidarse nunca de la UX y el RWD.
<br><br>
## Consignas
Dentro del directorio de cada ejercicio se podrá acceder a la consigna del mismo.
<br><br>
## Guía de ejecución para los ejercicios
Para poder probar todos los ejercicios incluidos en el presente trabajo práctico es necesario seguir los siguientes pasos:<br>
**1-** Tener insatalado cualquier sistema operativo.<br>
**2-** Tener instalado PHP 7.0 o superior.<br>
**3-** Descargar el repositorio.<br>
**4-** Ingresar a través de la consola (en windows desde cmd.exe) al directorio del ejercicio a ejecutar (Por ejemplo /PAW-TP3/Ejercicio1).<br>
**5-** Una vez en la ubicación indicada en el paso 4, iniciar el servidor Standalone mediante la ejecución del siguiente comando:<br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; ~$ php -S localhost:puerto<br>
Trate de que el puerto seleccionado sea un puerto efímero (mayor a 1024)<br>
**6-** Por último acceda a su navegador de preferencia (Chrome, Firefox, Opera, Safari, Edge, etc.) e ingrese la siguiente URL en la barra de direcciones: <br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;localhost:puerto<br>
Luego de cargar la página en su navegador, interactue con ella para realizar las pruebas necesarias.<br>
**7-** Para finalizar la ejecución del servidor basta con presionar **ctrl+c** en la consola donde se encuentra corriendo.
<br><br>
**Aclaración:** Los ejercicios también pueden ser ejecutados mediante la ejecución del archivo index.html ubicado dentro del directorio del ejercicio. Esto es válido para todos a excepción del ejercicio 4, el cuál genera un error en el navegador Chrome al intentar leer el archivo ".json". Para unificar el método de ejecución de los mismos se decidió ejecutarlos a partir de un servidor Standalone.

##Teóricas

**1)** ¿Qué significa que los estilos se apliquen en cascada? ¿cómo aplica la herencia de estilos?

Los elementos en los niveles bajos de la jerarquía heredan los estilos asignados a los elementos en los niveles más abajo.
Los estilos heredados de elementos en niveles superiores se pueden reemplazar por nuevos estilos definidos para los elementos en niveles inferiores de la jerarquía. Algunos estilos no pueden ser heredadas, como padding o margin. Un hijo que hereda una propiedad, puede cambiarla si se le define algo distinto (de lo más general a lo más particular). Es posible forzar la herencia con “inherit”.

**2)** ¿Por qué es necesario utilizar un CSS de Reset?

El CSS de Reset lo que hace es "limpia" todas los estilos que tenga la página, para que puedan ser configurados a gusto del desarrollador. Esto se da por que la mayoría de las veces distintos navegadores muestran los estilos de muy diferente manera y a su vez le aplican ciertos estilos a algunos elementos por razones de compatibilidad.

**3)** ¿Qué es el CSS box model?

EL CSS Box Model, es el “contenedor” de cada elemento HTML. Cada elemento es considerado como un bloque/caja que está formado por: el contenido (el elemento en si), padding, border y margin.

**4)** ¿Cuál es el código que hay que insertar en una hoja de estilo para poder usar WebFonts?

A la hora de querer usar una fuente que no se encuentra instalada en el server (o donde se tenga alojada la web), se puede incluir el archivo de las mismas en el CSS.
El código es:
@font-face {
    font-family: miFuente;
    src: url(mifuente.woff);
}
Existen varios formatos de fuente (TTF, OTF, WOFF, WOFF 2.0), pero no todas son compatibles con los navegadores

**5)** ¿Qué son y para qué sirven los pseudoElementos?

Son elementos que permiten modificar una parte específica de un elemento. Los pseudoElementos son:
    • ::after → coincide con el último hijo virtual del elemento seleccionado. Se usa generalmente para añadir contenido estético a un elemento, usando la propiedad CSS content
    • ::before  → crea un pseudo-elemento que es el primer hijo del elemento seleccionado. Es usado normalmente para añadir contenido estético a un elemento, usando la propiedad content.
    • ::first-letter → aplica reglas la primera letra del elemento.
    • ::first-line → aplica reglas a la primera línea del elemento.
    • ::selection →  aplica reglas a una porción de un documento que ha sido destacado (por ejemplo: selección con el mouse o algún otro puntero en un dispositivo) del usuario.

**6)** ¿Cómo se calcula la prioridad de una regla CSS? Expresarlo como una fórmula matemática.

**7)** ¿Qué es el view port? ¿Cómo se configura? ¿qué problema soluciona?

El view port es el área de la página web que es vista por el usuario, es decir que va a ir variando dependiendo del dispositivo.
Para tenerlo en cuenta y que el navegaor lo sepa manejar hay que agregar el siguiente meta:
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

**8)** ¿Qué son las media querys? Enumere los distintos tipos de medios y las principales características de cada uno de ellos.

Es una regla de CSS3 que permite aplicar ciertas propiedades a un elemento si se cumple una determinada condición. Su mayor uso es a la hora de aplicar estilos en caso de que la pantalla tenga una dimensión determinada, usada para hacer una web responsive, modificando tamaño, ubicación o comportamiento del elemento según el ancho de la pantalla por ejemplo ó si es una impresora.


**9)** ¿En qué circunstancias se pueden utilizar las variables css? ¿Qué problemas pueden traeraparejadas? ¿Cuándo consideras que sería bueno utilizarlas?


**10)** CSS Grid Layout ¿Qué es? Explicar las reglas que intervienen en el armado de una grilla. ¿Qué ventajas y desventajas tiene frente a otros Layouts?

**11)** ¿Qué puntos en común y en que se diferencian las Material Design Guide lines de Google y las Human Interface Guidelines de Apple?
