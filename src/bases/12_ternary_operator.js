// Operador condicional ternario

const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (activo) ? 'Activo' : null;

const mensaje = activo && 'Activo'; 
// Si activo es true, entonces mensaje es 'Activo' y si es false, 
// No se cumple la condicion, por lo tanto retorna false

console.log(mensaje);