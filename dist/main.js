/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"saveProjects\": () => (/* binding */ saveProjects),\n/* harmony export */   \"selectedProjectId\": () => (/* binding */ selectedProjectId)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/scripts/tasks.js\");\n\n\n\n\nconst modal = document.querySelector(\".modal\");\nconst overlay = document.querySelector(\".overlay\");\nconst openModalBtn = document.querySelector(\".btn-open\");\nconst closeModalBtn = document.querySelector(\".btn-close\");\n\nconst openModal = function () {\n    modal.classList.remove(\"hidden\");\n    overlay.classList.remove(\"hidden\");\n  };\n\nopenModalBtn.addEventListener(\"click\", openModal);\n\nconst closeModal = function () {\n    modal.classList.add(\"hidden\");\n    overlay.classList.add(\"hidden\");\n  };\n\ncloseModalBtn.addEventListener(\"click\", closeModal);\noverlay.addEventListener(\"click\", closeModal);\n\n\nconst projectsContainer = document.querySelector('[data-projects]');\nconst navlistContainer = document.querySelector('.navlist');\nconst newProjectForm = document.querySelector('[data-new-project-form]');\nconst newProjectInput = document.querySelector('[data-new-project-input]');\nconst deleteProjectBtn = document.querySelector('[data-delete-project-btn]');\n\n\nconst taskTitleElement = document.querySelector('[data-task-title]')\n\nconst LOCAL_STORAGE_PROJECT_KEY = 'task.projects';\nconst LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY ='task.selectedProjectId';\n\nlet projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY))||[];\n\nlet selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY)\n\n\nnavlistContainer.addEventListener('click', e=>{\n  if(e.target.tagName.toLowerCase()==='li'){\n    if(e.target.classList = \"home\"){\n      selectedProjectId = null\n      taskTitleElement.innerHTML = \"Home\";\n      saveProjects()\n      ;(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)()\n  }else{\n    selectedProjectId = e.target.dataset.projectId\n    saveProjects()\n    renderProjects()\n  }\n  }\n})\n\nprojectsContainer.addEventListener('click', e=>{\n  if(e.target.tagName.toLowerCase()==='li'){\n    selectedProjectId = e.target.dataset.projectId\n    saveProjects()\n    renderProjects()\n    \n  }\n})\n\n\ndeleteProjectBtn.addEventListener('click', e=>{\n  projects = projects.filter(project => project.id !== selectedProjectId)\n  let filteredTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__.tasks\n  filteredTasks = filteredTasks.filter(task => task.id === selectedProjectId)\n  selectedProjectId = null;\n  saveProjects()\n  renderProjects()\n\n})\n\n\n\nnewProjectForm.addEventListener('submit', e=>{\n  e.preventDefault();\n  const projectName = newProjectInput.value;\n  if(projectName == null || projectName === \"\") return\n  const project = createProject(projectName);\n  newProjectInput.value = null\n  projects.push(project);\n  saveProjects()\n  renderProjects()\n \n})\n\nfunction createProject (name){\n return {id: Date.now().toString(), name: name}\n}\n\n\nfunction saveProjects(){\n  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects))\n  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId)\n\n}\n\n\nfunction renderProjects (){\n  clearElement(projectsContainer)\n  render()\n  \n  const selectedProject = projects.find(project =>project.id === selectedProjectId)\n  \n    if(selectedProject===undefined){\n      return\n    taskTitleElement.innerText = selectedProject.name\n    }else{taskTitleElement.innerText = selectedProject.name}\n  \n  (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)()\n}\n\n\nfunction render(){\n  projects.forEach(project =>{\n    const projectElement = document.createElement('li');\n    projectElement.dataset.projectId = project.id;\n    projectElement.classList.add('project-name');\n    projectElement.innerText = project.name;\n    if (project.id === selectedProjectId) {\n    projectElement.classList.add('active-project')\n    }\n    projectsContainer.appendChild(projectElement);\n  })\n}\n\n\nfunction clearElement(element){\n  while(element.firstChild){\n    element.removeChild(element.firstChild)\n  }\n}\n\nwindow.addEventListener('load', e=>{\n  selectedProjectId = null\n      taskTitleElement.innerHTML = \"Home\";\n      saveProjects()\n      ;(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)()\n})\n\n\nconst taskDetailBtn = document.querySelector('.task-details-btn');\n// taskDetailBtn.addEventListener('click', showDetails)\n\nconsole.log(taskDetailBtn)\n\n// function showDetails(){\n//   const detailsModal = document.querySelector(\".task-details\");\n//   detailsModal.classList.remove(\"hidden\");\n//   overlay.classList.remove(\"hidden\");\n// }\n\n\n\nrenderProjects()\n\n\n\n\n\n\n\n\n// const modal = document.querySelector(\".modal\");\n// const overlay = document.querySelector(\".overlay\");\n// const openModalBtn = document.querySelector(\".btn-open\");\n// const closeModalBtn = document.querySelector(\".btn-close\");\n\n// const openModal = function () {\n//     modal.classList.remove(\"hidden\");\n//     overlay.classList.remove(\"hidden\");\n//   };\n\n// openModalBtn.addEventListener(\"click\", openModal);\n\n// const closeModal = function () {\n//     modal.classList.add(\"hidden\");\n//     overlay.classList.add(\"hidden\");\n//   };\n\n// closeModalBtn.addEventListener(\"click\", closeModal);\n\n//# sourceURL=webpack://odin-todo/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/tasks.js":
/*!******************************!*\
  !*** ./src/scripts/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/scripts/index.js\");\n\nclass Task {\n    constructor(title, description, dueDate, notes, id, priority){\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.notes = notes;\n    this.id = id;\n    this.checked = false;\n    this.priority = priority\n    }\n}\n\n\nfunction createTask(){\n    const title = document.getElementById('title').value\n    const description = document.getElementById('description').value\n    const dueDate = document.getElementById('date').value\n    const notes = document.getElementById('notes').value\n    const id = _index__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId;\n    const priority = document.querySelector('input[type=radio]:checked').id;\n    console.log(priority)\n    return new Task(title, description, dueDate, notes, id, priority)\n}\n\nconst LOCAL_STORAGE_TASKS_KEY = 'task.list';\nlet tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];\n\n\n\n;\n\n\n\nconst addToDo = function(){\n    if(title.value ===\"\"){return}\n    const newTask = createTask();\n    tasks.push(newTask)\n    console.log(tasks)\n    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.closeModal)()\n    title.value = \"\";\n    description.value = \"\";\n    notes.value = \"\";\n    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks))\n    renderTasks()\n\n};\n                        \nconst addBtn = document.getElementById('addToDoBtn');\n                        \naddBtn.addEventListener('click', addToDo);\n\nfunction deleteTask (e){\n    const taskName = e.target.parentNode.querySelector('span').innerText\n\n    tasks = tasks.filter(task => task.title !== taskName);\n    tasks = localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));\n    tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))||[];\n    renderTasks()\n}\n\nfunction renderTasks (){\n    const mainContainer = document.querySelector('.task-body');\n    mainContainer.innerHTML = \"\";\n    tasks.forEach(task=>{\n        const priority = task.priority\n       \n        const divContainer = document.createElement('div');\n        divContainer.dataset.id =  _index__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId\n        \n        divContainer.classList.add('tasks');\n        divContainer.classList.add(priority)\n        const checkbox = document.createElement('input');\n        checkbox.type = \"checkbox\";\n        checkbox.name = \"checkbox\";\n        checkbox.id = \"checkbox\";\n        const taskTitle = document.createElement('span');\n        const taskDueDate = document.createElement('span');\n        const taskDetails = document.createElement('span');\n        taskDetails.className = \"task-details-btn\";\n        const editPic = document.createElement('img');\n        editPic.height = \"20\";\n        editPic.src = \"../src/img/edit.svg\";\n        const deletePic = document.createElement('img');\n        deletePic.height = \"20\";\n        deletePic.src=\"../src/img/trash.svg\";\n        deletePic.classList.add(\"deleteTask\");\n        \n        const controls = document.createElement('div');\n        controls.id = 'controls';\n        controls.appendChild(taskDetails)\n        controls.appendChild(editPic)\n        controls.appendChild(deletePic)\n        deletePic.addEventListener('click', deleteTask)\n\n        checkbox.addEventListener(\"change\", () => {\n            if (checkbox.checked) {\n                divContainer.classList.add(\"checked\");\n            } else {\n                divContainer.classList.remove(\"checked\");\n            }\n          });\n\n        taskTitle.innerText = task.title;\n        taskDueDate.innerHTML = task.dueDate;\n        taskDetails.innerHTML = 'Details';\n        divContainer.appendChild(checkbox)\n        divContainer.appendChild(taskTitle)\n        // divContainer.appendChild(taskDetails)\n        divContainer.appendChild(taskDueDate)\n        divContainer.appendChild(controls)\n        \n     if(task.id === _index__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId){\n        mainContainer.appendChild(divContainer)\n}else if (_index__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId ===null){\n    // selectedProjectId = \"\"\n    mainContainer.appendChild(divContainer)\n}\n    })\n}\n\n\nconst taskDetailBtn = document.querySelector('.task-details-btn');\n// taskDetailBtn.addEventListener('click', showDetails)\n\nconsole.log(taskDetailBtn)\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/scripts/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;