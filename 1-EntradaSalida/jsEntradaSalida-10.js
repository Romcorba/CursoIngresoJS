/*
Lucas Romero
Div E
Ejercicio  10 E/S
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// variables declaradas
	let importe;
	let descuento;
	let resultado; 

	//valores por ID
	importe = document.getElementById("txtIdImporte").value;

	//paso a numeros el ID
	importe = parseInt(importe);

	//calculo el descuento del importe
	descuento = importe / (100/25);
	resultado = importe - descuento;

	//mostrar el descuento por pantalla
	document.getElementById("txtIdResultado").value = resultado

	alert (" El importe es de " + importe + " su descuento es de " + descuento);
}
