// Obtener los elementos select y el botón de conversión
var temperatureInput = document.getElementById("temperatureInput");
var convertFromSelect = document.getElementById("convertFromSelect");
var convertToSelect = document.getElementById("convertToSelect");
var convertButton = document.getElementById("convertButton");

// Agregar un evento de clic al botón de conversión
convertButton.addEventListener("click", convertTemperature);

// Función para realizar la conversión de temperatura
function convertTemperature() {
  // Obtener los valores seleccionados en las listas desplegables
  var convertFrom = convertFromSelect.value;
  var convertTo = convertToSelect.value;
  
  // Obtener el valor de temperatura ingresado por el usuario
  var temperature = parseFloat(temperatureInput.value);
  
  // Verificar si el valor de temperatura ingresado es un número válido
  if (isNaN(temperature)) {
    alert("Por favor, ingrese un valor de temperatura válido.");
    return;
  }
  
  // Realizar la conversión de temperatura según las unidades seleccionadas
  var convertedTemperature;
  
  if (convertFrom === "Celsius") {
    if (convertTo === "Fahrenheit") {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (convertTo === "Kelvin") {
      convertedTemperature = temperature + 273.15;
    } else {
      convertedTemperature = temperature; // La misma unidad, no se realiza conversión
    }
  } else if (convertFrom === "Fahrenheit") {
    if (convertTo === "Celsius") {
      convertedTemperature = (temperature - 32) * 5/9;
    } else if (convertTo === "Kelvin") {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else {
      convertedTemperature = temperature; // La misma unidad, no se realiza conversión
    }
  } else if (convertFrom === "Kelvin") {
    if (convertTo === "Celsius") {
      convertedTemperature = temperature - 273.15;
    } else if (convertTo === "Fahrenheit") {
      convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    } else {
      convertedTemperature = temperature; // La misma unidad, no se realiza conversión
    }
  }
  
  // Mostrar el resultado de la conversión en una alerta
  alert("El resultado de la conversión es: " + convertedTemperature.toFixed(2));
}
