
function ejercicio1 () {
var a =0;
var b =0;
var suma = 0;
var resta=0;
var multiplicacion=0;
var division =0;

// parseInt es para covertir string en enteros 
a = parseInt(prompt("ingrese el primer valor"));
b = parseInt(prompt("por favor ingrese el segundo valor"));

suma =a + b;
resta = a-b;
multiplicacion = a*b;
division = a /b;

alert ("el resultado de la suma es:"+ suma);
alert ("el resultado de la resta es:"+ resta);
alert ("el resultado de la multiplicacion es:"+ multiplicacion);
alert ("el resultado de la division es:"+ division);

}

function ejercicio2 () {
    num1 = parseInt(prompt("Ingrese el primer número: "));
    num2 = parseInt(prompt("Ingrese el segundo número: "));
    if(num1 > num2){
        alert ("el número mayor es:"+ num1);
    }else {
       alert ("el número mayor es:"+ num2);
    }
}
   
    function ejercicio3 () {
    //Determinar cual es el numero menor de tres numeros ingresados por el usuario//
   num1 = parseInt(prompt("Ingrese el primer número: "));
    num2 = parseInt(prompt("Ingrese el segundo número: "));
    num3 = parseInt(prompt("Ingrese el tercer número: "));
   
    if(num1 <= num2 && num1 <= num3){
        menor = num1;
    }else if(num2 <= num1 && num2 <= num3){
        menor = num2;
    }else{
        menor = num3;
    }
    alert ("el número menor es:"+ menor);
}



function ejercicio4 () {
 //Determinar si un numero es par o impar//
     let numero;
      numero=parseInt(prompt("introduzca un numero"));
      if (numero % 2==0){
          alert ("El numero " +numero+ " es par");
      } else{
          alert ("El numero " +numero+ " es impar");
      }
    }

    function ejercicio5 () {
//Determinar el cuadrado de un numero
let num = parseInt(prompt("Digite el numero "));
let exponente = num * num; 
alert("El cuadrado del numero es: " + exponente +"");

}


function ejercicio6 (){
 //Determinar el area de un triangulo
 let base = parseInt(prompt("introduzca la base del triangulo"));
 let altura = parseInt(prompt("introduzca la altura del triangulo"));
 let area;
 area = (base * altura) /2;
 alert ("El area del triangulo es: " + area + "cm²");
 //alt + 253*/

}


function ejercicio7(){
    //Determinar los centimetros de un valor dado en metros por el usuario
    var metros=0;
    var cm=0;
    
    metros=parseInt(prompt("digite los metros a calcular"));
    cm=(metros*100)
    alert("Los centimetros de los metros digitados son :"+cm+"centimetros");
    
    }



function ejercicio8(){
    var aactual = 0;
    var Edad = 0;
    var añonacido= 0;

    aactual = parseInt(prompt("Por favor ingrese el año actual: "));
    Edad = parseInt(prompt("Por favor ingrese la edad del usuario: "));

    añonacido =aactual-Edad;

    alert("El Año de nacimiento del usuario es: "+añonacido);

}

function ejercicio9(){
let numero = prompt("Ingrese su capital");
let anios = prompt("Ingrese a cuantos años");
const resultadoPorciento = anios * 2 / 100
const resultadoFinal = resultadoPorciento * numero 

alert("Su resultado final es: " + resultadoFinal);

}


function ejercicio10(){
let numero1 = parseFloat(prompt("Digite la primer nota: "))
let numero2 = parseFloat(prompt("Digite la segunda nota: "))
let numero3 = parseFloat(prompt("Digite la tercera nota: "))
let numero4 = parseFloat(prompt("Digite la cuarta nota: "))
let numero5 = parseFloat(prompt("Digite la quinta nota: "))
let resultado = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
console.log(resultado);
if(resultado == 1.0 || resultado <= 2.9){
    alert("El estudiante reprobo la materia");
}
else if(resultado >= 3.0 || resultado == 5.0){
    alert("El estudiante aprobo, excelente");
}
else{
    alert("No se pudo")
}


function ejercicio11(){
    var kg = 0;
    var total1 = 0;
    var total2 = 0;
    var porcentaje = 0;

    kg = parseInt(prompt("POR FAVOR INGRESE LOS KILOGRAMOS"));
    total1 = 4.500 * kg

    if(kg<=2){
    alert("NO TIENE DESCUENTO SU TOTAL ES DE: " + total1)
    }

   if ((kg>=3)&& (kg<=5)){
       porcentaje = total1 * 10/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 10%")
   }

   if ((kg>=6) && (kg<=10)){
       porcentaje = total1 * 15/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 15%")
   }

   if (kg>=11){
    porcentaje = total1 * 20/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 20%")   
   }
}


}

