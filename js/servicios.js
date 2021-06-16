const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "17ca26b2bc3ea19204a0d8bdb7f285a0";

export const getPeliculas = async(pelicula) => {
    const enpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${pelicula}&language=es-ES&region=ES&include_adult=false`;
    const respose = await fetch(enpoint);
    const rpta = respose.json();
    //console.log(rpta);
    return rpta;
};