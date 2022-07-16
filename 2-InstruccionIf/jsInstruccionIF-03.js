/*
Lucas Romero
Div E
INstruccion IF Ej 3
*/

function mostrar()
{
//declarar variable
let edad;
//tomar datos id y parsear
edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad);
//informar edad y el dialogo solicidato.-
	if(edad>12||edad<18)
	{
	alert("usted es adolescente");
	}
}