var window = window || {},
    document = document || {},
    console = console || {},
    Test = Test || {};

   Test.datosJson = {}; 
   Test.urlJson = "cuestionario/archivo.json";
   Test.respCorrectas = [];
   Test.tiempo = {};

  //Función que arma la seccion que contendrá al cuestionario
  Test.iniciarTest = function(contenedor){
    Test.contenedor = contenedor; 
  	window.addEventListener("DOMContentLoaded", function () { //Espero a que se cargue el contenido html
  		if (typeof Test.contenedor === "string") {
  			Test.contenedor = document.getElementById(Test.contenedor); //Obtengo el contenedor del Cuestionario
  		}
  		var seccionCuestionario = document.createElement("section");
  		seccionCuestionario.classList.add("seccionCuestionario");
  		Test.contenedor.appendChild(seccionCuestionario); //Agrego la sección que contendrá al cuestionario
      Test.getJson(seccionCuestionario);
  	});
  }  

  //Levanto los datos del Json y los almaceno en el objeto datosJson
  Test.getJson = function (seccion) {
    var request = new XMLHttpRequest();

    request.open("GET",Test.urlJson);

    request.responseType = "json";

    request.send();

    request.onload = function() {
      Test.datosJson = request.response; //Almaceno los datos del Json en elobjeto datosJson
      Test.armarCuestionario(seccion); //Comienzo a armar el cuestionario con los datos del json
    }
  }

  //Funcion encargada de armar el cuestionario 
  Test.armarCuestionario = function (sec) {
      var tituloCuest, titulo, cantPreguntas, dateJson, tiempoTest, rnd, i, nroPreg, 
          articulo, pregunta, divRespuestas, respuesta, botonEnviar, respCorrectas, texto,
          divTiempo;

      dateJson = Test.datosJson;
      tituloCuest = document.createElement("h1");
      titulo = Test.datosJson.titulo; //Obtengo el título del json
      tituloCuest.innerHTML = titulo; 
      sec.appendChild(tituloCuest); //Agrego el título del cuestionario a la sección

      cantPreguntas = dateJson.cantidadAPreguntar; //Obtengo la cantidad de preguntas a escribir

      tiempoTest = dateJson.tiempoDeTrabajo; //Obtengo el tiempo que durará el cuestionario

      //Armo el div que contendrá el tiempo transcurrido durante la realización del cuestionario
      divTiempo = document.createElement("div");
      divTiempo.classList.add("divTiempo");
      texto = document.createElement("span");
      texto.innerHTML = "Tiempo restante: ";
      divTiempo.appendChild(texto);
      texto = document.createElement("span");
      texto.classList.add("tiempo");
      texto.innerHTML = tiempoTest;
      divTiempo.appendChild(texto);
      texto = document.createElement("span");
      texto.innerHTML = " segundos";
      divTiempo.appendChild(texto);

      sec.appendChild(divTiempo); //Agrego el divTiempo a la sección del cuestionario


      nroPreg = []; //Array que contiene el número de las preguntas elegidas al azar
      
      i = 0;

      //Eligo al azar la cantidad de preguntas indicadas en el json
      while (i<cantPreguntas) {
        rnd = Math.floor(Math.random() * dateJson.preguntas.length); //Numero al azar entre 0 y la cantidad de preguntas en el json
        if(nroPreg.indexOf(rnd) == -1){
          nroPreg.push(rnd);
          i++;
        }
      }

      //Armo las preguntas con sus respuestas
      for (i=0; i<cantPreguntas; i++){
        Test.respCorrectas[i] = dateJson.preguntas[nroPreg[i]].correctas;

        articulo = document.createElement("article"); //Creo un articulo para almacenar la pregunta y sus respuestas
        articulo.classList.add("articuloPregunta");
        pregunta = document.createElement("span"); //Creo la pregunta 
        pregunta.classList.add("pregunta");
        pregunta.innerHTML = dateJson.preguntas[nroPreg[i]].pregunta; //escribo la pregunta

        divRespuestas = document.createElement("div"); //Contenedor de respuestas
        divRespuestas.classList.add("contenedorRespuestas");

        //Armo las respuestas
        for (j=0; j<dateJson.preguntas[nroPreg[i]].respuestas.length; j++){
          respuesta = document.createElement("input"); //creo Checkbox de respuesta
          respuesta.classList.add("respuesta");
          respuesta.setAttribute("type", "checkbox");
          respuesta.setAttribute("data-q", i);
          respuesta.setAttribute("data-r", j);
          if (Test.respCorrectas[i].indexOf(j) != -1 ){ //Si es una de las opciones correctas, le añado una clase
            respuesta.classList.add("correcta");
          }
          
          divRespuestas.appendChild(respuesta); //Añado el checkbox al div
          texto = document.createElement("span"); 
          texto.classList.add("textoRespuesta");
          texto.innerHTML = dateJson.preguntas[nroPreg[i]].respuestas[j]; 
          divRespuestas.appendChild(texto); //Añado el texto de la respuesta al div
          divRespuestas.appendChild(document.createElement("br"));
        }

        articulo.appendChild(pregunta); //Agrego la pregunta al artículo
        articulo.appendChild(divRespuestas); //Agrego el div con las respuestas al artículo
        sec.appendChild(articulo); //Agrego el artículo a la sección
      }


      botonEnviar = document.createElement("button");
      botonEnviar.classList.add("botonEnviar"); //Creo el botón Enviar 
      botonEnviar.innerHTML = "Enviar";
      botonEnviar.addEventListener("click", Test.verificarTest); //le añado el evento al botón
      sec.appendChild(botonEnviar); //Agrego el botón a a la sección

      //Cada un segundo mando a refrescar el tiempo en pantalla
      Test.tiempo = window.setInterval(Test.decrementarSegundos,1000);

      //llamo a la función terminar, que será ejecutada al finalizar el tiempo máximo establecido
      Test.terminarCuestionario (tiempoTest);
  }


  //Función que refresca el tiempo transcurrido en pantalla
  Test.decrementarSegundos = function(){
    var time , newTime;

    time = document.querySelectorAll(".tiempo")[0];
    newTime = time.innerHTML - 1;
    time.innerHTML = newTime;
  }


  //Función que se ejecuta luego de finalizar el tiempo máximo
  Test.terminarCuestionario = function(tiempo){
    setTimeout(function () {
      Test.corregirTest(); //llamo a la función corregir test

    },tiempo*1000);
  }

  //Esta función se ejecuta al presionar el botón Enviar
  Test.verificarTest = function(){ 
    Test.corregirTest(); //llamo a la función corregir test
  }
  

  //Función que permite corregir el test, dar un puntaje y marcar respuestas correctas
  Test.corregirTest = function () {
    var respuestas, respN, cantPreg, arrayResp, i, puntajePreg, puntajeResp, respCorrec,
        puntRealPreg, puntajeTotal, textRespCorrect, resultado, sec, todoBlanco, 
        resultPreg, articulo, divTiempo ;

    boton = document.querySelectorAll(".botonEnviar")[0];
    boton.parentNode.removeChild(boton); //Elimino el botón Enviar

    window.clearInterval(Test.tiempo); //Desactivo la cuenta regresiva

    divTiempo = document.querySelectorAll(".divTiempo")[0];
    divTiempo.parentNode.removeChild(divTiempo); //Elimino la marca de tiempo

    cantPreg = document.querySelectorAll(".pregunta").length; //Obtengo cantidad de pregutas

    respuestas = document.querySelectorAll(".respuesta"); //Obtengo todas las respuestas

    respCorrec = Test.respCorrectas; //Obtengo las respuestas correctas de cada pregunta

    puntajePreg = 100 / cantPreg; //Calculo el puntaje de una pregunta correcta

    puntajeTotal = 0;


    for (i=0; i<cantPreg; i++){ //Por cada pregunta
      puntRealPreg = 0;
      arrayResp = [];

      for(j=0; j<respuestas.length; j++){ //almaceno en un array las respuestas de esta pregunta
        if (respuestas[j].getAttribute("data-q") == i){
          arrayResp.push(respuestas[j]);
        } 
      }
      

      puntajeResp = puntajePreg / arrayResp.length; //Le asigno un puntaje a cada respuesta (Correctas suman, incorrectas restan)

      todoBlanco = true;

      for (j=0; j<arrayResp.length; j++){ //Por cada respuesta
        arrayResp[j].disabled = true; //Deshabilito el checkbox

        if (arrayResp[j].checked == true){ //Si hay almenos una respuesta seleccionada, pongo la bandera en false
          todoBlanco = false;
        }

        //Si la opcion es correcta y está seleccionada, sumo puntaje respuesta
        if((arrayResp[j].className.indexOf("correcta") != -1)&& (arrayResp[j].checked==true)){
          puntRealPreg += puntajeResp;
        //Si la opción es incorrecta y está sin seleccionar, sumo puntaje respuesta
        }else if((arrayResp[j].className.indexOf("correcta") == -1)&& (arrayResp[j].checked==false)){
            puntRealPreg += puntajeResp;
        //Si no es ninguna de las anteriores, resto puntaje respuesta
        }else{
          puntRealPreg -= puntajeResp;
        }
      }

      //Si el puntaje de la respuesta es menor a cero, lo igualo a cero
      if (puntRealPreg < 0){
        puntRealPreg = 0;
      }

      //Si dejaron todas las respuestas en blanco (sin seleccionar), igualo el puntaje de la pregunta a cero
      if (todoBlanco){
        puntRealPreg = 0;
      }
      
      puntajeTotal += puntRealPreg; //Acumulo puntaje 

      articulo = document.querySelectorAll(".articuloPregunta")[i];
      resultPreg = document.createElement("p");
      resultPreg.classList.add("resultadoPregunta");
      resultPreg.innerHTML = "Puntaje obtenido en esta respuesta: "+Math.round(puntRealPreg);
      articulo.appendChild(resultPreg); //Agrego el resultado de la pregunta al artículo de la misma

      //Resalto las respuestas correctas con Verde
      for (j=0; j<arrayResp.length; j++){ //Por cada respuesta
        //Le añado una clase a las opciones correctas para mostrarlas al usuario
        if(arrayResp[j].className.indexOf("correcta") != -1){
          textRespCorrect = arrayResp[j].nextSibling;
          textRespCorrect.classList.add("opcionCorrecta");
        }
      }
      
    }

    sec = document.querySelector(".seccionCuestionario");
    resultado = document.createElement("span");
    resultado.classList.add("resultadoTotal");
    resultado.innerHTML = "Puntaje total: "+Math.round(puntajeTotal);
    sec.appendChild(resultado); //Añado el resultado total a la sección del cuestionario

  }