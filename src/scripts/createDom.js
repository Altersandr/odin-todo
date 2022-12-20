import { deleteTask } from "./tasks";
import { showDetails } from "./taskDetails";
import { today } from "./today";

export { renderTasks }


const mainContainer = document.querySelector('.task-body');

function renderTasks (){
    mainContainer.innerHTML = "";
    tasks.forEach(task=>{
        
        createDomElements(task)

        taskDetails.addEventListener('click', showDetails)
        deletePic.addEventListener('click', deleteTask)
        checkbox.addEventListener("change", checkUncheckState)
        
     if(task.id === selectedProjectId){
        mainContainer.appendChild(divContainer)
}else if (selectedProjectId =="home" ||selectedProjectId ==null){
  
    mainContainer.appendChild(divContainer)
}else if (selectedProjectId =="today" && task.dueDate ==today){
    mainContainer.appendChild(divContainer)
}
    })
}

const checkUncheckState = function (){
    if (checkbox.checked) {
        divContainer.classList.add("checked");
        
    } else {
        divContainer.classList.remove("checked");
    }
};

function createDomElements (task){
        const priority = task.priority
       
        const divContainer = document.createElement('div');
        const checkbox = document.createElement('input');

        const taskTitle = document.createElement('span');
        const taskDueDate = document.createElement('span');
        const taskDetails = document.createElement('span');

        const deletePic = document.createElement('img');

        const controls = document.createElement('div');
        
        divContainer.classList.add('tasks');
        divContainer.classList.add(priority)
        deletePic.classList.add("deleteTask");
        
        divContainer.dataset.id =  selectedProjectId
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.id = "checkbox";
        taskDetails.className = "task-details-btn";
        deletePic.height = "20";
        deletePic.src="../src/img/trash.svg";
        controls.id = 'controls';
        taskTitle.innerText = task.title;
        taskDueDate.innerHTML = task.dueDate;
        taskDetails.innerHTML = 'Details';
        
        controls.appendChild(taskDetails)
        controls.appendChild(deletePic)
        divContainer.appendChild(checkbox)
        divContainer.appendChild(taskTitle)
        divContainer.appendChild(taskDueDate)
        divContainer.appendChild(controls)
};