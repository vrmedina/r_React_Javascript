// Async Await

const getImagen = async() => {
    try {
        const apiKey = 'l2lclIkSLncNWgRkWRH6I5yMoPjvlVml';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await respuesta.json();
        
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    } catch (error) {
        // manejo del error
        console.error(error);
    }   
}

getImagen();