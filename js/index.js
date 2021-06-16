import { getPeliculas } from "./servicios.js";
import { gebid } from "./utils.js";

const URL_ICONS = 'https://image.tmdb.org/t/p/w500/';

let formBusqueda = gebid("formBusqueda");
let inputBusqueda = gebid("inputBusqueda");
let divpeli = gebid("divpeli");
let mensaje = gebid("mensaje");


const llenarPeliculas = (peliculas) => {
    let cadena = '';

    peliculas.forEach((peli) => {
        let img = `https://www.wimacpc.com/assets/images/no-disponible.png`;
        if (peli.poster_path) {
            img = `${URL_ICONS}${peli.poster_path}`;
        }

        cadena += `
        <div class="col-3 mb-5 ">
            <div class="cards__container" id="cards__container"  style="width: 18rem;">
                <figure>
                    <img src="${img}" alt="" class="card-img-top" />
                </figure>
                <div class="card-body">
                    <h5 class="card-title">${peli.title}</h5>
                    <p class="card-text">${peli.overview}</p>
                    <small>Estreno: ${peli.release_date}</small>
                </div>
            </div>
        </div>
        `;
    });

    divpeli.innerHTML = cadena;

};

const mostrarMensaje = (total) => {
    mensaje.innerHTML = `Resultado de la búsqueda : ${inputBusqueda.value} - Total ${total}`;
};


formBusqueda.onsubmit = (e) => {
    e.preventDefault();

    getPeliculas(inputBusqueda.value).then((rpta) => {

        mostrarMensaje(rpta.results.length);
        if (rpta.results.length) {
            divpeli.innerHTML = '';
            llenarPeliculas(rpta.results);
        } else {
            Swal.fire({
                title: 'Ups!',
                text: 'No se encontró la película',
                icon: 'error'
            })
        }
    });

}