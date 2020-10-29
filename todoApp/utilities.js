export default function addItemListener(addTask) {
    document.getElementById("addButton").addEventListener("click", addTask);
}

export function completedTaskListener(todo, li) {
        todo.completeTask(li);
        todo.displayTasks();
}

export function displayAllListener(todo) {
    document.getElementById("all").addEventListener('click', todo.displayTasks);
}

export function filterTaskActiveListener(todo) {
    document.getElementById("active").addEventListener('click', () => {
        todo.filterTask(true);
    });
}

export function filterTaskDoneListener(todo) {
    document.getElementById("completed").addEventListener('click', () => {
        todo.filterTask(false);
    });
}

export function deleteItemsListener(todo) {
    document.getElementById("delete").addEventListener('click', () => {
        todo.removeTask();
        todo.filterTask(true);
    });
}

export function addListener(elementId, listener, todo){
    document.querySelector(elementId).addEventListener('touchend', (e) => {
        e.preventDefault();
        listener(todo, e);
    })

    document.querySelector(elementId).addEventListener('click', (e) => {
        listener(todo, e);
    })
}

