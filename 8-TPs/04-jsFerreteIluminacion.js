/*
Lucas Romero
Div E
Tp 4 A
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
    descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
    se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
    brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio () 

//Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final
// A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
{
    //declaramos variables
    let cantidad;
    let lamparas=35;
    let descuento;
    let resultado;
    let precioFinal;
    //tomo datos y parseo
    cantidad=document.getElementById("txtIdCantidad").value;
    cantidad=parseInt(cantidad);
    //reailizamos calculos
    resultado=cantidad*lamparas;
    descuento=resultado*(50/100);
    precioFinal= lamparas*resultado
    //Condicion IF
    if (cantidad<=5) 
        {
        descuento=resultado;
        }
        else (cantidad>=6)
        {
            document.getElementById("txtIdprecioDescuento").value=descuento;
        }
console.log(resultado);
}
