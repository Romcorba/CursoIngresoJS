/*
Lucas Romero
Div E
Ejercicio  4 E/S
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre = prompt ("ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombre;
	
}

