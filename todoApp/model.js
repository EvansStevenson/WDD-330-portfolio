export default class TodoList {
    constructor() {
        this.todo = {};
        this.toDoList = []; // todo: grab out of local storage
    }

    addNewTask(newTask) {
        if (newTask !== "") {
            this.toDoList = JSON.parse(window.sessionStorage.getItem('itemList'));
            if (this.toDoList === null) {
                this.toDoList = [];
            }
            let timeStamp = new Date().toLocaleTimeString();
            let content = newTask;
            let isCompleted = false;
            this.todo = { time: timeStamp, content: content, done: isCompleted };
            this.toDoList.push(this.todo);
            window.sessionStorage.setItem('itemList', JSON.stringify(this.toDoList));
        }
    }

    completeTask(clickedItem) {
        let splitItem = clickedItem.target.innerHTML.split("-");
        this.toDoList = JSON.parse(window.sessionStorage.getItem('itemList'));
        for (let item of this.toDoList) {
            if (item.content == splitItem[0].trim() && item.time == splitItem[1].trim()) {
                if (item.done === false) {
                    item.done = true;
                }
                else {
                    item.done = false;
                }
                sessionStorage.clear;
                window.sessionStorage.setItem('itemList', JSON.stringify(this.toDoList));
            }
        }
    }

    removeTask() {
        this.toDoList = JSON.parse(window.sessionStorage.getItem('itemList'));
        let newToDoList = [];
        for (let item of this.toDoList) {
            if (item.done === false) {
                newToDoList.push(item);
            }
        }
        sessionStorage.clear;
        window.sessionStorage.setItem('itemList', JSON.stringify(newToDoList));
    }

    filterTask(active) {
        document.getElementById("ulToDo").innerHTML = ""
        let display = "";
        this.toDoList = JSON.parse(window.sessionStorage.getItem('itemList'));
        if (active === true) {
            for (let item of this.toDoList) {
                if (item.done === false) {
                    display += "<li>" + item.content + "   -   " + item.time + "</li>"
                }
            }
        }
        else {
            for (let item of this.toDoList) {
                if (item.done === true) {
                    display += "<li class=\"done\">" + item.content + "   -   " + item.time + "</li>"
                }
            }
        }
        document.getElementById("ulToDo").innerHTML = display;
        document.getElementById("inputTodo").value = "";
    }

    displayTasks() {
        let displayList = JSON.parse(window.sessionStorage.getItem('itemList'));
        let display = "";
        if (displayList !== null) {
            for (let item of displayList) {
                if (item.done === true) {
                    display += "<li class=\"done\">" + item.content + "   -   " + item.time + "</li>"
                    document.getElementById("ulToDo").innerHTML = display;
                }
                else {
                    display += "<li>" + item.content + "   -   " + item.time + "</li>"
                    document.getElementById("ulToDo").innerHTML = display;
                }
            }
            document.getElementById("inputTodo").value = "";
        }
    }
}

