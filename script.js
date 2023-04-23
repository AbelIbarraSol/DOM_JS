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
    const content = `<div>
                        <i class="far fa-check-square icon">
                        </i><span class="task">${value}</span>
                     </div>
                     <i class="fas fa-trash-alt trashIcon icon"></i>`;
    
    //innerHTML => ESTABLECE o DEVUELVE contenido HTML de un elemento
    task.innerHTML = content;
    //.appendChild => AGREGAR un Elemento hijo a la lista(ELEMENTO PADRE)
    list.appendChild(task);
    console.log(content);
};

console.log(btn);
//LISTENER
btn.addEventListener('click', createTask);