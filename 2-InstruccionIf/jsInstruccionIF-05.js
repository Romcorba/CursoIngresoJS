/*
Lucas Romero
Div E
INstruccion IF Ej 5
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
//declaro variable
let edad;
//tomo datos y parseo
edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad)

	if(edad>=18)
	{
		alert("No sos adolescente");
	}
	else(edad<=17)
	{
		alert("Sos adolescente");
	}
}