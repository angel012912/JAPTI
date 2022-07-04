const primerElemento = document.getElementById('quienesSomos');
const segundoElemento = document.getElementById('servicios');
const tercerElemento = document.getElementById('clientes');
const cuartoElemento = document.getElementById('contacto');

const mostrarElemento = (entradas, observador) => {
	entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
        entrada.target.classList.add('mostrar');
    } 
    else {
        entrada.target.classList.remove('mostrar');
    }
	});
}

const observador1 = new IntersectionObserver(mostrarElemento, {
	root: null,
	rootMargin: '350px 0px',
	threshold: 1.0
});

observador1.observe(primerElemento);
observador1.observe(segundoElemento);
observador1.observe(tercerElemento);
observador1.observe(cuartoElemento);