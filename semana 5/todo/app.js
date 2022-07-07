// DOM:
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector("#input_newtask");
inputTask.focus();

// Array tasks:
const arrayTasks = [];


// Funciones
function addTask() {
    if (inputTask.value == "") {
        alert("Ingresa un texto como tarea.")
        return;
    }
    const task = new Task(inputTask.value);
    arrayTasks.push(task);
    // Mostrar en el DOM:
    const lastTask = listTasks.lastElementChild;
    lastTask.before(task.element)
    inputTask.value = "";
    inputTask.focus();
}

function checkTask(checkbox) {
    if (checkbox.checked) {
        const task_id = checkbox.parentElement.id;
        const task = arrayTasks.find(task => task.id == task_id);
        checkbox.setAttribute('disabled', true);
        task.done();
    }
}

function deleteTask(anchor) {
    const task_id = anchor.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.del();
    anchor.style.display = 'none';
}

const chxTaskDone = document.querySelector("#chx_task_done");


// Checkbox tiene el evento onchange
chxTaskDone.onchange = function () {
  const taskTodo = document.querySelectorAll(".todo");
  const taskDelete = document.querySelectorAll(".delete");
  console.log(taskTodo);
  if (this.checked) {
    // recurden que taskTodo es una lista de elementos HTML
    taskTodo.forEach((todo) => (todo.style.display = "none"));
    taskDelete.forEach((task) => (task.style.display = "none"));
    // vamos a mostrar solo la tareas terminadas
    // por ende vamos a buscar la tareas que tengan la clase todo y la clase delete
    // y las vamos a ocultar
    // querySelectarAll
  } else {
    taskTodo.forEach((todo) => (todo.style.display = "block"));
    taskDelete.forEach((task) => (task.style.display = "block"));
  }
};

