/*Para que usuario no acceda a las funciones por medio del navegador usamos: Immediately invoked function expression IIFE*/
(() => {
	const btn = document.querySelector('[data-form-btn]');

	//ARROW FUNCTIONS OR FUNCIONES ANONIMAS
	const createTask = (evento) => {
		evento.preventDefault();
		const input = document.querySelector('[data-form-input]');
		const value = input.value;
		const list = document.querySelector('[data-list]');
		//createElement => Crea un ELEMENTO
		const task = document.createElement('li');
		//classlist.add('classCSS') => AGREGA una CLASE al ELEMENTO
		task.classList.add('card');
		input.value = '';
		//backticks ( ` ` )
		const taskContent = document.createElement('div');
		const titleTask = document.createElement('span');
		titleTask.classList.add('task');
		titleTask.innerHTML = value;
		taskContent.appendChild(checkComplete());
		taskContent.appendChild(titleTask);

		const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;

		//innerHTML => ESTABLECE o DEVUELVE contenido HTML de un elemento
		//task.innerHTML = content;
		task.appendChild(taskContent);

		/*
      .appendChild => AGREGAR un Elemento hijo a la lista(ELEMENTO PADRE)
      .insertBefore(padre, hijo) => Coloca un nodo antes del otro
      .replaceChild(elemento1, elemento2) => Sustituye el nodo del elemento 1 por el nodo del elemento 2
      .removeChild(elemento) => Remueve un nodo del árbol
    */
		list.appendChild(task);
	};

	//EVENTO LISTENER
	btn.addEventListener('click', createTask);

	const checkComplete = () => {
		const i = document.createElement('i');
		i.classList.add('far', 'fa-check-square', 'icon');
		i.addEventListener('click', completeTask);
		return i;
	};

	const completeTask = (event) => {
		//.target => Capturamos el elemento al que se le hizo click en el evento
		const element = event.target;
		//.toggle => Verifica si existe la clase, SI EXISTE REMUEVE, SI NO EXISTE AGREGA
		element.classList.toggle('fas');
		element.classList.toggle('completeIcon');
		element.classList.toggle('far');
		//.remove => Remueve la clase
	};
})();
