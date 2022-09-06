//PARTE DE CATEGORIAS ¿Que es?, Formulario, Ayuda


const categorias = document.querySelectorAll('#categorias .categoria'); //Accedemos a todas las categorias el id del main "categorias" y con la clase categoria se entra a cada una que es ayuda, form, etc
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas'); //Accedemos a el contenedor de pregunta que tiene cada pregunta y respuesta
let categoriaActiva = null; //se va a guardar la categoria que se va encontrar activa

categorias.forEach((categoria) => {  //Accedemos a cada categoria con un forEach y por cada categoria se va usar una funcion. la funcion tiene un parametro
	categoria.addEventListener('click', (e) => { // por cada categoria se le pone un EventListener que es de tipo click para cuadno den un click se ejecute una funcion // parametro e

		categorias.forEach((elemento) => { //se accede a categorias y a cada elemento y por cada elemento queremos acceder a cla lista de clases con remmove para quitarle a cada uno la clase activa
			//le quita la clase a otros elementos (Se selecciona en azul)
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa'); //currentTargetse usa porque cuando se le da un click devuelve toda la categoria completa y se accede a toda la lista de clases y se hace un toggle de la clase activa es para cuando no tenga la clase de la pone y cuando la tiene se la quita.
		categoriaActiva = categoria.dataset.categoria; //en la variable categoriaActiva se quiere guardar el elemnto de categoria que es dataset atributo personazalizado. 


		//----SISTEMA DE FILTRO-----
		// Activamos el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => { //accedemos a todos los contenedores para ejecutar una funcion por cada contenedor 
			if(contenedor.dataset.categoria === categoriaActiva){ //si el contenedor actual tiene el mismo dataset. de tipo categoria
				contenedor.classList.add('activo'); //  y si es igual a la categoria activa queremos acceder a su contenedor y asu lista de clases
			} else { //entonces
				contenedor.classList.remove('activo'); // y si es diderente quitarle toda l inf del contenedor 
			}
		});
	});
});

