/*
Lucas Romero
Div E
INstruccion IF Ej 8
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
NO HACER NADA,pero si no es asi, y es soltero y no es menor,
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
 
 */
function mostrar()
{
	//declaro variable
	let edad;
	let estadoCivil;
	//tomo id y parseo
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById("estadoCivil").value;
	if (edad<18 && estadoCivil!="Soltero"||edad>=18 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}
}