/*
Lucas Romero
Tp 2 (A b c)
Div E

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho 
     de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
    y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
    debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/    function Rectangulo () 
{
//declaro variables
let largo;
let ancho;
let perimetro;
let alambre;
//tomo id y parseo
largo=document.getElementById("txtIdLargo").value;
largo=parseInt(largo);
ancho=document.getElementById("txtIdAncho").value;
ancho=parseInt(ancho);
//calculo del perimetro y alambre
perimetro=largo*ancho;
alambre=perimetro*3;
//enviar alerta
alert(" Se necesitan " + alambre + " metros de alambre ")
    
}
function Circulo () 
{
//declaro 
let radio;
let perimetro;
let alambre;
//id y parseo
radio=document.getElementById("txtIdRadio").value;
radio=parseInt(radio)
//calculo
perimetro=2*3.14*radio;
alambre=perimetro*3;
alert(" Se necesitan " + alambre + " Metros de alambre ")
    
}
//C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
//debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular
function Materiales () 
{
//declarar variable
let cemento;
let cal;
let perimetro;
//tomar id y parsear
cemento=document.getElementById("txtIdLargo").value;
cemento=parseInt(cemento);
cal=document.getElementById("txtIdAncho").value;
cal=parseInt(cal);
//realizar calculo
cemento= cemento*2;
cal= cal*3;
perimetro=cemento+cal;
alert(" Se necesita un total de : " + perimetro + " bolsas. " + " bolsas de cemento " + cemento + " y  bolsas de cal " + cal);
    
}
