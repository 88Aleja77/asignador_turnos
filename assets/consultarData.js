
document.getElementById("consultarBtn").addEventListener("click", function () {
  var inputId = document.getElementById("idConsult").value;
  var dataConsultada = localStorage.getItem(inputId);
  var turn = dataConsultada.split(",");
  if (dataConsultada == null) {
    alert("Ese dato no existe en la base de datos");
  } else {
    var pElement = document.getElementById("data");
    pElement.innerHTML = turn[0] + ": " + turn[1] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "name: " + turn[2] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "email: " + turn[3] + "<br>";
    var datoaletorio = generarAleatorio(0,100);
    pElement.innerHTML = pElement.innerHTML + "Numero de turno es: " + datoaletorio +"<br>"; 
    pElement.innerHTML = pElement.innerHTML + "<br>";
    alert("Su turno asigando es: " + datoaletorio);
  }
});
function generarAleatorio(min, max) {
  var int = Math.random() * (max - min) + min;
  return parseInt(int);
}