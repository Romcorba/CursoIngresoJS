/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //variables
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    //tomar id de la caja
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    //parsear variable
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //suma de variables  parseadas
    suma = precioUno + precioDos + precioTres;
    alert(" El resultado es: " + suma);
    
}
function Promedio () 
{
	 //variables
     let precioUno;
     let precioDos;
     let precioTres;
     let promedio;
 
     //tomar id de la caja
     precioUno = document.getElementById("txtIdPrecioUno").value;
     precioDos = document.getElementById("txtIdPrecioDos").value;
     precioTres = document.getElementById("txtIdPrecioTres").value;
 
     //parsear variable
     precioUno = parseInt(precioUno);
     precioDos = parseInt(precioDos);
     precioTres = parseInt(precioTres);
 
     //suma de variables  parseadas
     promedio = precioUno + precioDos + precioTres;
     alert(" El resultado es: " + promedio);

}
function PrecioFinal () 
{
//variables
let precioUno;
let precioDos;
let precioTres;
let precioIva;

//tomar id de la caja
precioUno = document.getElementById("txtIdPrecioUno").value;
precioDos = document.getElementById ("txtIdPrecioDos").value;
precioTres = document.getElementById("txtIdPrecioTres").value;

//parsear variable
precioUno = parseInt(precioUno);
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);

//suma de variables  parseadas
precioIva = (precioUno + precioDos + precioTres) * (21/100);
alert(" El resultado con iva es: " + precioIva);	
}