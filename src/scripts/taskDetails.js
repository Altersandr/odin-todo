import { tasks } from "./tasks"
import { closeModal } from "./index";

export {showDetails}

function showDetails(e){
    const taskTitle = e.target.parentNode.parentNode.querySelector('span').innerText;
    tasks.forEach(task => {
      
        if(task.title ===taskTitle){
            document.querySelector('.task-details-title').innerText = `Title: ${task.title}`;
            document.querySelector('.task-details-description').innerText = `Description: ${task.description}`;
            document.querySelector('.task-details-duedate').innerText = `Due Date: ${task.dueDate}`;
          
            if(task.priority =="highp"){
            document.querySelector('.task-details-priority').innerText = `Priority: High`;
            }else if(task.priority ==='mediump'){
            document.querySelector('.task-details-priority').innerText = `Priority: Medium`;
            }else{
            document.querySelector('.task-details-priority').innerText = `Priority: Low`;
            }
            document.querySelector('.task-details-notes').innerText = `Notes: ${task.notes}`;
            const taskDetailsContainer = document.querySelector('.task-details');
            taskDetailsContainer.classList.remove('hidden')
            const overlay = document.querySelector(".overlay");
            overlay.classList.remove("hidden");
            overlay.addEventListener("click", closeModal);
        }})
        
    
}
