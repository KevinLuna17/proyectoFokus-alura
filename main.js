const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');

//Reproduce en loop la musica
musica.loop = true;

//Agrego evento change ya que el checkbox cambia de estado
inputEnfoqueMusica.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
    botonCorto.classList.add('active');
})

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque');
    botonEnfoque.classList.add('active');
})

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo');
    botonLargo.classList.add('active');
})

//Funcion para cambiar contextos
function cambiarContexto (contexto) {
    //Remueve la clase active de todos los botones
    botones.forEach(function (contexto) {
        contexto.classList.remove('active');
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`);

    //Agrega texto dinamico (Template String)
    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            Que tal tomar un respiro? <br>
            <strong class="app__title-strong">Haz una pausa corta!</strong>
            `

            break;
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie<br>
            <strong class="app__title-strong">Haz una pausa larga.</strong>
            `
            break;
        default:
            break;
    }
}