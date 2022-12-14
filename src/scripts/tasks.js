
class Task {
    constructor(title, description, dueDate, notes, id, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.id = id;
    this.checked = false;
    this.priority = priority
    }
}


function createTask(){
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const dueDate = document.getElementById('date').value
    const notes = document.getElementById('notes').value
    const id = selectedProjectId;
    const priority = document.querySelector('input[type=radio]:checked').id;
    console.log(priority)
    return new Task(title, description, dueDate, notes, id, priority)
}

const LOCAL_STORAGE_TASKS_KEY = 'task.list';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];


export {tasks}
import { closeModal } from "./index";
import { selectedProjectId } from "./index";
import { saveProjects } from "./index";

const addToDo = function(){
    if(title.value ===""){return}
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

function deleteTask (e){
    const taskName = e.target.parentNode.querySelector('span').innerText

    tasks = tasks.filter(task => task.title !== taskName);
    tasks = localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
    tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];
    renderTasks()
}

function renderTasks (){
    const mainContainer = document.querySelector('.task-body');
    mainContainer.innerHTML = "";
    tasks.forEach(task=>{
        const priority = task.priority
       
        const divContainer = document.createElement('div');
        divContainer.dataset.id =  selectedProjectId
        
        divContainer.classList.add('tasks');
        divContainer.classList.add(priority)
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.id = "checkbox";
        const taskTitle = document.createElement('span');
        const taskDueDate = document.createElement('span');
        const taskDetails = document.createElement('span');
        taskDetails.className = "task-details-btn";
        const editPic = document.createElement('img');
        editPic.height = "20";
        editPic.src = "../src/img/edit.svg";
        const deletePic = document.createElement('img');
        deletePic.height = "20";
        deletePic.src="../src/img/trash.svg";
        deletePic.classList.add("deleteTask");
        
        const controls = document.createElement('div');
        controls.id = 'controls';
        controls.appendChild(taskDetails)
        controls.appendChild(editPic)
        controls.appendChild(deletePic)
        deletePic.addEventListener('click', deleteTask)

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                divContainer.classList.add("checked");
            } else {
                divContainer.classList.remove("checked");
            }
          });

        taskTitle.innerText = task.title;
        taskDueDate.innerHTML = task.dueDate;
        taskDetails.innerHTML = 'Details';
        divContainer.appendChild(checkbox)
        divContainer.appendChild(taskTitle)
        // divContainer.appendChild(taskDetails)
        divContainer.appendChild(taskDueDate)
        divContainer.appendChild(controls)
        
     if(task.id === selectedProjectId){
        mainContainer.appendChild(divContainer)
}else if (selectedProjectId ===null){
    // selectedProjectId = ""
    mainContainer.appendChild(divContainer)
}
    })
}


const taskDetailBtn = document.querySelector('.task-details-btn');
// taskDetailBtn.addEventListener('click', showDetails)

console.log(taskDetailBtn)


export {renderTasks}