let numeros = [2, 15, 8, 0, 9, 12, 588, 12, 0, 8, 56, 5.8, 6, 12000, 5000, 0 ];
let pares;
let listaPar = []
let listaImpar = []
let listaCero = []

for ( i = 0; i < numeros.length; i++ ){
    if ((numeros[i] %2 == 0 && numeros[i]!= 0 )){
        listaPar.push (numeros[i])
    }
    else if ((numeros[i] %2 != 0)){
        listaImpar.push (numeros[i])
    }
    else{
        listaCero.push(numeros[i])
    }
}

console.log ("El total de numeros impares son: " + listaImpar.length);
console.log("El total de numeros pares son: " + listaPar.length);
console.log("El total de numeros ceros son: " + listaCero.length);