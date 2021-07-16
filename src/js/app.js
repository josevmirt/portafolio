document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
    changeColor()
    navegacionFija();
    scrollNavseg();
});

function navegacionFija() {
    const barra = document.querySelector('.header');
    // Registrar el Intersection Observer
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('.observer'));
}
//scroll
function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            list.style.display = 'none';
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function scrollNavseg() {
    const enlaces = document.querySelectorAll('#listaseg a');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            list.style.display = 'none';
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

const img = document.querySelector('.navegacion-seg img');
const list = document.querySelector('#listaseg');


img.addEventListener('click', function () {

    if (list.style.display == 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }


})

const btncontac = document.querySelector('.contenido-video a');
btncontac.addEventListener('click', function (e) {
    e.preventDefault();
    contacto.scrollIntoView({
        behavior: 'smooth'
    });
});


function changeColor() {

    const enlaces = document.querySelectorAll('.contenedor-contacto img');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("mouseover", color, false);
        enlace.addEventListener("mouseout", black, false);


    });
    function color(e) {
        icon = document.getElementById(e.target.id);
        // console.log(e.target.src.value)
        // console.log(e.target.id)
        icon.src = `build/img/icons/${e.target.id}c.svg`;
    }

    function black(e) {
        icon = document.getElementById(e.target.id);
        // console.log(e.target.src.value)
        // console.log(e.target.id)
        icon.src = `build/img/icons/${e.target.id}.svg`;
    }
}





