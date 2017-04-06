//Agregar al codigo(un enlace) al main.js
const rq = require('electron-require');
const main = rq.remote('./main.js');
var botonosNumeros = ["btn00","btn01","btn02","btn03","btn04","btn05","btn06","btn07","btn08","btn09"];
var botonesOperadores = ["btnSumar","btnRestar","btnMultiplicar","btnDividir"];

//Asignación de eventos a los botones de numero
for(var i=0;i<botonosNumeros.length;i++){
  document.getElementByID(botonesNumeros[i]).addEventListener('click',numeros);
}
//asignacion de eventos a los botones de operador
for(var i=0;i<botonesOperadores.length;i++){
  document.getElementByID(botonesOperadores[i]).addEventListener('click',operadores);
}
