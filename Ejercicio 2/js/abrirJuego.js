var window = window || {},
    document = document || {},
    console = console || {},
    Juego = Juego || {};

  //Función que arma el contenedor del juego
  Juego.armarJuego = function(contenedor){
    Juego.contenedor = contenedor; 
  	window.addEventListener("DOMContentLoaded", function () { //Espero a que se cargue el contenido html
  		if (typeof Juego.contenedor === "string") {
  			Juego.contenedor = document.getElementById(Juego.contenedor); //Obtengo el contenedor del juego
  		}
  		var seccion = document.createElement("section");
  		seccion.classList.add("tateti");
  		Juego.contenedor.appendChild(seccion); //Agrego la sección que contendrá al juego
      Juego.construirMenu(seccion); //Llamo a la función para crear el menú. 
  	});
  }  

  //Funcion que construye el menú desplegable del juego
  Juego.construirMenu = function (sec) {
    var listaItemsMenu = ["Juego", "Configurar juego"]; //lista de items del menú
    var listaSubItemsMenu = ["Iniciar juego", "Reiniciar marcador", "Juego nuevo"]; //lista de subitems de la opción 1 del menú
    
    //nav para contener el menú
    var menuNav = document.createElement("nav");
    menuNav.classList.add("menuNavegacion");

    //ul que actúa como contenedor de los items del menú
    var contMenu = document.createElement("ul");
    contMenu.classList.add("contenedorMenu");

    //Creo un item de menú por cada elemento declarado en itemsMenu (Opciones del menú)
    listaItemsMenu.forEach(function (element) {  
      let itemMenu = document.createElement("li"); //li que contiene una opción del menú
      itemMenu.classList.add("itemMenu");
      let boton = document.createElement("button"); //opcion del menú (boton)
      boton.classList.add("opcionMenu");
      let text = document.createTextNode(element); //texto de opción del menú
      boton.appendChild(text); //agrego el texto de opción del menú al link
      itemMenu.appendChild(boton); //agrego el link dentro del li
      contMenu.appendChild(itemMenu); //finalmente agrego el li dentro del ul
    });
    menuNav.appendChild(contMenu); //agrego el contenedor ul dentro del nav
    sec.appendChild(menuNav);//agrego el nav dentro de la sección del juego
    
    //ul que actúa como contenedor de los subitems de la opción 1 del menú
    var contSubMenu = document.createElement("ul");
    contSubMenu.classList.add("contenedorSubMenu");

    listaSubItemsMenu.forEach(function (element) {
      let subItemMenu = document.createElement("li"); //li que contiene un subitem de opción de menú
      subItemMenu.classList.add("subItemMenu");
      let link = document.createElement("a"); //subItem de la opción del menú 
      link.setAttribute("href", "#");
      let text = document.createTextNode(element); //texto del subItem
      link.appendChild(text); //agrego el texto del subItem al link
      subItemMenu.appendChild(link); //agrego el link dentro del li
      contSubMenu.appendChild(subItemMenu); //finalmente agrego el li dentro del ul
    });

    var item1Menu = document.querySelectorAll(".itemMenu")[0]; //recupero el li que contiene la opción 1 del menú
    item1Menu.appendChild(contSubMenu); //agrego el contenedor de subitems dentro del li de la opción 1 del menú

    //Creo los eventListener para los botones del menú
    var element = document.querySelectorAll(".subItemMenu a")[0]; 
    element.addEventListener("click",Juego.iniciarJuego); //Defino el evento del subItem Iniciar Juego
  
    element = document.querySelectorAll(".opcionMenu")[1];
    element.addEventListener("click", Juego.prepararJuego); //Defino el evento para el boton Preparar Juego
  }   


  // Funcion que ofrece un formulario para configurar las opciones del juego e ingresar el nombre de jugadores
  Juego.prepararJuego = function (event) {
    var botonPreparJuego = event.target;
    botonPreparJuego.removeEventListener("click", Juego.prepararJuego); //No permito que vuelvan a apretar configuración

    //Cracion del formulario para configurar el juego
    var formConfig = document.createElement("div"); //creo el formulario
    formConfig.classList.add("formConfiguracion");

    var tituloForm = document.createElement("label"); //creo titulo de formulario
    tituloForm.classList.add("tituloForm");
    tituloForm.appendChild(document.createTextNode("CONFIGURAR JUEGO"));
    formConfig.appendChild(tituloForm); //Agrego el título al formulario

    var labelJug = document.createElement("label"); //creo label para jugador 1
    labelJug.classList.add("labelJugador");
    labelJug.appendChild(document.createTextNode("Jugador 1: "));
    var inputJug = document.createElement("input"); //creo input para jugador 1
    inputJug.classList.add("inputJugador");
    inputJug.setAttribute("type", "text");
    inputJug.setAttribute("placeholder", "Nombre de jugador 1");
    inputJug.setAttribute("maxlength", "10");
    labelJug.appendChild(inputJug);
    formConfig.appendChild(labelJug); //Agrego el label junto con el input al form

    labelJug = document.createElement("label"); //creo label para jugador 2
    labelJug.classList.add("labelJugador");
    labelJug.appendChild(document.createTextNode("Jugador 2: "));
    inputJug = document.createElement("input"); //creo input para jugador 2
    inputJug.classList.add("inputJugador");
    inputJug.setAttribute("type", "text");
    inputJug.setAttribute("placeholder", "Nombre de jugador 2");
    inputJug.setAttribute("maxlength", "10");
    labelJug.appendChild(inputJug);
    formConfig.appendChild(labelJug); //Agrego el label junto con el input al form

    var labelTablero = document.createElement("label"); //creo label para tamaño de tablero
    labelTablero.classList.add("labelTablero");
    labelTablero.appendChild(document.createTextNode("Tablero:"));
    var divRadio = document.createElement("div"); //creo div para agrupar los radio buttons
    divRadio.classList.add("divRadio");
    var divTableroForm = document.createElement("div"); //creo div para agrupar el label tamaño de tablero con los radio buttons
    divTableroForm.classList.add("divTableroForm");

    var inputTablero = document.createElement("input"); //Creo input para radio button
    inputTablero.classList.add("inputTablero");
    inputTablero.setAttribute("type", "radio");
    inputTablero.setAttribute("checked", "checked");
    inputTablero.setAttribute("name", "opciones");
    inputTablero.setAttribute("value", "3x3");
    divRadio.appendChild(inputTablero); //Agrego el input radio al div 
    divRadio.appendChild(document.createTextNode("3x3")); //Agrego a su lado la opcion del radio button
    divRadio.appendChild(document.createElement("br"));

    inputTablero = document.createElement("input"); //Creo input para radio button
    inputTablero.classList.add("inputTablero");
    inputTablero.setAttribute("type", "radio");
    inputTablero.setAttribute("name", "opciones");
    inputTablero.setAttribute("value", "4x4");
    divRadio.appendChild(inputTablero); //Agrego el input radio al div 
    divRadio.appendChild(document.createTextNode("4x4"));//Agrego a su lado la opcion del radio button
    divRadio.appendChild(document.createElement("br"));


    inputTablero = document.createElement("input");//Creo input para radio button
    inputTablero.classList.add("inputTablero");
    inputTablero.setAttribute("type", "radio");
    inputTablero.setAttribute("name", "opciones");
    inputTablero.setAttribute("value", "5x5");
    divRadio.appendChild(inputTablero); //Agrego el input radio al div
    divRadio.appendChild(document.createTextNode("5x5"));//Agrego a su lado la opcion del radio button
    divRadio.appendChild(document.createElement("br"));

    inputTablero = document.createElement("input");//Creo input para radio button
    inputTablero.classList.add("inputTablero");
    inputTablero.setAttribute("type", "radio");
    inputTablero.setAttribute("name", "opciones");
    inputTablero.setAttribute("value", "6x6");
    divRadio.appendChild(inputTablero);  //Agrego el input radio al div
    divRadio.appendChild(document.createTextNode("6x6")); //Agrego a su lado la opcion del radio button

    divTableroForm.appendChild(labelTablero); //Agrego el label de tamaño de tablero al div agrupador
    divTableroForm.appendChild(divRadio); //Agrego el div que contiene los radio buttons al div agrupador
    formConfig.appendChild(divTableroForm); //Agrego el div agrupador al form

    var labelCantFichas = document.createElement("label"); //Creo label para cantidad de Fichas en linea
    labelCantFichas.classList.add("labelCantidadFichas");
    labelCantFichas.appendChild(document.createTextNode("Fichas en línea: "));
    var inputCantFichas = document.createElement("input"); //Creo input para cantidad de Fichas en linea
    inputCantFichas.classList.add("inputCantidadFichas");
    inputCantFichas.setAttribute("type","number");
    inputCantFichas.setAttribute("min","3");
    inputCantFichas.setAttribute("max","6");
    inputCantFichas.setAttribute("value","3");
    labelCantFichas.appendChild(inputCantFichas); 
    formConfig.appendChild(labelCantFichas); //Agrego el label junto con el input al formulario

    var divBotonesForm = document.createElement("div"); //Creo el div que agrupa el boton aceptar y cancelar
    divBotonesForm.classList.add("divBotonesForm");
    var boton = document.createElement("button"); //Creo el boton Aceptar
    boton.classList.add("botonForm");
    boton.appendChild(document.createTextNode("ACEPTAR"));
    divBotonesForm.appendChild(boton); //Agrego el boton Aceptar al div agrupador
    boton = document.createElement("button"); //Creo el boton Cancelar
    boton.classList.add("botonForm");
    boton.appendChild(document.createTextNode("CANCELAR"));
    divBotonesForm.appendChild(boton); //Agrego el boton Cancelar al div agrupador

    formConfig.appendChild(divBotonesForm); //Agrego el div agrupador al formulario

    var secF = document.createElement("section"); //Creo la sección para alojar el formulario de configuación
    secF.classList.add("seccionForm");
    secF.appendChild(formConfig); //Agrego el formulario a la seccion contenedora

    var sec = document.querySelectorAll(".tateti")[0];
    sec.appendChild(secF); //Agrego la nueva sección Formulario a la seccion Tateti 

    boton = document.querySelectorAll(".botonForm")[0];
    boton.addEventListener("click", Juego.juegoConfigurado);

    boton = document.querySelectorAll(".botonForm")[1];
    boton.addEventListener("click", Juego.cancelarConfigurar);
  }

  //Esta funcion se dispara cuando presionan el botón ACEPTAR del formulario de configuración
  Juego.juegoConfigurado = function (event) {
    var cantFichas = document.querySelector(".inputCantidadFichas").value; //Obtengo la cantidad de fichas ingresada
    var tablero = document.querySelectorAll(".inputTablero"); //Obtengo las opciones de tamaño de tablero
    var tamañoTablero; 
    var nomJug1 = document.querySelectorAll(".inputJugador")[0].value;
    var nomJug2 = document.querySelectorAll(".inputJugador")[1].value;

    //Chequeo que opción de tamaño de tablero fue seteada (obtengo su valor)
    for (var i=0; i<tablero.length; i++) {
        if ( tablero[i].checked ) { 
            tamañoTablero = tablero[i].value; 
            break; 
        }
    }

    var bienConfigurado = true;
    var mensaje;
    if (nomJug1 != "" && nomJug2 != ""){ //Verifico que los nombres de los jugadores no sean vacíos
      if (nomJug1 != nomJug2){ //Verifico además que los nombres no sean iguales
        //Verifico que la cantidad de fichas esté entre el Min y el Max y además que no sea mayor que el tamaño del tablero
        if (cantFichas<3 || cantFichas>6){
          mensaje = "La cantidad de fichas debe estar comprendida entre "+Juego.fichasMin+" y "+Juego.fichasMax;
          bienConfigurado = false;    
        }else{
          if (cantFichas>tamañoTablero[0]) {
          mensaje = "La cantidad de fichas no debe ser mayor al tamaño del tablero seleccionado";
          bienConfigurado = false;
          }
        }
      }else{
        mensaje = "Los nombres de los jugadores no pueden ser iguales";
        bienConfigurado = false;
      }
    }else{
      mensaje = "Los nombres de los jugadores no pueden ser vacíos";
      bienConfigurado = false;
    }
    

    if (bienConfigurado){ //Si no hubo un error de configuración, cerramos el formulario de configuracion
      var botonConfigurar = document.querySelectorAll(".opcionMenu")[1]; 
      botonConfigurar.addEventListener("click", Juego.prepararJuego); //Activo el event Listener del boton Configurar Juego nuevamente
      var secForm = document.querySelectorAll(".seccionForm")[0]; 
      secForm.parentNode.removeChild(secForm); //Elimino la seccion de configuración de juego

      Juego.nombrejug1 = nomJug1; //Seteo el nombre del jugador 1
      Juego.nombrejug2 = nomJug2; //Seteo el nombre del jugador 2
      Juego.tamañoTablero = tamañoTablero; //Seteo el tamaño de tablero elegido
      Juego.cantFichas = cantFichas; //Seteo la cantidad de fichas en línea elegidas
    }else{ //Si hubo un error, lo muestro por pantalla y mantengo el formulario en pantalla
      window.alert(mensaje);
    }
    
  }

  //Esta funcion se dispara cuando presionan el botón CANCELAR del formulario de configuración
  Juego.cancelarConfigurar = function (event) {
    var botonConfigurar = document.querySelectorAll(".opcionMenu")[1];
    botonConfigurar.addEventListener("click", Juego.prepararJuego); //Activo el evento del botoón Preparar Juego
    var secForm = document.querySelectorAll(".seccionForm")[0];
    secForm.parentNode.removeChild(secForm); //Elimino la sección que contiene el formulario d e configuración
  }

  //Función que permite Iniciar el juego (si no se configuró el juego, arranca con valores por default)
  Juego.iniciarJuego = function (event) {
    var botIni = event.target;
    botIni.removeEventListener("click", Juego.iniciarJuego); //Desactivo el evento del boton Iniciar Juego
    var botonConfig = document.querySelectorAll(".opcionMenu")[1]; 
    botonConfig.removeEventListener("click", Juego.prepararJuego ); //Desactivo el evento del boton Configurar
    var botonReiniciar = document.querySelectorAll(".subItemMenu a")[1];
    botonReiniciar.addEventListener("click", Juego.reiniciarMarcador); //Activo el evento del subItem Reinicar Marcador
    var botonJuegoNuevo = document.querySelectorAll(".subItemMenu a")[2];
    botonJuegoNuevo.addEventListener("click", Juego.juegoNuevo); //Defino el evento del subItem Juego Nuevo

    var seccionTateti = document.querySelector(".tateti");
    var secJuego = document.createElement("section"); //Creo la seccion que para contener el tablero y la tabla de jugadores
    secJuego.classList.add("seccionJuego");
    Juego.armarTablero(secJuego); //Armo el tablero
    Juego.armarTablaJugadores(secJuego); //Armo la tabla de jugadores
    seccionTateti.appendChild(secJuego);
  }

  //Funcion que permite armar el tablero con el tamaño seteado por el usuario
  Juego.armarTablero = function (sec){
    var contTablero = document.createElement("div"); //Creo el contenedor del tablero
    contTablero.classList.add("contenedorTablero"); 
    var tab = Juego.tablero.find(tam => tam.tab === Juego.tamañoTablero);
    var alto = tab.alto; //Obtengo alto del tablero
    var ancho = tab.ancho; //Obtengo ancho del tablero

    //Creo los divs que contendran cada casillero del tablero
    for (var i=0; i<alto; i++){
      for(var j=0; j<ancho; j++){
        var conImg = document.createElement("div"); //creo contenedor de casillero
        conImg.classList.add("contenedorImagen");
        conImg.classList.add("vacio");
        conImg.addEventListener("click", Juego.setCasillero);
        conImg.style.setProperty("background-color", "white");
        contTablero.appendChild(conImg);
      }
    }
  
    //Distribuyo los casilleros uniformemente con el alto y ancho fijado    
    contTablero.style.setProperty('grid-template-columns', `repeat(${alto},1fr)`);
    contTablero.style.setProperty("grid-template-rows", `repeat(${alto} , 1fr)`);
    sec.appendChild(contTablero);
  }

  //Funcion que permite armar la tabla de jugadores
  Juego.armarTablaJugadores = function(sec){
    var tabla = document.createElement("table");
    tabla.classList.add("tablaJugadores");
    tabla.setAttribute("border", "1");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.setAttribute("colspan", "2");
    th.setAttribute("scope", "colgroup");
    th.appendChild(document.createTextNode("PARTIDAS GANADAS"));
    tr.appendChild(th);
    thead.appendChild(tr);

    tr = document.createElement("tr");
    th = document.createElement("th");
    th.classList.add("jugadorActual");
    th.setAttribute("scope", "col");
    th.appendChild(document.createTextNode(Juego.nombrejug1));
    tr.appendChild(th);
    thead.appendChild(tr);

    th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.appendChild(document.createTextNode(Juego.nombrejug2));
    tr.appendChild(th);
    thead.appendChild(tr);

    tabla.appendChild(thead);

    var tbody = document.createElement("tbody");
    tr = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute("align", "center");
    td.appendChild(document.createTextNode(Juego.puntosJugador1));
    tr.appendChild(td);

    td = document.createElement("td");
    td.setAttribute("align", "center");
    td.appendChild(document.createTextNode(Juego.puntosJugador2));
    tr.appendChild(td);

    tbody.appendChild(tr);
    tabla.appendChild(tbody);

    sec.appendChild(tabla);
  }

  //Funcion que permite reiniciar el marcador de los jugadores y limpiar tablero
  Juego.reiniciarMarcador = function (event) {
    Juego.puntosJugador1 = 0; //Reinicio los puntos de jugador 1
    Juego.puntosJugador2 = 0; //Reinicio los puntos de jugador 2
    var puntaje = document.querySelectorAll("td");
    puntaje[0].innerHTML = 0; //Pongo los puntos de Jugador 1 en cero (Tabla jugadores)
    puntaje[1].innerHTML = 0; //Pongo los puntos de Jugador 2 en cero (Tabla jugadores)
    Juego.limpiarTablero();
  }

  //Funcion que se dispara al presionar JuegoNuevo (reestablece valores por default y habilita para configurar y jugar nuevamente)
  Juego.juegoNuevo = function (event) {
    var botonJuegoNuevo = event.target;
    botonJuegoNuevo.removeEventListener("click", Juego.juegoNuevo); //Desactivo el evento del boton Juego Nuevo
    var botonReiniciar = document.querySelectorAll(".subItemMenu a")[1];
    botonReiniciar.removeEventListener("click", Juego.reiniciarMarcador); //Desactivo el evento del boton reiniciar Marcador
    var botonIniciar = document.querySelectorAll(".subItemMenu a")[0];
    botonIniciar.addEventListener("click", Juego.iniciarJuego); //Activo el evento del boton Iniciar juego
    var botonConfigurar = document.querySelectorAll(".opcionMenu")[1];
    botonConfigurar.addEventListener("click", Juego.prepararJuego); //Activo el evento del boton Preparar Juego
    var seccJuego = document.querySelector(".seccionJuego");
    seccJuego.parentNode.removeChild(seccJuego); //Elimino la seccion juego

    //Reinicio todas las variables del juego a sus valores por default
    Juego.reiniciarValoresDefault();
  }

  //Fuuncion que inicializa las variables del juego a los valores por default
  Juego.reiniciarValoresDefault = function () {
    Juego.nombrejug1 = Juego.JUGADOR_UNO_DEFAULT;
    Juego.nombrejug2 = Juego.JUGADOR_DOS_DEFAULT;
    Juego.tamañoTablero = Juego.TAMAÑO_TABLERO_DEFAULT;
    Juego.cantFichas = Juego.CANT_FICHAS_DEFAULT;
    Juego.puntosJugador1 = 0;
    Juego.puntosJugador2 = 0;
    Juego.turno = 1;
  }

   
  //Funcion que verifica si hay ganador buscando horizontalmente en el tablero (true = ganador , false = no hay ganador)
  Juego.verificarHorizonatal = function(cas){
    var cont = 1;
    var tab = Juego.tablero.find(tam => tam.tab === Juego.tamañoTablero);
    var ancho = tab.ancho; //Obtengo el ancho del tablero
    for(var i=1; i<cas.length; i++){ //Recorro el tablero 
      if((i % ancho) != 0){ //Si no es el último casillero de la fila
        if (cas[i-1].className.indexOf("vacio") == -1){ //Si no es vacío
          if(cas[i-1].className == cas[i].className){ //Chequeo si el valor del casillero es igual al siguiente
            cont = cont +1; //Cuento cantidad de casilleros consecutivos iguales
            if(cont == Juego.cantFichas){ //Si hay tantos casilleros iguales como cantidad de fichas en línea seteados, devuelvo true
              return true;
            }
          }else{
            cont = 1;
          }
        }else{
          cont = 1;
        }
        
      }else{ //Si llegué al extremo, reinicio el contador
        cont = 1;
      }
    }
    return false; //Si no hay ganador, devuelvo false
  }

  //Funcion que verifica si hay ganador buscando verticalmente en el tablero
  Juego.verificarVertical = function(cas){
    var cont = 1; //Inicializo el contador de casilleros consecutivos iguales
    var desp = 0; //Inicializo el desplazador (utilizado para moverme verticalmente)
    var tab = Juego.tablero.find(tam => tam.tab === Juego.tamañoTablero);
    var alto = tab.alto; //Obtengo el alto del tablero
    for(var i=0; i<alto; i++){ //Recorro el tablero horizontalmente
      for(var j=0; j<alto-1; j++){ //Recorro el tablero verticalmente
        if (cas[i+desp].className.indexOf("vacio") == -1){ //Si no es vacío
          if(cas[i+desp].className == cas[i+desp+alto].className){ //Chequeo si el valor del casillero es igual al siguiente
            cont = cont +1; //Cuento la cantidad de casilleros consecutivos iguales
            if (cont == Juego.cantFichas){
              return true; //Si hay tantos casilleros iguales como cantidad de fichas en línea seteados, devuelvo true
            }
          }else{
            cont = 1; //reinicio contador
          }
        }else{
          cont = 1; //reinicio contador
        }
        desp = desp + alto; //realizo un desplazamiento para poder moverme verticalmente
      }
      cont = 1; //reinicio contador
      desp = 0; //reinicio desplazamiento
    }  

    return false; //Si no hay ganador, devuelvo false
  }

  //Funcion que verifica si hay ganador buscando en diagonal sobre el tablero
  Juego.verificarDiagonal = function (cas) {
    var cont = 1; //Inicializo el contador de casilleros consecutivos iguales
    var despd = 0; //Inicializo el desplazador (utilizado para moverme en diagonal)
    var tab = Juego.tablero.find(tam => tam.tab === Juego.tamañoTablero);
    var alto = tab.alto; //Obtengo el alto del tablero
    var tope = alto - 1; //Tope de chequeo en diagonal (para no excederme del tablero)

    //Verifico diagonales de fila sentido principal
    for (var i=0; i<((alto+1)-Juego.cantFichas); i++){
      for(var j=0; j<tope; j++){
        if (cas[i+despd].className.indexOf("vacio") == -1){ //Si no es vacío
          if(cas[i+despd].className == cas[i+despd+(alto+1)].className){
            cont = cont +1;
            if(cont == Juego.cantFichas){
              return true;
            }
          }else{
            cont = 1; //reinicio contador
          }
        }else{
          cont = 1; //reinicio contador
        }
        despd = despd + (alto+1); //Realizo desplazamiento para poder moverme en diagonal
      }
      despd = 0;
      cont = 1;
      tope = tope - 1;
    }

    cont = 1; //Reinicio el contador de casilleros iguales
    tope = alto -1; //Reinicio el tope
    despd = 0; //Reinicio el desplazamiento
    var despv = 0; //Desplazador vertical

    //Verifico diagonales de columna sentido principal
    for (var i=0; i<((alto+1)-Juego.cantFichas); i++){
      for(var j=0; j<tope; j++){
        if (cas[despd+despv].className.indexOf("vacio") == -1){ //Si no es vacío
          if(cas[despd+despv].className == cas[despd+despv+(alto+1)].className){
            cont = cont +1;
            if(cont == Juego.cantFichas){
              return true;
            }
          }else{
            cont = 1; //reinicio contador
          }
        }else{
          cont = 1; //reinicio contador
        }
        despd = despd + (alto+1); //Realizo desplazamiento para poder moverme en diagonal
      }
      despd = 0; //Reinicio desplazamiento diagonal
      cont = 1; //Reinicio contador
      tope = tope - 1; //actualizo tope
      despv = despv + alto; //Realizo un desplazamiento para moverme verticalmente
    }

    cont = 1; //Reinicio el contador de casilleros iguales
    tope = alto -1; //Reinicio el tope
    despd = 0; //Reinicio el desplazamiento
    despv = 0; //Desplazador vertical

    //Verifico diagonales de fila sentido inverso
    for (var i=alto-1; i>((alto-1)-((alto+1)-Juego.cantFichas)); i--){
      for(var j=0; j<tope; j++){
        if (cas[i+despd].className.indexOf("vacio") == -1){ //Si no es vacío
          if(cas[i+despd].className == cas[i+despd+(alto-1)].className){
            cont = cont +1;
            if(cont == Juego.cantFichas){
              return true;
            }
          }else{
            cont = 1; //reinicio contador
          }
        }else{
          cont = 1; //reinicio contador
        }
        despd = despd + (alto-1);
      }
      despd = 0;
      cont = 1;
      tope = tope - 1;
    }

    cont = 1; //Reinicio el contador de casilleros iguales
    tope = alto -1; //Reinicio el tope
    despd = 0; //Reinicio el desplazamiento
    despv = alto-1; //Desplazador vertical

    //Verifico diagonales de columna sentido inverso
    for (var i=0; i<((alto+1)-Juego.cantFichas); i++){
      for(var j=0; j<tope; j++){
        if (cas[despd+despv].className.indexOf("vacio") == -1){ //Si no es vacío
          if(cas[despd+despv].className == cas[despd+despv+(alto-1)].className){
            cont = cont +1;
            if(cont == Juego.cantFichas){
              return true;
            }
          }else{
            cont = 1;
          }
        }else{
          cont = 1;
        }
        despd = despd + (alto-1);
      }
      despd = 0;
      cont = 1;
      tope = tope - 1;
      despv = despv + alto;
    }

    return false; //Si no hay ganador en diagonales, devuelvo false
  }

  //Funcion que verifica si hay un ganador (si lo hay, devuelve true)
  Juego.verificarGanador = function(turno){
    var ganador = false;
    var casillas = document.querySelectorAll(".contenedorImagen");
      if (Juego.verificarHorizonatal(casillas)){
        ganador = true;
      }else{ 
        if (Juego.verificarVertical(casillas)) {
          ganador = true;
        }else{
          if (Juego.verificarDiagonal(casillas)){
            ganador = true;
          }
        }
      }

      return ganador;
  }

  //Funcion que verifica si hay empate (si lo hay devuelve true)
  Juego.verificarEmpate = function(){
    var casillas = document.querySelectorAll(".contenedorImagen");
    for (var i=0; i<casillas.length; i++){
      if (casillas[i].className.indexOf("vacio") !== -1){ //Si algun casillero es vacio, no hay empate
        return false;
      }
    }
    return true; //Si todos los casilleros son distintos de vacío, y no hubo un ganador, se declara empate
  }

  //Funcion que es llamada en caso de que haya ganador. Actualiza el marcador y muestra un mensaje con el ganador 
  Juego.hayGanador = function (ganador) {
    var jugTab = document.querySelectorAll("td");
    var nombreGanador;
    if (ganador == 1){
      Juego.puntosJugador1 = Juego.puntosJugador1 + 1; //Actualizo los puntos del jugador
      jugTab[0].innerHTML = Juego.puntosJugador1; //Reflejo la actualización en la tabla de jugadores
      nombreGanador = Juego.nombrejug1;
    }else{
      Juego.puntosJugador2 = Juego.puntosJugador2 + 1;
      jugTab[1].innerHTML = Juego.puntosJugador2;
      nombreGanador = Juego.nombrejug2;
    }
    var mensaje = "El ganador es "+nombreGanador;
    Juego.mostrarMensaje(mensaje); //Muestro un mensaje con el ganador
  }

  //Funcion que encaso de haber empate se encarga de mostrar un mensaje de empate
  Juego.hayEmpate = function (){
    var mensaje = "¡Empate!";
    Juego.mostrarMensaje(mensaje);
  }

  //Muestra un mensaje recibido como parámetro
  Juego.mostrarMensaje = function (mensaje) {
    setTimeout(function () {
      window.alert(mensaje)
    },100);
  }

  
  //Funcion que permite cambiar el valor de un casillero cuando se hace un click sobre él.
  //Además verifica si hay ganador o empate; y cambia de turno
  Juego.setCasillero = function (event) {
    var casillero = event.target;
    casillero.removeEventListener("click", Juego.setCasillero); //Deshabilito el event listener del casillero
    var turno = Juego.turno;

    casillero.classList.remove("vacio"); //Elimino la clase vacío
    if (turno == 1){
      casillero.classList.add("cruz"); //Si es jugador 1, agrego la clase cruz
    }else{
      casillero.classList.add("circulo"); //Si es jugador 2, agrego la clase circulo
    }    

    if (Juego.verificarGanador(turno)){ //Si hay un ganador
      Juego.hayGanador(turno);
      Juego.limpiarTablero();
    }else{
      if (Juego.verificarEmpate()){
        Juego.hayEmpate();
        Juego.limpiarTablero();
      }else{
        if (turno == 1){
          Juego.turno = 2; //Cambio de turno
          var jug1 = document.querySelector(".jugadorActual");
          jug1.classList.remove("jugadorActual");
          var jug2 = document.querySelectorAll("th")[2];
          jug2.classList.add("jugadorActual");
        }else{
          Juego.turno = 1; //Cambio de turno
          var jug2 = document.querySelector(".jugadorActual");
          jug2.classList.remove("jugadorActual");
          var jug1 = document.querySelectorAll("th")[1];
          jug1.classList.add("jugadorActual");
        }  
      }   
    } 
  }

  //Funcion que limpia el tablero 
  Juego.limpiarTablero = function () {
    setTimeout(function() {
      //Coloco todos los casilleros en vacío! y activo nuevamente el eventListener para aquellos que lo tenían desactivado
      var casilleros = document.querySelectorAll(".cruz , .circulo");
      for(var i=0; i<casilleros.length; i++){
        if (casilleros[i].className.indexOf("cruz") !== -1){
          casilleros[i].classList.remove("cruz");
        }else{
          casilleros[i].classList.remove("circulo");
        }

        casilleros[i].classList.add("vacio");
        casilleros[i].addEventListener("click", Juego.setCasillero);
      }
      Juego.turno = 1; //Le asigno el turno al jugador 1

      //Resalto como jugador actual al jugador 1
      var jug = document.querySelector(".jugadorActual");
      jug.classList.remove("jugadorActual"); //Elimino la clase del que sea el jugador actual
      var jug1 = document.querySelectorAll("th")[1];
      jug1.classList.add("jugadorActual"); //Le agrego la clase al jugador 1
    } , 200);
      
  }     