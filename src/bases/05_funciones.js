// Funciones en JavaScript
// Funciones declarativas o de declaración 
function saludar( nombre ) {
    return `Hola, ${ nombre }`;
}

// Funciones de expresión o anónimas
const saludar2 = function( nombre ) {
    return `Hola, ${ nombre }`;
}

// Funciones de flecha o arrow functions
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

// Funciones de flecha o arrow functions (simplificada)
const saludar4 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar('Goku') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Trunks') );
console.log( saludar4('Goten') );

// Si la función solo tiene un argumento, se pueden omitir los paréntesis
// Si la función solo tiene una línea de código, se pueden omitir las llaves y el return
// Si el return es un objeto, se deben colocar entre paréntesis
const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

const user = getUser();
console.log( user );

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Victor');
console.log( usuarioActivo );