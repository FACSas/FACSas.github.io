CLIMAPP V1.1a 
================
Una aplicacion web con la que se podran consultar aspectos relacionados al clima de Argentina

Licesing
================
- Lab. de coputacion (LDC)
- The MIT License (MIT) (no fake)

# ¿Como usar?

La apliacion consta de 3 secciones. 

*Clima:* Deberas seleccionar una ciudad de la lista. Una vez hecho esto, presionar el boton "Consulta".

*Agregar Ciudad:* Desde aqui, podra agregar la ciudad que desee en caso de no estar en la lista. Escribiendo su nombre en el cuadro de texto, y luego, presionando el boton "Agregar"

# ETAPA 1 // Correciones de la V1.0a
- A partir de ahora, la opcion de "Seleccionar Consulta" sera la predeterminada, y ya no sera seleccionable. 
- Se elimino el archivo filtrado "asd", ubicado dentro de la carpeta js.
- Por un fallo en la animacion, hemos suspendido temporalmente los efectos CSS que se encontraban en el Header de la pagina.
- Se añadieron dos botones en la seccion Help, uno permitira limpiar el formulario, y el otro enviar la consulta
- Archivo README.MD actualizado

# ETAPA 2 // V1.2a: Actualizaciones Css 
- El contendio de estilo de la pagina fue actualizado en las 3 secciones.
- Notificaciones push diseñadas e incorpordas en la pagina

# ETAPA 3 // V1.3a: Logica con JS
- La pagina esta conectada a la API de OpenWeatherMap
- Al agregar una ciudad desde Add City, la misma es incluida en el LocalStorage en formato JSON
- En la seccion de Clima al presionar el boton consultar se muestra el clima de la ciudad elegida 
