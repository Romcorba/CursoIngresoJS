/*El siguiente ejercicio debe tener un solo alert escrito en el código
SI SI , uno solo.
La palabra alert escrita una sola vez.
Si si nuevamente , una sola vez en todo su código
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
1- Si es menor de 13 , mostrar el mensaje “feliz día”.
2- Si es adolescente el mensaje es “usted es adolescente”
A- tiene 17 años además mostrar el mensaje “último año!!!”
3- Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
A- Si tiene 33 años , además mostrar el mensaje “como cristo”
B- Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
C- Si tiene 88, además mostrar el mensaje “lindo número''
4- Si la edad es par , además mostrar , “sos par!!”.
*/
function mostrar()
//1- Si es menor de 13 , mostrar el mensaje “feliz día”.
{
	let edad;
	let mensaje;
	let numeroPar;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	
	
	if(edad<13)
	{
		mensaje="feliz día";
	}
	else
		{
			if(edad>=13 && edad<18)
			{
				mensaje="usted es adolescente";
			}
			if(edad==17)
			{
				mensaje="último año!!!";
			}
		}
			if(edad>=18)
				{
					mensaje="tenes edad de laburar";
				}
				else 
					{
						if (edad==33)
						{
							mensaje="como cristo";
						}
						if (edad>=60)
						{
							mensaje="A jubilarse";
						}
						if(edad==88)
						{
							mensaje="lindo número";
						}	
					}
alert(mensaje);
}


/*
Lucas Romero
Div E
INstruccion IF Ej 7
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	//declaro variable
	let edad;
	let estadoCivil;
	//tomo id y parseo
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById("estadoCivil").value;
	if(edad<18 && estadoCivil !="soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}	
}
*/