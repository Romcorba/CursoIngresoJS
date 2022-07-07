/*
Lucas Romero
Div E
Ejercicio  9 E/S
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variable
	let sueldo;
	let aumento;
	let sueldoAumentado;

	//tomo los valores
	sueldo = document.getElementById("txtIdSueldo").value;

	//paso a numeros
	sueldo = parseInt(sueldo);

	//calculo el % del sueldo 
	aumento = sueldo * (10/100);
	sueldoAumentado = sueldo + aumento;

	alert (" Su sueldo es " + sueldo + " Su aumento es de " + aumento + " Y su sueldo aumentado es:" + sueldoAumentado);
}
