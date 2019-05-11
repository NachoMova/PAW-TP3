var window = window || {},
    document = document || {},
    console = console || {},
    Reproductor = Reproductor || {};

   

  //Función que arma la seccion que contendrá al cuestionario
  Reproductor.iniciarReproductor = function(contenedor){
    Reproductor.contenedor = contenedor; 
  	window.addEventListener("DOMContentLoaded", function () { //Espero a que se cargue el contenido html
  		if (typeof Reproductor.contenedor === "string") {
  			Reproductor.contenedor = document.getElementById(Reproductor.contenedor); //Obtengo el contenedor del Cuestionario
  		}
  		var sec = document.createElement("section");
  		sec.classList.add("seccionRepro");
  		Reproductor.contenedor.appendChild(sec); //Agrego la sección que contendrá al cuestionario
      Reproductor.armarReproductor(sec);
  	});
  }  

  Reproductor.armarReproductor = function(seccion){
    var i, rep, source, ulVideos, liVideo, dateVideos, spanVideo, articulo,
        divImg, img, duracion, a, nameVideo; 

    dateVideos = Reproductor.datosVideos;

    //Armo el reproductor cargandolé el primer video de la lista de reproducción y lo agrego a la seccion
    rep = document.createElement("video");
    rep.classList.add("reproductor");
    source = dateVideos[0].url;
    rep.setAttribute("src", source);
    rep.setAttribute("controls", "controls");
    seccion.appendChild(rep);

    //Armo la lista de reproduccion con los videos que se encuentran en el array de videos
    ulVideos = document.createElement("ul");
    ulVideos.classList.add("listaVideos");
    for (i=0; i<dateVideos.length; i++){
      nameVideo = dateVideos[i].nombre;

      liVideo = document.createElement("li");
      liVideo.classList.add("liVideo");
      liVideo.addEventListener("click", Reproductor.cargarVideo);
      articulo = document.createElement("article");
      articulo.classList.add("artVideo");
      divImg = document.createElement("div");
      divImg.classList.add("divImagen");
      source = dateVideos[i].imagen;
      img = document.createElement("img");
      img.classList.add("imagen");
      img.setAttribute("src", source);
      img.setAttribute("data-v", nameVideo);
      duracion = document.createElement("span");
      duracion.classList.add("duracion");
      duracion.setAttribute("data-v", nameVideo);
      duracion.innerHTML = dateVideos[i].duracion;
      divImg.appendChild(img);
      spanVideo = document.createElement("span");
      spanVideo.classList.add("textVideo");
      spanVideo.setAttribute("data-v", nameVideo);
      spanVideo.innerHTML = nameVideo;;
      articulo.appendChild(divImg);
      articulo.appendChild(duracion);
      articulo.appendChild(spanVideo);
      a = document.createElement("a");
      a.classList.add("linkVideo");
      a.setAttribute("href", "#");
      a.appendChild(articulo);
      liVideo.appendChild(a);
      ulVideos.appendChild(liVideo);
    }
    seccion.appendChild(ulVideos);

  }


  Reproductor.cargarVideo = function (event) {
    var rep, dateVideos, nomVideo, video, url ;

    dateVideos = Reproductor.datosVideos; //Obtengo los datos de los videos
    nomVideo = event.target.getAttribute("data-v");
    console.log(nomVideo);
    video = dateVideos.find(name => name.nombre === nomVideo);
    url = video.url;

    rep = document.querySelectorAll(".reproductor")[0];
    rep.setAttribute("src", url);
    rep.play();

  }