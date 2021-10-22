//funcion principal la cual solo nos muestra el mensaje bienvenidos//

/* ESTA FUNCIÓN ME PERMITE OBSERVAR SOLO LA FUNCION PRINCIPAL , EL MENSAJE BIENVENIDOS SOLO 
AGREGANDOLE UN DISPLAY FLEX*/

function principal(){
	let vacio=document.getElementsByClassName('vacio')[0];
	vacio.style.display="flex";
	let principal= document.getElementsByClassName('ejercicioPalabras')[0];
	principal.style.display= "none";
	let segundo= document.getElementsByClassName("calculadora")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("imagenContenido")[0];
	tercero.style.display="none";
}

//funcion principal la cual solo nos muestra el ejercicio de palabras//

/* ESTA FUNCIÓN ME PERMITE OBSERVAR SOLO LA FUNCION PALABRAS , EL EJERCICIO PALABRAS SOLO 
AGREGANDOLE UN DISPLAY FLEX*/

function palabras(){
	let vacio=document.getElementsByClassName('vacio')[0];
	vacio.style.display="none";
	let principal= document.getElementsByClassName('ejercicioPalabras')[0];
	principal.style.display= "flex";
	let segundo= document.getElementsByClassName("calculadora")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("imagenContenido")[0];
	tercero.style.display="none";
}

//funcion principal la cual solo nos muestra el ejercicio de calculadora//

/* ESTA FUNCIÓN ME PERMITE OBSERVAR SOLO LA FUNCION CALCULADORA , EL EJERCICIO DE LA CALCULADORA SOLO 
AGREGANDOLE UN DISPLAY FLEX*/


function calculadora(){
	let vacio=document.getElementsByClassName('vacio')[0];
	vacio.style.display="none";
	let principal= document.getElementsByClassName('calculadora')[0];
	principal.style.display= "flex";
	let segundo= document.getElementsByClassName("ejercicioPalabras")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("imagenContenido")[0];
	tercero.style.display="none";
}

//funcion principal la cual solo nos muestra el ejercicio de la imagen//

/* ESTA FUNCIÓN ME PERMITE OBSERVAR SOLO LA FUNCION IAMGENCONT , mostrando una imagen SOLO 
AGREGANDOLE UN DISPLAY FLEX*/

function imagenCont(){
	let vacio=document.getElementsByClassName('vacio')[0];
	vacio.style.display="none";
	let principal= document.getElementsByClassName('imagenContenido')[0];
	principal.style.display= "flex";
	let segundo= document.getElementsByClassName("calculadora")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("ejercicioPalabras")[0];
	tercero.style.display="none";
}