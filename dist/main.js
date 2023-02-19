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

/***/ "./src/scripts/createDom.js":
/*!**********************************!*\
  !*** ./src/scripts/createDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/scripts/tasks.js\");\n/* harmony import */ var _taskDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDetails */ \"./src/scripts/taskDetails.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ \"./src/scripts/today.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/scripts/index.js\");\n\n\n\n\n\n\nconst mainContainer = document.querySelector(\".task-body\");\nconst checkbox = document.createElement(\"input\");\nconst taskDetails = document.createElement(\"span\");\n\nfunction renderTasks(tasks) {\n  mainContainer.innerHTML = \"\";\n  tasks.forEach((task) => {\n    const divContainer = document.createElement(\"div\");\n    console.log(task.id);\n    createDomElements(task, divContainer);\n\n    taskDetails.addEventListener(\"click\", _taskDetails__WEBPACK_IMPORTED_MODULE_1__.showDetails);\n    deletePic.addEventListener(\"click\", _tasks__WEBPACK_IMPORTED_MODULE_0__.deleteTask);\n    checkbox.addEventListener(\"change\", checkUncheckState);\n\n    if (task.id === _index__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId) {\n      mainContainer.appendChild(divContainer);\n    } else if (_index__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId == \"home\" || _index__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId == null) {\n      mainContainer.appendChild(divContainer);\n    } else if (_index__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId == \"today\" && task.dueDate == _today__WEBPACK_IMPORTED_MODULE_2__.today) {\n      mainContainer.appendChild(divContainer);\n    }\n  });\n}\n\nconst checkUncheckState = function () {\n  if (checkbox.checked) {\n    divContainer.classList.add(\"checked\");\n  } else {\n    divContainer.classList.remove(\"checked\");\n  }\n};\n\nfunction createDomElements(task, divContainer) {\n  const priority = task.priority;\n\n  const checkbox = document.createElement(\"input\");\n\n  const taskTitle = document.createElement(\"span\");\n  const taskDueDate = document.createElement(\"span\");\n\n  const controls = document.createElement(\"div\");\n\n  divContainer.classList.add(\"tasks\");\n  divContainer.classList.add(priority);\n  deletePic.classList.add(\"deleteTask\");\n\n  divContainer.dataset.id = _index__WEBPACK_IMPORTED_MODULE_3__.selectedProjectId;\n  checkbox.type = \"checkbox\";\n  checkbox.name = \"checkbox\";\n  checkbox.id = \"checkbox\";\n  taskDetails.className = \"task-details-btn\";\n  deletePic.height = \"20\";\n  deletePic.src = \"../src/img/trash.svg\";\n  controls.id = \"controls\";\n  taskTitle.innerText = task.title;\n  taskDueDate.innerHTML = task.dueDate;\n  taskDetails.innerHTML = \"Details\";\n\n  controls.appendChild(taskDetails);\n  controls.appendChild(deletePic);\n  divContainer.appendChild(checkbox);\n  divContainer.appendChild(taskTitle);\n  divContainer.appendChild(taskDueDate);\n  divContainer.appendChild(controls);\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/scripts/createDom.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"saveProjects\": () => (/* binding */ saveProjects),\n/* harmony export */   \"selectedProjectId\": () => (/* binding */ selectedProjectId)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/scripts/tasks.js\");\n/* harmony import */ var _createDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDom */ \"./src/scripts/createDom.js\");\n\n\n\n\n\n\n\n\n\n\nconst modal = document.querySelector(\".modal\");\nconst overlay = document.querySelector(\".overlay\");\nconst openModalBtn = document.querySelector(\".btn-open\");\nconst closeModalBtn = document.querySelector(\".btn-close\");\nconst taskDetailsContainer = document.querySelector(\".task-details\");\n\nconst projectsContainer = document.querySelector(\"[data-projects]\");\nconst navlistContainer = document.querySelector(\".navlist\");\nconst newProjectForm = document.querySelector(\"[data-new-project-form]\");\nconst newProjectInput = document.querySelector(\"[data-new-project-input]\");\nconst deleteProjectBtn = document.querySelector(\"[data-delete-project-btn]\");\n\nconst taskTitleElement = document.querySelector(\"[data-task-title]\");\n\nconst LOCAL_STORAGE_PROJECT_KEY = \"task.projects\";\nconst LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = \"task.selectedProjectId\";\n\nlet projects =\n  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];\n\nlet selectedProjectId = localStorage.getItem(\n  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY\n);\n\nconst openModal = function () {\n  modal.classList.remove(\"hidden\");\n  overlay.classList.remove(\"hidden\");\n};\n\nopenModalBtn.addEventListener(\"click\", openModal);\n\nconst closeModal = function () {\n  modal.classList.add(\"hidden\");\n  overlay.classList.add(\"hidden\");\n  taskDetailsContainer.classList.add(\"hidden\");\n};\n\ncloseModalBtn.addEventListener(\"click\", closeModal);\noverlay.addEventListener(\"click\", closeModal);\n\nnavlistContainer.addEventListener(\"click\", (e) => {\n  if (e.target.tagName.toLowerCase() === \"li\") {\n    if (e.target.classList == \"home\") {\n      selectedProjectId = \"home\";\n      taskTitleElement.innerHTML = \"Home\";\n      saveProjects();\n      (0,_createDom__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasks);\n    } else if (e.target.classList == \"today\") {\n      selectedProjectId = \"today\";\n      taskTitleElement.innerHTML = \"Today\";\n      saveProjects();\n      (0,_createDom__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasks);\n    } else {\n      selectedProjectId = e.target.dataset.projectId;\n      saveProjects();\n      renderProjects();\n    }\n  }\n});\n\nprojectsContainer.addEventListener(\"click\", (e) => {\n  if (e.target.tagName.toLowerCase() === \"li\") {\n    selectedProjectId = e.target.dataset.projectId;\n    saveProjects();\n    renderProjects();\n  }\n});\n\ndeleteProjectBtn.addEventListener(\"click\", (e) => {\n  projects = projects.filter((project) => project.id !== selectedProjectId);\n  let filteredTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__.tasks;\n  filteredTasks = filteredTasks.filter((task) => task.id === selectedProjectId);\n  selectedProjectId = null;\n  saveProjects();\n  renderProjects();\n});\n\nnewProjectForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const projectName = newProjectInput.value;\n  if (projectName == null || projectName === \"\") return;\n  const project = createProject(projectName);\n  newProjectInput.value = null;\n  projects.push(project);\n  saveProjects();\n  renderProjects();\n});\n\nfunction createProject(name) {\n  return { id: Date.now().toString(), name: name };\n}\n\nfunction saveProjects() {\n  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));\n  localStorage.setItem(\n    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,\n    selectedProjectId\n  );\n}\n\nfunction renderProjects() {\n  clearElement(projectsContainer);\n  render();\n\n  const selectedProject = projects.find(\n    (project) => project.id === selectedProjectId\n  );\n\n  if (selectedProject == undefined) {\n    return;\n  } else {\n    taskTitleElement.innerText = selectedProject.name;\n  }\n\n  (0,_createDom__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasks);\n}\n\nfunction render() {\n  projects.forEach((project) => {\n    const projectElement = document.createElement(\"li\");\n    projectElement.dataset.projectId = project.id;\n    projectElement.classList.add(\"project-name\");\n    projectElement.innerText = project.name;\n    if (project.id === selectedProjectId) {\n      projectElement.classList.add(\"active-project\");\n    }\n    projectsContainer.appendChild(projectElement);\n  });\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nwindow.addEventListener(\"load\", () => {\n  selectedProjectId = null;\n  taskTitleElement.innerHTML = \"Home\";\n  saveProjects();\n  (0,_createDom__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasks);\n});\n\nrenderProjects();\n\n\n//# sourceURL=webpack://odin-todo/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/taskDetails.js":
