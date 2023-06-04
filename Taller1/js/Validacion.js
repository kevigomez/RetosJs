
  function validateForm() {
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var aceptarTerminos = document.getElementById("aceptarTerminos").checked;

    // Validar que todos los campos sean obligatorios
    function validateForm() {
        var tipoDocumento = document.getElementById("tipoDocumento").value;
        var numeroDocumento = document.getElementById("numeroDocumento").value;
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var correoElectronico = document.getElementById("correoElectronico").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var aceptarTerminos = document.getElementById("aceptarTerminos").checked;
  
        var isValid = true;
  
        // Validar que todos los campos sean obligatorios
        if (tipoDocumento === "") {
          document.getElementById("tipoDocumento").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("tipoDocumento").classList.remove("error");
        }
  
        if (numeroDocumento === "") {
          document.getElementById("numeroDocumento").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("numeroDocumento").classList.remove("error");
        }
  
        if (nombre === "") {
          document.getElementById("nombre").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("nombre").classList.remove("error");
        }
  
        if (apellido === "") {
          document.getElementById("apellido").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("apellido").classList.remove("error");
        }
  
        if (fechaNacimiento === "") {
          document.getElementById("fechaNacimiento").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("fechaNacimiento").classList.remove("error");
        }
  
        if (correoElectronico === "") {
          document.getElementById("correoElectronico").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("correoElectronico").classList.remove("error");
        }
  
        if (password === "") {
          document.getElementById("password").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("password").classList.remove("error");
        }
  
        if (confirmPassword === "") {
          document.getElementById("confirmPassword").classList.add("error");
          isValid = false;
        } else {
          document.getElementById("confirmPassword").classList.remove("error");
        }
        if (!isValid) {
            alert("Por favor, complete todos los campos obligatorios.");
          }
    
          return isValid;
        }

    // Validar el campo No. documento solo permita números y tenga una longitud mínima de 5 caracteres
    if (!/^\d{5,}$/.test(numeroDocumento)) {
      alert("El número de documento debe contener solo números y tener una longitud mínima de 5 caracteres.");
      return false;
    }

    // Validar que los campos Nombre y Apellido admitan caracteres alfanuméricos
    if (!/^[a-zA-Z0-9]+$/.test(nombre) || !/^[a-zA-Z0-9]+$/.test(apellido)) {
      alert("Los campos Nombre y Apellido solo deben contener caracteres alfanuméricos.");
      return false;
    }

    // Validar que el campo fecha de nacimiento sea mayor o igual a 18 años (desde 2002)
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var fechaMinima = new Date("2002-01-01");

    if (fechaNacimientoDate > fechaActual || fechaNacimientoDate < fechaMinima) {
      alert("La fecha de nacimiento debe ser válida (mayor de edad) y posterior a 2002.");
      return false;
    }

    // Validar que el campo correo electrónico solo permita el dominio @misena.edu.co
    if (!/\b[A-Za-z0-9._%+-]+@misena\.edu\.co\b/.test(correoElectronico)) {
      alert("Ingrese un correo electrónico válido con el dominio @misena.edu.co.");
      return false;
    }

    // Validar que el campo password cumpla con los requisitos mínimos
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(password)) {
      alert("La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y ser de mínimo 10 caracteres.");
      return false;
    }

    // Validar que la confirmación de contraseña coincida
    if (password !== confirmPassword) {
      alert("La confirmación de contraseña no coincide.");
      return false;
    }

    // Validar que se haya aceptado los términos de uso
    if (!aceptarTerminos) {
      alert("Debe aceptar los términos de uso para continuar.");
      return false;
    }

    return true;
  }