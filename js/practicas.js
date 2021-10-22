//FUNCION LONGITUD//
// ESTA FUNCION MUESTRA CUANTAS LETRAS TIENE UNA PALABRA //
function longitud() {
  let contenido = document.getElementById("palabras").value;
  let longitud = contenido.length;
  return document.getElementById('el_resultadopalabra1').innerHTML ="La palabra ingresada tiene"+ " " +longitud+ " " +"letras";
}


//FUNCIÓN MAYUSCULAS//
// ESTA FUNCION CONVIERTE UNA PALABRA EN MAYÚSCULAS //
function mayusculas() {
  let contenido= document.getElementById("mayus").value;
  let mayusculas = contenido.toUpperCase();
   return document.getElementById('el_resultadopalabra2').innerHTML ="La palabra ingresada en mayúsculas es:"+ " " +mayusculas;
}



//FUNCIION MINUSCULAS//
// ESTA FUNCION CONVIERTE UNA PALABRA EN MINÚSCULAS //
function minuscula() {
  let contenido = document.getElementById("minus").value;
  let minuscula = contenido.toLowerCase();
  return document.getElementById('el_resultadopalabra3').innerHTML ="LA PALABRA INGRESADA EN MINÚSCULAS ES:"+ " " +minuscula;
}