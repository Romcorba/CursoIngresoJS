/*
Lucas Romero
Div E
Ejercicio  6 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value; 
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//transformamos a enteros con parseInt
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//operacion
	resultado = numeroUno + numeroDos;

	//mostrar resultado
	alert(" El resultado es: " + resultado);
}