/*!************************************!*\
  !*** ./src/scripts/taskDetails.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showDetails\": () => (/* binding */ showDetails)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/scripts/tasks.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/scripts/index.js\");\n\n\n\n\n\nfunction showDetails(e) {\n  const taskTitle =\n    e.target.parentNode.parentNode.querySelector(\"span\").innerText;\n  _tasks__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {\n    if (task.title === taskTitle) {\n      document.querySelector(\n        \".task-details-title\"\n      ).innerText = `Title: ${task.title}`;\n      document.querySelector(\n        \".task-details-description\"\n      ).innerText = `Description: ${task.description}`;\n      document.querySelector(\n        \".task-details-duedate\"\n      ).innerText = `Due Date: ${task.dueDate}`;\n\n      if (task.priority == \"highp\") {\n        document.querySelector(\n          \".task-details-priority\"\n        ).innerText = `Priority: High`;\n      } else if (task.priority === \"mediump\") {\n        document.querySelector(\n          \".task-details-priority\"\n        ).innerText = `Priority: Medium`;\n      } else {\n        document.querySelector(\n          \".task-details-priority\"\n        ).innerText = `Priority: Low`;\n      }\n      document.querySelector(\n        \".task-details-notes\"\n      ).innerText = `Notes: ${task.notes}`;\n      const taskDetailsContainer = document.querySelector(\".task-details\");\n      taskDetailsContainer.classList.remove(\"hidden\");\n      const overlay = document.querySelector(\".overlay\");\n      overlay.classList.remove(\"hidden\");\n      overlay.addEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_1__.closeModal);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/scripts/taskDetails.js?");

