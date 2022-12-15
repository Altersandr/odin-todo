const LOCAL_STORAGE_TASKS_KEY = 'task.list';

let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];

class Task {
    constructor(title, description, dueDate, notes, id, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.id = id;
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
    return new Task(title, description, dueDate, notes, id, priority)
}



export {tasks}
import { closeModal } from "./index";
import { selectedProjectId } from "./index";
import { showDetails } from "./taskDetails";

const addToDo = function(){
    if(title.value ===""){return}
    const newTask = createTask();
    tasks.push(newTask)
    
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
    const taskName = e.target.parentNode.parentNode.querySelector('span').innerText
  

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
        taskDetails.addEventListener('click', showDetails)
        const deletePic = document.createElement('img');
        deletePic.height = "20";
        deletePic.src="../src/img/trash.svg";
        deletePic.classList.add("deleteTask");
        
        const controls = document.createElement('div');
        controls.id = 'controls';
        controls.appendChild(taskDetails)
      
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
        
        divContainer.appendChild(taskDueDate)
        divContainer.appendChild(controls)
        
     if(task.id === selectedProjectId){
        mainContainer.appendChild(divContainer)
}else if (selectedProjectId ===null){
  
    mainContainer.appendChild(divContainer)
}
    })
}

export {renderTasks}