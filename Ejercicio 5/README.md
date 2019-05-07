# EJERCICIO 5

## Consigna
Implementar una librería que permita convertir un listado de imágenes en slides (diapositivas) de imágenes de tipo "carrucel". Debe cumplir con las reglas del Diseño Responsivo y deberá contar con diferentes efectos de transición en el pasaje de imágenes (3 como mínimo). Además, se debe mostrar una barra de progreso que muestre el avance (porcentual) de la descarga de las imágenes de tal manera que cuando llegue al 100% empiece a animarse la muestra de imágenes. Las diapositivas deben poder pasarse por thumbs, por botones y presionando las teclas de las flechas.<br>
Solo recibirá como parámetro el contenedor de las imágenes y debe permitir trabajar dentro del contenedor y ocupando todo el viewport redimensionando las imágenes para tal fin.<br>
Pueden utilizar el sitio https://www.jssor.com para sacar algunas ideas interesantes.

## Guía de ejecución del ejercicio
La guía de ejecución para este ejercicio la podrá encontrar en el README.md general del proyecto. Los pasos para ejecutar el ejercicio son los mismos para todos los ejercicios del trabajo práctico.

## Slider
La librería toma las imágenes puesta en el listado (<ul>) y las transforma en un slider del tipo carrousel.

### Tiempo de transición
Modificar los valores (en ms) del atributo "data-time" ubicada dentro del listado. Ej: data-time="1500", equivale a 1.5 segundos entre slide y slide.

### Efectos
Se implementaron 3 efectos que se modifican del atributo "data-effect". Los posibles valores son: "fade", "left", "top".
