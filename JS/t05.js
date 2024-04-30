// Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.
let a=prompt("numero 1: ");
let b=prompt("numero 2: ")

function suma(a,b){
    let c;
    c = a +b;
    console.log("el resultado de la suma es: "+ c); 

}

function resta(a,b){
    let c;
    c = a - b;
    console.log("el resultado de la resta es: "+ c); 
    
}

function multiplicar(a,b){
    let c;
    c = a * b;
    console.log("el resultado de la multiplicacion es: "+ c); 
    
}
function dividir (a,b){
    let c;
    c = a / b;
    console.log("el resultado de la divición es: "+ c); 
    
}
suma(a, b)
resta(a,b)
multiplicar(a,b)
dividir(a,b)

