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

export default checkComplete;
