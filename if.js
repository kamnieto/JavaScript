var age = prompt('ingrese una edad'); //ingreso de datos por teclado
if (age<18){
    console.log("su edad es "+ age +" años, no puede votar");
} else if(age==18){
    console.log("su edad es "+ age +" años, puede votar por primera vez");
}else{console.log("su edad es "+ age +" años, puede votar");}

// ternario
var age = prompt('ingrese una edad'); //ingreso de datos por teclado
var resultado = age>=18 ? "eres mayor de edad" : "eres menor de edad";
console.log (resultado);