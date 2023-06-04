// Función para mostrar la ventana modal
function mostrarModal(figura) {
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var modalInputs = document.getElementById("modal-inputs");

    // Configurar el título y los campos de entrada según la figura seleccionada
    switch (figura) {
      case "circulo":
        modalTitle.textContent = "Círculo";
        modalInputs.innerHTML = `
          <label for="radio">Radio:</label>
          <input type="number" id="radio" step="0.01" required>
        `;
        break;
      case "triangulo":
        modalTitle.textContent = "Triángulo";
        modalInputs.innerHTML = `
          <label for="lado1">Lado 1:</label>
          <input type="number" id="lado1" step="0.01" required><br>
          <label for="lado2">Lado 2:</label>
          <input type="number" id="lado2" step="0.01" required><br>
          <label for="lado3">Lado 3:</label>
          <input type="number" id="lado3" step="0.01" required>
        `;
        break;
      case "rectangulo":
        modalTitle.textContent = "Rectángulo";
        modalInputs.innerHTML = `
          <label for="base">Base:</label>
          <input type="number" id="base" step="0.01" required><br>
          <label for="altura">Altura:</label>
          <input type="number" id="altura" step="0.01" required>
        `;
        break;
      case "cuadrado":
        modalTitle.textContent = "Cuadrado";
        modalInputs.innerHTML = `
          <label for="lado">Lado:</label>
          <input type="number" id="lado" step="0.01" required>
        `;
        break;
    }

    // Mostrar la ventana modal
    modal.style.display = "block";
  }

  // Función para cerrar la ventana modal
  function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  // Función para calcular el perímetro o el área según la figura seleccionada
  function calcular() {
    var modalForm = document.getElementById("modal-form");
    var figura = document.getElementById("modal-title").textContent;

    var resultado;

    switch (figura) {
      case "Círculo":
        var radio = parseFloat(document.getElementById("radio").value);
        resultado = "Perímetro: " + (2 * Math.PI * radio).toFixed(2) + ", Área: " + (Math.PI * radio * radio).toFixed(2);
        break;
      case "Triángulo":
        var lado1 = parseFloat(document.getElementById("lado1").value);
        var lado2 = parseFloat(document.getElementById("lado2").value);
        var lado3 = parseFloat(document.getElementById("lado3").value);
        var perimetro = lado1 + lado2 + lado3;
        var semiperimetro = perimetro / 2;
        var area = Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
        resultado = "Perímetro: " + perimetro.toFixed(2) + ", Área: " + area.toFixed(2);
        break;
      case "Rectángulo":
        var base = parseFloat(document.getElementById("base").value);
        var altura = parseFloat(document.getElementById("altura").value);
        resultado = "Perímetro: " + (2 * (base + altura)).toFixed(2) + ", Área: " + (base * altura).toFixed(2);
        break;
      case "Cuadrado":
        var lado = parseFloat(document.getElementById("lado").value);
        resultado = "Perímetro: " + (4 * lado).toFixed(2) + ", Área: " + (lado * lado).toFixed(2);
        break;
    }

    // Mostrar el resultado en la ventana modal
    var modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML += "<p>" + resultado + "</p>";

    // Deshabilitar el botón Calcular y cerrar la ventana modal al hacer clic en él
    var calcularBtn = document.querySelector("#modal-form button");
    calcularBtn.disabled = true;
    calcularBtn.textContent = "Calculado";
    calcularBtn.removeEventListener("click", calcular);

    var cerrarBtn = document.createElement("button");
    cerrarBtn.textContent = "Cerrar";
    cerrarBtn.addEventListener("click", cerrarModal);
    modalContent.appendChild(cerrarBtn);
  }