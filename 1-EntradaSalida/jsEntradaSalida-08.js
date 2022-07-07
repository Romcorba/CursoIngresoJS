/*
Lucas Romero
Div E
Ejercicio  8 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//variable
	let dividendo;
	let divisor;
	let resultado;
	let resto

	//tomar valores por ID

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	//procesos

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	//operador
	resultado = dividendo / divisor;
	resto = dividendo % divisor;

	
	alert (" El resultado es: " + resultado + " El resto es: " + resto);
}
