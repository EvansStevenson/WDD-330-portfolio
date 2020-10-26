import TodoList from './model.js';
import addItemListener from './utilities.js';
import {
    completedTaskListener,
    displayAllListener,
    filterTaskActiveListener,
    filterTaskDoneListener,
    deleteItemsListener
} from './utilities.js'
let todo = new TodoList();

function addTask() {
    todo.addNewTask(document.getElementById("inputTodo").value);
    todo.displayTasks();
}

window.addEventListener('load', () => {
    todo.displayTasks();
    addItemListener(addTask);
    completedTaskListener(todo);
    displayAllListener(todo);
    filterTaskActiveListener(todo);
    filterTaskDoneListener(todo);
    deleteItemsListener(todo);
})



