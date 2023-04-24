import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

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
	task.appendChild(taskContent);
	task.appendChild(deleteIcon());
	list.appendChild(task);
};

//EVENTO LISTENER
btn.addEventListener('click', createTask);
