//variable global
var operador = "";
function numeros(num){
	if(operador == ""){ //escribir en el operando 1
		var valorInicial = document.calculadora.operando1.value;
		if(valorInicial == 0){
			document.calculadora.operando1.value = "";
		}
		//Concatena los valores de num con los del operando 1
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	}else{ //Escribo en el operando 2
		var valorInicial = document.calculadora.operando2.value;
		if(valorInicial == 0){
			document.calculadora.operando2.value = "";
		}
	}
}

function operadores(ope){
	operador = ope;
	
}