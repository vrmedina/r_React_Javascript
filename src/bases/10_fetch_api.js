// Fetch API

const apiKey = 'l2lclIkSLncNWgRkWRH6I5yMoPjvlVml';

// la peticion fetch retorna una promesa
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// la promesa tiene un metodo then que recibe una funcion
// la funcion recibe como argumento la respuesta de la peticion
// la respuesta de la peticion es un objeto con la propiedad json
peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );