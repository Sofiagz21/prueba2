//FUNCIÓN LIMPIAR 
function limpiar (){
	document.getElementById('miformulario').reset;
}



//BOTON QUE PERMITE  SUMAR
  //ESTA FUNCIÓN PERMITE LA SUMA ENTRE DOS NÚMEROS
  function sumar(){
  	let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let suma= (num1+num2).toFixed(2);
  	return document.getElementById('el_resultado').innerHTML ="de la operación SUMA entre los números" + " "+num1+" "+"y"+" "+num2+" "+"es:"+" " + suma;
  }

  //BOTON QUE PERMITE  RESTAR
    //ESTA FUNCIÓN PERMITE LA RESTA ENTRE DOS NÚMEROS
  function restar(){
  	let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let resta= (num1-num2).toFixed(2);
  	 return document.getElementById('el_resultado').innerHTML ="de la operación RESTA entre los números" + " "+num1+" "+"y"+" "+num2+" "+"es:"+" " + resta;
  }

 //BOTON QUE PERMITE MULTIPLICAR
 //ESTA FUNCIÓN PERMITE LA MULTIPLICACIÓN ENTRE DOS NÚMEROS
 function multiplicar(){
  	let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let multiplicacion=(num1*num2).toFixed(2);
  	return document.getElementById('el_resultado').innerHTML = "de la operación MULTIPLICACIÓN entre los números" + " "+num1+" "+"y"+" "+num2+" "+"es:"+" " + multiplicacion;
  }

  //BOTON QUE PERMITE DIVIDIR
//ESTA FUNCIÓN PERMITE LA DIVISIÓN ENTRE DOS NÚMEROS, PERO SE UTILIZA UNA CONDICIÓN, EN CASO DE QUE SI DIVIDE EN 0
// SE MUESTRA EN PANTALLA QUE ES UN ERROR O NO SE PUEDE DIVIDIR EN 0 , EN CASO DE QUE NO SEA ASI PERMITIRA LA DIVISIÓN.
  function dividir(){
  	let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let  division= (num1/num2).toFixed(2);
      if(division=="Infinity"){
              return document.getElementById('el_resultado').innerHTML = ": No se puede dividir entre cero";
          }else{
              return document.getElementById('el_resultado').innerHTML ="de la operación DIVISIÓN entre los números" + " "+num1+" "+"y"+" "+num2+" "+"es:"+" " + division;
        }
      }

