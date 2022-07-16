/*
Lucas Romero
Div E
INstruccion IF Ej 2
*/
function mostrar()
{
//declaramos variable
let edad;
//tomamos id y parseamos
edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad);
	if(edad>=18)
	{
	alert("Mayor de edad")
	}
}//FIN DE LA FUNCIÓN