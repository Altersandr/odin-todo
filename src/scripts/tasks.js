const LOCAL_STORAGE_TASKS_KEY = 'task.list';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];

const addBtn = document.getElementById('addToDoBtn');
addBtn.addEventListener('click', addToDo);

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


export { deleteTask }
export { tasks }
import { closeModal, selectedProjectId } from "./index";

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
                                              
function deleteTask (e){
    const taskName = e.target.parentNode.parentNode.querySelector('span').innerText
    tasks = tasks.filter(task => task.title !== taskName);
    tasks = localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
    tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];
    renderTasks()
}
