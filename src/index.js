import { getHeroeById } from './bases/08_import_export';

// Promesas en JavaScript
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     // importen el 
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject('No se pudo encontrar el héroe');
//   }, 2000);
// }
// );

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch(error => console.warn(error));

// then es una funcion que se ejecuta cuando la promesa se resuelve
// catch es una funcion que se ejecuta cuando la promesa se rechaza
// finally es una funcion que se ejecuta cuando la promesa se resuelve o se rechaza

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then(console.log) // el console.log recibe el heroe como argumento y lo imprime
    .catch(console.warn); // el console.warn recibe el error como argumento y lo imprime

