//Escribe un programa que calcule el factorial de un número. 

let numero = parseInt(prompt("Ingresa un numero: ))
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
      return numero * factorial(numero - 1);
    }
}

console.log("El factorial de " + numero + " es: " + factorial(numero));
