//Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos.

let x=prompt("Ingrese el primer valor:");
let y=prompt("Ingrese el segundo valor:");

function mayor(x, y){
    if(x>y){
        console.log("el valor mas grande es: "+x)
    }
    else{
        console.log("el valor mas grande es: "+y)
    }
}
mayor(x,y)
