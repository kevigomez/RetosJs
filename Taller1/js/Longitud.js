function realizarOperacion() {
    // Obtener los elementos del formulario
    var palabra = document.getElementById("palabra").value;
    var opcion = document.getElementById("opcion").value;
    var resultado = document.getElementById("resultado");

    // Realizar la operación correspondiente según la opción elegida
    switch (parseInt(opcion)) {
      case 1:
        resultado.textContent = "Longitud de la palabra: " + palabra.length;
        break;
      case 2:
        resultado.textContent = "Palabra en mayúsculas: " + palabra.toUpperCase();
        break;
      case 3:
        resultado.textContent = "Palabra en minúsculas: " + palabra.toLowerCase();
        break;
      case 4:
        resultado.textContent = "Primer carácter de la palabra: " + palabra.charAt(0);
        break;
      default:
        resultado.textContent = "Opción inválida";
        break;
    }
  }