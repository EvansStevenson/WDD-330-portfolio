export default class TodoList{
    constructor(){
        this.todo = {};
        this.toDoList = [];
    }

    addNewTask(newTask){
        let timeStamp = new Date().toLocaleTimeString();
        let content = newTask;
        let completed = false; 
        this.todo = {time: timeStamp, content: content, done: completed};
        this.toDoList.push(this.todo);
        console.log(this.toDoList);
        window.localStorage.setItem('itemList', JSON.stringify(this.toDoList)); 
    }

    completeTask(){

    }

    removeTask(){

    }

    filterTask(){

    }

    displayTasks(){
        let displayList = JSON.parse(window.localStorage.getItem('itemList'));
        let display = "";
        for (let item of displayList){
            display += "<ul>" + item.content + "   -   " + item.time + "</ul>"
            document.getElementById("ulToDo").innerHTML = display;
        }
        document.getElementById("inputTodo").value = "";
    }
}

