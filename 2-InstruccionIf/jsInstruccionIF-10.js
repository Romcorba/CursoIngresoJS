/*
Lucas Romero
Div E
INstruccion IF Ej 10

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	//declaro variable
	let resultado;
	//parseo
	resultado=parseInt(resultado);
	//genero numero ramdom
	resultado=Math.floor(Math.random()*(10-1)+1);
	if (resultado==9||resultado==10)
	{
	alert("EXCELENTE");
	}
	else if (resultado>=4)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
}
		
