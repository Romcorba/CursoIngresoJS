/*
Lucas Romero
Div E
INstruccion IF Ej 4
Al ingresar una edad debemos informar si la persona es adolescente,
 edad entre 13 y 17 años (inclusive) .
 */
function mostrar()
{
//declarar variable
let edad;
//tomar datos id y parsear
edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad);
//informar edad y el dialogo solicidato.-
if(edad >= 13 && edad<=17)
{
	alert("Usted es adolescente");
}
}