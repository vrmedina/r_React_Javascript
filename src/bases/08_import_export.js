// Import, export y funciones comunes de arreglos

// Importar un módulo
//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//console.log(owners);
//console.log(heroes);

// Función que recibe un id y retorna un héroe
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));

// Función que recibe un dueño y retorna un arreglo de héroes
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));

