function comprobarSeleccion() {
    var nombres = ["Jennifer", "Tatiana", "Uldarico"];
    var apellidos = ["Fajardo", "Cabrera", "Andrade"];
    var Materias = ["Javascript", "Java", "Python"];

    var nombreSeleccionado = document.getElementById("nombre").value;
    var apellidoSeleccionado = document.getElementById("apellido").value;
    var MateriaSeleccionada = document.getElementById("Materia").value;

    var respuestaCorrecta = false;

    for (var i = 0; i < nombres.length; i++) {
      if (
        nombres[i].toLowerCase() === nombreSeleccionado.toLowerCase() &&
        apellidos[i].toLowerCase() === apellidoSeleccionado.toLowerCase() &&
        Materias[i].toLowerCase() === MateriaSeleccionada.toLowerCase()
      ) {
        respuestaCorrecta = true;
        break;
      }
    }

    var mensaje = document.getElementById("mensaje");

    if (respuestaCorrecta) {
      mensaje.innerHTML = "La respuesta es correcta";
      mensaje.style.color = "green";
      
    } else {
      mensaje.innerHTML = "La respuesta es incorrecta";
      mensaje.style.color = "red";
    }

    return false; // Evita el envío del formulario
  }