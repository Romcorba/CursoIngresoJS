/*
Lucas Romero
Div E
Ejercicio  7 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	//variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomo datos
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//paso texto a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//operadores ( + - * / )
	resultado = numeroUno + numeroDos;

	//mostrar informacion
	alert(" El resultado es: " + resultado);
	
}

function restar()
{
	let numeroUno
	let numeroDos
	let resultado

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno - numeroDos;

	alert(" El resultado es: " + resultado);
	
}

function multiplicar()
{ 
	let numeroUno
	let numeroDos
	let resultado
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno)
	numeroDos = parseInt(numeroDos)

	resultado = numeroUno * numeroDos;

	alert(" El resultado es: " + resultado);
}

function dividir()
{
	let numeroUno
	let numeroDos
	let resultado

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = numeroUno / numeroDos;

	alert(" El resultado es: " + resultado);
	
}

