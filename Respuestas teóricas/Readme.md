**1)** �Qu� significa que los estilos se apliquen en cascada? �c�mo aplica la herencia de estilos?

Los elementos en los niveles bajos de la jerarqu�a heredan los estilos asignados a los elementos en los niveles m�s abajo.
Los estilos heredados de elementos en niveles superiores se pueden reemplazar por nuevos estilos definidos para los elementos en niveles inferiores de la jerarqu�a. Algunos estilos no pueden ser heredadas, como padding o margin. Un hijo que hereda una propiedad, puede cambiarla si se le define algo distinto (de lo m�s general a lo m�s particular). Es posible forzar la herencia con �inherit�.

**2)** �Por qu� es necesario utilizar un CSS de Reset?

El CSS de Reset lo que hace es "limpia" todas los estilos que tenga la p�gina, para que puedan ser configurados a gusto del desarrollador. Esto se da por que la mayor�a de las veces distintos navegadores muestran los estilos de muy diferente manera y a su vez le aplican ciertos estilos a algunos elementos por razones de compatibilidad.

**3)** �Qu� es el CSS box model?

EL CSS Box Model, es el �contenedor� de cada elemento HTML. Cada elemento es considerado como un bloque/caja que est� formado por: el contenido (el elemento en si), padding, border y margin.

**4)** �Cu�l es el c�digo que hay que insertar en una hoja de estilo para poder usar WebFonts?

A la hora de querer usar una fuente que no se encuentra instalada en el server (o donde se tenga alojada la web), se puede incluir el archivo de las mismas en el CSS.
El c�digo es:
@font-face {
    font-family: miFuente;
    src: url(mifuente.woff);
}
Existen varios formatos de fuente (TTF, OTF, WOFF, WOFF 2.0), pero no todas son compatibles con los navegadores

**5)** �Qu� son y para qu� sirven los pseudoElementos?

Son elementos que permiten modificar una parte espec�fica de un elemento. Los pseudoElementos son:
    � ::after ? coincide con el �ltimo hijo virtual del elemento seleccionado. Se usa generalmente para a�adir contenido est�tico a un elemento, usando la propiedad CSS content
    � ::before  ? crea un pseudo-elemento que es el primer hijo del elemento seleccionado. Es usado normalmente para a�adir contenido est�tico a un elemento, usando la propiedad content.
    � ::first-letter ? aplica reglas la primera letra del elemento.
    � ::first-line ? aplica reglas a la primera l�nea del elemento.
    � ::selection ?  aplica reglas a una porci�n de un documento que ha sido destacado (por ejemplo: selecci�n con el mouse o alg�n otro puntero en un dispositivo) del usuario.

**6)** �C�mo se calcula la prioridad de una regla CSS? Expresarlo como una f�rmula matem�tica.

**7)** �Qu� es el view port? �C�mo se configura? �qu� problema soluciona?

El view port es el �rea de la p�gina web que es vista por el usuario, es decir que va a ir variando dependiendo del dispositivo.
Para tenerlo en cuenta y que el navegaor lo sepa manejar hay que agregar el siguiente meta:
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

**8)** �Qu� son las media querys? Enumere los distintos tipos de medios y las principales caracter�sticas de cada uno de ellos.

Es una regla de CSS3 que permite aplicar ciertas propiedades a un elemento si se cumple una determinada condici�n. Su mayor uso es a la hora de aplicar estilos en caso de que la pantalla tenga una dimensi�n determinada, usada para hacer una web responsive, modificando tama�o, ubicaci�n o comportamiento del elemento seg�n el ancho de la pantalla por ejemplo � si es una impresora.


**9)** �En qu� circunstancias se pueden utilizar las variables css? �Qu� problemas pueden traer aparejadas? �Cu�ndo consideras que ser�a bueno utilizarlas?

Las variables css pueden utilizarse cuando en sitios web complejos con una gran cantidad de c�digo css es necesario repetir un valor debido a que el mismo se va a utilizar en diversas partes del documento. 
Esto es de gran utilidad, ya que en todos los casos en que se tenga que utilizar dicho valor, solo bastar� con hacer referencia a la variable css declarada. Entonces, si el valor debiera ser modificado por alguna razon no es necesario realizar el cambio en todos los lugares que este aparezca. Solo alcanza con modificar el valor de la variable css. 
Un ejemplo de como se utilizan, 
Definici�n: 
		 :root {
			--main-color: black;
		 }

uso de la variable css: 
		h1 {
			background-color: var (--main-color);
 		}

Las variables css son establecidas mediante la notaci�n de propiedades personalizadas. Esto quiere decir que deben ser declaradas dentro de un selector para fjar su alcance. En el ejemplo anterior, se declar� dentro del selector :root, el cual tiene un alcance global para todo el documento css. 
Las variables tambi�n respetan el concepto de cascada y heredan su valor de sus padres. 


Los problemas que puede traer la utilizaci�n de variables css son los siguientes: 
- Debido a que son hereditarios los valores que puede tomar una variable en un determinado elemento, puede que se utilize el valor de una variable en un determinado selector, y este por no estar definido arriba en la jerarqu�a, de como resultado un valor inv�lido. Esto conllevar�a a que la propiedad no se aplique como corresponde. 
- Puede haber dificultades para intrerpretar el c�digo css si se usan demasiadas variables css y sus nombres no son tann explicativos. 
- Hay varios navegadores que a�n no soportan variables css. Por lo tanto, las propiedades declaradas mediante variables css, no se reflejar�n adecuadamente en estos navegadores.
- En algunas ocasiones, puede que el uso de variables haga que el proceso de rederizaci�n de una p�gina sea ejecutado m�s lentamente por el navegador. 


**10)** CSS Grid Layout �Qu� es? Explicar las reglas que intervienen en el armado de una grilla. �Qu� ventajas y desventajas tiene frente a otros Layouts?


**11)** �Qu� puntos en com�n y en que se diferencian las Material Design Guide lines de Google y las Human Interface Guidelines de Apple?
