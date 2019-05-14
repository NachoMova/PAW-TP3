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






**11)** ¿Qué puntos en común y en que se diferencian las Material Design Guide lines de Google y las Human Interface Guidelines de Apple?
