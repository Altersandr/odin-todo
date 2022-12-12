import { tasks } from "./tasks";



const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


const projectsContainer = document.querySelector('[data-projects]');
const newProjectForm = document.querySelector('[data-new-project-form]');
const newProjectInput = document.querySelector('[data-new-project-input]');
const deleteProjectBtn = document.querySelector('[data-delete-project-btn]');

const taskDisplayContainer = document.querySelector('[data-task-display-container]')
const taskTitleElement = document.querySelector('[data-task-title]')
const taskCountElement = document.querySelector('[data-task-count]')
const tasksContainer = document.querySelector('[data-tasks]')


const LOCAL_STORAGE_PROJECT_KEY = 'task.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY ='task.selectedProjectId';

const LOCAL_STORAGE_TASKS_KEY = 'tasks.list';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY))||[];

// let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];

let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY)


// console.log(projects)
projectsContainer.addEventListener('click', e=>{
  if(e.target.tagName.toLowerCase()==='li'){
    selectedProjectId = e.target.dataset.projectId
    saveProjects()
    renderProjects()
  }
})

deleteProjectBtn.addEventListener('click', e=>{
  projects = projects.filter(project => project.id !== selectedProjectId)
  selectedProjectId = null;
  saveProjects()
  renderProjects()
})

newProjectForm.addEventListener('submit', e=>{
  e.preventDefault();
  const projectName = newProjectInput.value;
  if(projectName == null || projectName === "") return
  const project = createProject(projectName);
  newProjectInput.value = null
  projects.push(project);
  saveProjects()
  renderProjects()
})

function createProject (name){
 return {id: Date.now().toString(), name: name, projectTasks: []}
}


function saveProjects(){
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId)
  // localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks))
}


function renderProjects (){
  clearElement(projectsContainer)
  render()
  
  const selectedProject = projects.find(project =>project.id === selectedProjectId)
  if (selectedProjectId == null){
    taskDisplayContainer.style.display = "none"
  }else{
    taskDisplayContainer.style.display = ""
    taskTitleElement.innerText = selectedProject.name
    // renderTaskCount(selectedProject)
    // clearElement(tasksContainer)
  }
}

// function renderTaskCount(selectedProject){
//   const remainingTasks = selectedProject.tasks.filter(task=> !task.complete).length
//   const taskString =  remainingTasks ===1 ? "task": "tasks"
//   taskCountElement.innerText  = `${remainingTasks} ${taskString} remaining`
// }

function render(){
  projects.forEach(project =>{
    const projectElement = document.createElement('li');
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add('project-name');
    projectElement.innerText = project.name;
    if (project.id === selectedProjectId) {
    projectElement.classList.add('active-project')
    }
    projectsContainer.appendChild(projectElement);
  })
}



function clearElement(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }
}

renderProjects()

export {closeModal}

export {selectedProjectId}

