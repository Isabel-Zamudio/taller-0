// Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso (sin usar funciones de JavaScript).

let str = prompt ("Digite string: ")

function voltear(str) {
    var lista = [];

    for (var i = str.length - 1; i >= 0; i--) {
        lista.push(str[i]);
    }

    return lista;
}

var lista = voltear(str);

console.log(lista);