/***/ }),

/***/ "./src/scripts/tasks.js":
/*!******************************!*\
  !*** ./src/scripts/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/scripts/index.js\");\n/* harmony import */ var _createDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDom */ \"./src/scripts/createDom.js\");\nconst LOCAL_STORAGE_TASKS_KEY = \"task.list\";\nlet tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];\n\nclass Task {\n  constructor(title, description, dueDate, notes, id, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.notes = notes;\n    this.id = id;\n    this.priority = priority;\n  }\n}\n\nfunction createTask() {\n  const title = document.getElementById(\"title\").value;\n  const description = document.getElementById(\"description\").value;\n  const dueDate = document.getElementById(\"date\").value;\n  const notes = document.getElementById(\"notes\").value;\n  const id = _index__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId;\n  const priority = document.querySelector(\"input[type=radio]:checked\").id;\n  return new Task(title, description, dueDate, notes, id, priority);\n}\n\n\n\n\n\n\nconst addToDo = function () {\n  if (title.value === \"\") {\n    return;\n  }\n  const newTask = createTask();\n  tasks.push(newTask);\n\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\n  title.value = \"\";\n  description.value = \"\";\n  notes.value = \"\";\n  localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));\n  (0,_createDom__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(tasks);\n};\n\nfunction deleteTask(e) {\n  const taskName =\n    e.target.parentNode.parentNode.querySelector(\"span\").innerText;\n  tasks = tasks.filter((task) => task.title !== taskName);\n  tasks = localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));\n  tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];\n  (0,_createDom__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(tasks);\n}\n\nconst addBtn = document.getElementById(\"addToDoBtn\");\naddBtn.addEventListener(\"click\", addToDo);\n\n\n//# sourceURL=webpack://odin-todo/./src/scripts/tasks.js?");

/***/ }),

/***/ "./src/scripts/today.js":
/*!******************************!*\
  !*** ./src/scripts/today.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"today\": () => (/* binding */ today)\n/* harmony export */ });\nconst day = new Date().getDate()\nconst month = new Date().getMonth()\nconst year = new Date().getFullYear()\n\nconst today = `${year}-${month+1}-${day}`;\n\n\n\n//# sourceURL=webpack://odin-todo/./src/scripts/today.js?");

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