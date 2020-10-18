import TodoList from './model.js';
let todo = new TodoList();

function test(){
    todo.addNewTask(document.getElementById("inputTodo").value);
    todo.displayTasks(); 
}
document.getElementById("addButton").addEventListener("click", test);

