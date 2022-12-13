
class Task {
    constructor(title, description, dueDate, notes, id){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.id = id;
    }
}


function createTask(){
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const dueDate = document.getElementById('date').value
    const notes = document.getElementById('notes').value
    const id = selectedProjectId;
    return new Task(title, description, dueDate, notes, id)
}

const LOCAL_STORAGE_TASKS_KEY = 'task.list';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];


// const tasks = [];
    // title: "Brush teeth",
    // description: "",
    // dueDate: `2022-12-12`,
    // priority: "high",
    // notes: "Use the newly bought toothpaste",
    // checklist: "checked",


export {tasks}
import { closeModal } from "./index";
import { selectedProjectId } from "./index";

const addToDo = function(){
    const newTask = createTask();
    tasks.push(newTask)
    console.log(tasks)
    closeModal()
    title.value = "";
    description.value = "";
    notes.value = "";
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks))
    renderTasks()

};
                        
const addBtn = document.getElementById('addToDoBtn');
                        
addBtn.addEventListener('click', addToDo);

// function 

// function createDomTask(){
//     const divContainer = document.createElement('div');
//     divContainer.classList.add('tasks');
//     const checkbox = document.createElement('input');
//     checkbox.type = "checkbox";
//     checkbox.name = "checkbox";
//     checkbox.id = "checkbox";
//     const taskTitle = document.createElement('span');
//     const taskDueDate = document.createElement('span');
//     const editPic = document.createElement('img');
//     editPic.height = "20px";
//     editPic.src = "../src/img/edit.svg";
//     const deletePic = document.createElement('img');
//     deletePic.height = "20px";
//     deletePic.src="../src/img/trash.svg";
// };

function renderTasks (){
    const mainContainer = document.querySelector('.task-body');
    mainContainer.innerHTML = "";
    tasks.forEach(task=>{
        
        const divContainer = document.createElement('div');
        divContainer.dataset.id =  selectedProjectId
        
        divContainer.classList.add('tasks');
        
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.id = "checkbox";
        const taskTitle = document.createElement('span');
        const taskDueDate = document.createElement('span');
        const taskDetails = document.createElement('span');
        taskDetails.id = "task-details";
        const editPic = document.createElement('img');
        editPic.height = "20";
        editPic.src = "../src/img/edit.svg";
        const deletePic = document.createElement('img');
        deletePic.height = "20";
        deletePic.src="../src/img/trash.svg";
        taskTitle.innerHTML = task.title;
        taskDueDate.innerHTML = task.dueDate;
        taskDetails.innerHTML = 'Details';
        divContainer.appendChild(checkbox)
        divContainer.appendChild(taskTitle)
        divContainer.appendChild(taskDetails)
        divContainer.appendChild(taskDueDate)
        divContainer.appendChild(editPic)
        divContainer.appendChild(deletePic)
     if(task.id === selectedProjectId){
        mainContainer.appendChild(divContainer)}
    })
}


export {renderTasks}