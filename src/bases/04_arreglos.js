// Arreglos en JavaScript
//const arreglo = new Array(100);}
const arreglo = [1,2,3,4];

//arreglo.push(1); //agrega un elemento al final del arreglo (no es recomendable)
//let arreglo2 = arreglo; //asigna la referencia del arreglo a arreglo2 (no es recomendable)

let arreglo2 = [...arreglo, 5]; //agrega un elemento al final del arreglo (recomendable)

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);