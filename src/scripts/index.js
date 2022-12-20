import { tasks } from "./tasks";

import { renderTasks } from "./createDom";

export {closeModal}

export {selectedProjectId}

export {saveProjects}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const taskDetailsContainer = document.querySelector('.task-details');

const projectsContainer = document.querySelector('[data-projects]');
const navlistContainer = document.querySelector('.navlist');
const newProjectForm = document.querySelector('[data-new-project-form]');
const newProjectInput = document.querySelector('[data-new-project-input]');
const deleteProjectBtn = document.querySelector('[data-delete-project-btn]');


const taskTitleElement = document.querySelector('[data-task-title]');


const LOCAL_STORAGE_PROJECT_KEY = 'task.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY ='task.selectedProjectId';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY))||[];

const selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    taskDetailsContainer.classList.add('hidden')
  };

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

navlistContainer.addEventListener('click', e=>{
  if(e.target.tagName.toLowerCase()==='li'){
    if(e.target.classList == "home"){
      selectedProjectId = "home"
      taskTitleElement.innerHTML = "Home";
      saveProjects()
      renderTasks()
  }else if(e.target.classList == "today"){
    selectedProjectId = "today"
    taskTitleElement.innerHTML = "Today";
    saveProjects()
    renderTasks()
  }
  else{
    selectedProjectId = e.target.dataset.projectId
    saveProjects()
    renderProjects()
  }
  }
  
})


projectsContainer.addEventListener('click', e=>{
  if(e.target.tagName.toLowerCase()==='li'){
    selectedProjectId = e.target.dataset.projectId
    saveProjects()
    renderProjects()
    
  }
})


deleteProjectBtn.addEventListener('click', e=>{
  projects = projects.filter(project => project.id !== selectedProjectId)
  let filteredTasks = tasks
  filteredTasks = filteredTasks.filter(task => task.id === selectedProjectId)
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
 return {id: Date.now().toString(), name: name}
}


function saveProjects(){
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId)

}


function renderProjects (){
  clearElement(projectsContainer)
  render()
  
  const selectedProject = projects.find(project =>project.id === selectedProjectId)
  
    if(selectedProject==undefined){
      return
    }else{taskTitleElement.innerText = selectedProject.name}
  
  renderTasks()
}


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

window.addEventListener('load', e=>{
  selectedProjectId = null
      taskTitleElement.innerHTML = "Home";
      saveProjects()
      renderTasks()
})

renderProjects()


