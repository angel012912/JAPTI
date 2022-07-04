const elemento = document.getElementById('inicio');

const mostrarNavBar = (entradas, observador) => {
	entradas.forEach((entrada) => {
    let nav = document.getElementById('nav');
		if(entrada.isIntersecting){
      nav.classList.add('ocultar');
		} else {
      nav.classList.remove('ocultar');
    }
	});
}

const observador = new IntersectionObserver(mostrarNavBar, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});

observador.observe(elemento);
