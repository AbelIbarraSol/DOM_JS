const btn = document.querySelector('[data-form-btn]');

//ARROW FUNCTIONS OR FUNCIONES ANONIMAS
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
};

console.log(btn);

//LISTENER
btn.addEventListener('click', createTask);