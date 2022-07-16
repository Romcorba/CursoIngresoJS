 /*
	Lucas Romero
Div E
Ejercicio  9 bis E/S

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento
en el cuadro de texto "RESULTADO".

El usuario debe ingresar el porcentaje del aumento
y debemos mostrar el valor del porcentaje del aumento 
por ALERT */ 
function mostrarAumento()
{
	//variables
	let sueldo;
	let porcentaje;
	let aumentoPorcentaje;
	
	//tomar id del cuadro
	sueldo = document.getElementById("txtIdSueldo").value;
	aumentoPorcentaje = prompt ("ingrese el porcentaje que desea aumentar");

	//parseo, paso los textos a numeros
	sueldo = parseInt(sueldo);
	porcentaje = parseInt(porcentaje);

	//calcular el % del sueldo aumentado
	aumentoPorcentaje = sueldo * (10/100);

	//mostrar resultado en por id en pantalla
	document.getElementById("txtIdResultado").value = aumentoPorcentaje + sueldo

	alert (" El sueldo es: " + sueldo + " Su aumento es de: " + aumentoPorcentaje);
 
}
