let numero1 = document.getElementById("entrada1");
let numero2 = document.getElementById("entrada2");
let resultado = document.getElementById("resultado");

function validacionCampos() {
  if (numero1.value === "" || numero2.value === "") {
    alert("Por favor ingrese los 2 valores requeridos.");
    return true;
  }
}

function mostrarResultado(resultadoOperacion) {
  resultado.value = resultadoOperacion;
}

function reiniciar() {
  numero1.value = "";
  numero2.value = "";
  resultado.value = "";
}

function suma() {
  if (validacionCampos()) {
    return;
  }
  mostrarResultado(Number(numero1.value) + Number(numero2.value));
}

function resta() {
  if (validacionCampos()) {
    return;
  }
  mostrarResultado(Number(numero1.value) - Number(numero2.value));
}

function multiplicacion() {
  if (validacionCampos()) {
    return;
  }
  mostrarResultado(Number(numero1.value) * Number(numero2.value));
}

function division() {
  if (validacionCampos()) {
    return;
  }
  mostrarResultado(Number(numero1.value) / Number(numero2.value));
}

function potencia() {
  if (validacionCampos()) {
    return;
  }
  mostrarResultado(Math.pow(Number(numero1.value), Number(numero2.value)));
}

function raiz() {
  mostrarResultado(Math.sqrt(Number(numero1.value)));
}

function absoluto() {
  mostrarResultado(Math.abs(Number(numero1.value)));
}

function random() {
  mostrarResultado(
    Math.random() * (Number(numero2.value) - Number(numero1.value)) +
      Number(numero1.value)
  );
}

function round() {
  mostrarResultado(Math.round(resultado.value));
}

function floor() {
  mostrarResultado(Math.floor(resultado.value));
}

function ceil() {
  mostrarResultado(Math.ceil(resultado.value));
}
