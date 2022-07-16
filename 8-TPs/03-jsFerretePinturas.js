/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados
    con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
    (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
//variables
let Fahrenheit;
let celcius;
let resultado;
//id y parseo
Fahrenheit=document.getElementById("txtIdTemperatura");
Fahrenheit=parseInt(Fahrenheit);
//dar valores
Fahrenheit = 32;
celcius = (Fahrenheit-32) / 1.8;
//resultado final
resultado = Fahrenheit*5/9;

alert (" el valor de farenheit a centigrados es " + resultado + " grados ");

}

function CentigradosFahrenheit () 
{   
/*
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").*/

//declarar variables
let Fahrenheit;
let celcius;
let resultado;
//tomar id y parsear
celcius=document.getElementById("txtIdTemperatura").value;
celcius=parseInt(celcius);
//calculo
Fahrenheit=32;
Fahrenheit=(celcius*5/9)+32;
resultado= Fahrenheit;
//mensaje alert
alert(" La temperatura celcius pasada a fahrenheit " + resultado + " grados ");	
}

