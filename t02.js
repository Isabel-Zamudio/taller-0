// Escribe un programa que genere la tabla de multiplicar de un número dado.

let n = prompt("Diguite numero que desea multiplicar: ")
let y = prompt("hasta que numero desea multiplicar: ")

for ( let i = 0; i <= y ; i++){
    let x = i * n 
    console.log(i + " x " + n + " = " + x)
}
