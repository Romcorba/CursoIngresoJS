/*
Lucas Romero
Div E
Ejercicio  6 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declarar variables
	let dolarOFicial;
	let dolarBlue;
	let resultado;
	let variacionPorcentual;
	

	//tomar id de los cuadros
	dolarOFicial = document.getElementById("txtIdNumeroUno").value; 
	dolarBlue = document.getElementById("txtIdNumeroDos").value;

	//transformamos texto en numeros
	dolarOFicial = parseInt(dolarOFicial);
	dolarBlue = parseInt(dolarBlue);
	
	//operacion
	resultado = (dolarBlue / dolarOFicial) -1;	
	variacionPorcentual = resultado*100;

	//mostrar resultado
	alert(" El aumento es de : " + variacionPorcentual + "%");
}

