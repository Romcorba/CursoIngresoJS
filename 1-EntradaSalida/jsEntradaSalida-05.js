/*
Lucas Romero
Div E
Ejercicio  5 E/S
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//se crean variables segun enunciado
	let nombreIngresado;
	let edadIngresada;

	//tomamos datos por id
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;
	alert (" su nombre es " + nombreIngresado + " y usted tiene " + edadIngresada + " años ")

}

