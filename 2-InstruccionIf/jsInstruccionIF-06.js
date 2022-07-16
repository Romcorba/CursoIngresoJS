/*
Lucas Romero
Div E
INstruccion IF Ej 4

Al ingresar una edad debemos informar si la persona 
es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años)
o niño (menor a 13 años).
*/

function mostrar()
{
//declaramos variable
let edad;
//tomamos datos y parseamos
edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad);

	if (edad >=18)
	{
	alert("usted es mayor de edad");
	}
		else if (edad>=13 && edad<=17)
			{
			alert("Usted es un adolescente");
		 	}
		else
			{
			alert("Usted es un niño");
			}
}

