"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["editor"],{

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getOptionsFolders": () => (/* binding */ getOptionsFolders),
/* harmony export */   "updateSideBar": () => (/* binding */ updateSideBar)
/* harmony export */ });
/* harmony import */ var _expandedSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandedSidebar */ "./src/expandedSidebar.js");
/* eslint-disable prefer-template */
/* eslint-disable no-restricted-syntax */



let projects = JSON.parse(localStorage.data);

const date = new Date();
console.log(date.toLocaleString())
let selected;

const nameInUse = document.createElement('h4');
nameInUse.textContent = 'Name in use in ' + selected + ' folder';
nameInUse.setAttribute('style', 'color:transparent');

function getOptionsFolders() {
  projects = JSON.parse(localStorage.data);
  const selectFolder = document.createElement('select');
  selectFolder.id = 'select-folder';
  // eslint-disable-next-line no-restricted-syntax
  for (const [folderName] of Object.entries(projects)) {
    const option = document.createElement('option');
    option.textContent = folderName;
    option.id = folderName;
    selectFolder.appendChild(option);
  }
  selectFolder.addEventListener('change', () => {
    selected = selectFolder.selectedOptions[0].id;
  });
  if (selectFolder.firstChild) {
    selected = selectFolder.firstChild.id;
  }
  return selectFolder;
}

function saveProject(name, desc, date) {
  // eslint-disable-next-line no-restricted-syntax
  let newProject = { name, desc, date };
  for (const [folderName, values] of Object.entries(projects)) {
    // eslint-disable-next-line no-loop-func
    console.log(date)
    values.forEach((element) => {
      if (element.name === name && folderName === selected) {
        newProject = null;
        nameInUse.style.color = 'red';
      }
    });
  }
  if (newProject) {
    projects[selected].push(newProject);
    localStorage.setItem('data', JSON.stringify(projects));
    nameInUse.style.color = 'transparent';
  }
}

function updateSideBar() {
  if (document.getElementById('hide-sidebar-expanded')) {
    const sidebar = document.getElementById('hide-expanded-sidebar');
    sidebar.removeChild(sidebar.lastChild);
    sidebar.appendChild((0,_expandedSidebar__WEBPACK_IMPORTED_MODULE_0__.getFolders)());
  } else if (document.getElementById('show-expanded-sidebar')) {
    const sidebar = document.getElementById('show-expanded-sidebar');
    sidebar.removeChild(sidebar.lastChild);
    sidebar.appendChild((0,_expandedSidebar__WEBPACK_IMPORTED_MODULE_0__.getFolders)());
  }
}

const folders = () => {
  const editorFolder = document.createElement('div');
  editorFolder.id = 'editor-folder';

  const folderLabel = document.createElement('label');
  folderLabel.textContent = 'Select Folder: ';

  editorFolder.append(folderLabel, getOptionsFolders());
  return editorFolder;
};

function handleForm(e) {
  e.preventDefault();
}

const editor = () => {
  const editorContainer = document.createElement('form');
  editorContainer.id = 'editor-container';
  editorContainer.onsubmit = (e) => handleForm(e);

  const editorProjectName = document.createElement('div');
  editorProjectName.id = 'editor-project-name';

  const editorNameLabel = document.createTextNode('label');
  editorNameLabel.textContent = 'Project Name: ';

  const editorNameInput = document.createElement('input');
  editorNameInput.id = 'name-input';
  editorNameInput.placeholder = 'My-Project';
  editorNameInput.required = 'true';
  editorNameInput.minLength = 4;

  editorProjectName.append(editorNameLabel, editorNameInput);

  const editorDescriptionInput = document.createElement('textarea');
  editorDescriptionInput.id = 'description-input';
  editorDescriptionInput.placeholder = 'My awesome project details';

  const editorDateInput = document.createElement('input');
  editorDateInput.type = 'date';
  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Due to:';

  const buttonsContainer = document.createElement('div');

  const saveButton = document.createElement('input');
  saveButton.type = 'submit';
  saveButton.id = 'save-btn';
  // eslint-disable-next-line max-len
  saveButton.addEventListener('click', () => {
    if (!editorNameInput.validity.valueMissing) {
      saveProject(editorNameInput.value, editorDescriptionInput.value, editorDateInput.value);
      editorDateInput.value = '';
      editorDescriptionInput.value = '';
      editorNameInput.value = '';
      return updateSideBar();
    }
  });

  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancelbtn';
  cancelButton.textContent = 'Cancel';

  buttonsContainer.append(saveButton, cancelButton);

  // eslint-disable-next-line max-len
  editorContainer.append(nameInUse, folders(), editorProjectName, editorDescriptionInput, dateLabel, editorDateInput, buttonsContainer);

  return editorContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editor);


/***/ }),

/***/ "./src/expandedSidebar.js":
/*!********************************!*\
  !*** ./src/expandedSidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFolders": () => (/* binding */ getFolders),
/* harmony export */   "sidebarExpanded": () => (/* binding */ sidebarExpanded),
/* harmony export */   "updateFolders": () => (/* binding */ updateFolders)
/* harmony export */ });
/* harmony import */ var _sidebarSVG_newfolder_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarSVG/newfolder.svg */ "./src/sidebarSVG/newfolder.svg");
/* harmony import */ var _sidebarSVG_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarSVG/deleteIcon.svg */ "./src/sidebarSVG/deleteIcon.svg");
/* harmony import */ var _sidebarSVG_important_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarSVG/important.svg */ "./src/sidebarSVG/important.svg");
/* harmony import */ var _viewprojects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewprojects */ "./src/viewprojects.js");
/* harmony import */ var _projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.json */ "./src/projects.json");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/editor.js");
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable guard-for-in */





// eslint-disable-next-line import/no-cycle


if (localStorage.data === undefined || localStorage.data === '[object Object]') { localStorage.data = JSON.stringify(_projects_json__WEBPACK_IMPORTED_MODULE_4__); }
let projects = JSON.parse(localStorage.data);

function getFolders() {
  projects = JSON.parse(localStorage.data);
  const folderContainer = document.createElement('div');
  folderContainer.id = 'folder-container';
  const showProject = document.createElement('div');
  showProject.id = 'show-project';

  for (const [folderName, values] of Object.entries(projects)) {
    const folder = document.createElement('div');
    folder.classList.add('folders');
    folder.id = folderName;

    const deleteFolderIcon = document.createElement('img');
    deleteFolderIcon.src = _sidebarSVG_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_1__;
    deleteFolderIcon.id = 'delete-folder';
    deleteFolderIcon.classList.add(folderName);
    // eslint-disable-next-line no-loop-func
    deleteFolderIcon.onclick = () => deleteFolder(deleteFolderIcon.className);
    const folderLabel = document.createElement('div');
    folderLabel.textContent = folderName;
    folderLabel.id = 'label';
    folderLabel.appendChild(deleteFolderIcon);
    folderContainer.append(folderLabel);

    values.forEach((element) => {
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('project-container');
      projectContainer.id = element.name;

      const importantIcon = document.createElement('img');
      importantIcon.src = _sidebarSVG_important_svg__WEBPACK_IMPORTED_MODULE_2__;
      importantIcon.id = 'important-icon';
      importantIcon.classList.add('important-icon-default');
      importantIcon.onclick = () => markAsImportant(importantIcon);

      projectContainer.addEventListener('click', () => {
        if (showProject.childElementCount === 0) {
          showProject.appendChild((0,_viewprojects__WEBPACK_IMPORTED_MODULE_3__["default"])(element.name));
          const addBtn = document.getElementById('new-project-welcome-btn')
          addBtn.style.marginLeft = '60rem';
        } else {
          showProject.removeChild(showProject.firstChild);
          showProject.append((0,_viewprojects__WEBPACK_IMPORTED_MODULE_3__["default"])(element.name));
        }
      });

      const name = document.createElement('p');
      name.textContent = element.name;

      const date = document.createElement('p');
      date.textContent = element.date;

      projectContainer.append(name, date);
      folder.append(projectContainer, importantIcon);
      folderContainer.append(folder, showProject);
    });
  }
  return folderContainer;
}

function newFolder(folderName) {
  if (/\s/g.test(folderName)) {
    let folder = folderName;
    folder = folder.replaceAll(' ', '-');
    console.log(folder)
    projects[folder] = [];
  } else {
    projects[folderName] = [];
  }
  localStorage.setItem('data', JSON.stringify(projects));
  const replace = JSON.parse(localStorage.data);
  Object.assign(projects, replace);
}

function deleteFolder(folder) {
  console.log(projects[folder])
  delete projects[folder];
  localStorage.setItem('data', JSON.stringify(projects));
  updateFolders();
}

function markAsImportant(icon) {
  switch (icon.className) {
    case 'important-icon-default': icon.classList.add('important-icon-marked'); icon.classList.remove('important-icon-default'); return;
    case 'important-icon-marked': icon.classList.add('important-icon-default'); icon.classList.remove('important-icon-marked'); return;
    default: icon.classList.add('important-icon-default');
  }
}

function updateFolders() {
  const editorFolder = document.getElementById('editor-folder');
  const expandedSidebar = document.getElementById('show-expanded-sidebar');
  expandedSidebar.removeChild(expandedSidebar.lastChild);
  expandedSidebar.appendChild(getFolders());
  editorFolder.removeChild(editorFolder.lastChild);
  return editorFolder.appendChild((0,_editor__WEBPACK_IMPORTED_MODULE_5__.getOptionsFolders)());
}

const sidebarExpanded = () => {
  const expandedSidebar = document.createElement('div');
  expandedSidebar.id = 'hide-expanded-sidebar';

  const exploreLabel = document.createElement('label');
  exploreLabel.textContent = 'Expĺore Projets';
  exploreLabel.classList.add('expanded-sidebar-label');

  const addFolder = document.createElement('div');

  const addFolderIcon = document.createElement('img');
  addFolderIcon.src = _sidebarSVG_newfolder_svg__WEBPACK_IMPORTED_MODULE_0__;
  addFolderIcon.classList.add('expanded-sidebar-icons');

  addFolder.appendChild(addFolderIcon);

  const addFolderMenu = document.createElement('div');

  const addFolderName = document.createElement('input');
  addFolderName.placeholder = 'My-Folder';

  const addFolderBtn = document.createElement('button');
  addFolderBtn.textContent = 'Add';

  addFolderMenu.append(addFolderName, addFolderBtn);
  addFolderMenu.style.display = 'none';

  expandedSidebar.append(exploreLabel, addFolder, addFolderMenu, getFolders());

  addFolder.addEventListener('click', () => {
    console.log(JSON.parse(localStorage.data))
    switch (addFolderMenu.style.display) {
      case '':
      case 'none': addFolderMenu.style.display = 'block'; return;
      case 'block': addFolderMenu.style.display = 'none'; return;
      default: addFolderMenu.style.display = 'none';
    }
  });
  addFolderBtn.addEventListener('click', () => {
    if (addFolderName.value && !projects[addFolderName.value]) {
      newFolder(addFolderName.value);
      (0,_editor__WEBPACK_IMPORTED_MODULE_5__.getOptionsFolders)();
      updateFolders();
      addFolderMenu.style.display = 'none';
    } else {
      addFolderName.value = 'Folder name in Use!';
    }
  });

  return expandedSidebar;
};


/***/ }),

/***/ "./src/viewprojects.js":
/*!*****************************!*\
  !*** ./src/viewprojects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebarSVG_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarSVG/deleteIcon.svg */ "./src/sidebarSVG/deleteIcon.svg");
/* harmony import */ var _sidebarSVG_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarSVG/close.svg */ "./src/sidebarSVG/close.svg");
/* harmony import */ var _expandedSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandedSidebar */ "./src/expandedSidebar.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */




let projects;
function getProject(element) {
  if (localStorage.data) {
    projects = JSON.parse(localStorage.data);
  } else { return null; }
  const showProject = document.createElement('div');
  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'projectView-buttons-container';
  const hr = document.createElement('hr');

  const closeBtn = document.createElement('img');
  closeBtn.src = _sidebarSVG_close_svg__WEBPACK_IMPORTED_MODULE_1__;
  closeBtn.id = 'close-project';
  closeBtn.classList.add('projectView-buttons');

  const deleteBtn = document.createElement('img');
  deleteBtn.classList.add('projectView-buttons');
  deleteBtn.src = _sidebarSVG_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_0__;
  deleteBtn.id = 'delete-project';
  buttonsContainer.append(closeBtn, deleteBtn);

  for (const [projectFolder, values] of Object.entries(projects)) {
    values.forEach((data) => {
      if (data.name === element) {
        const projectName = document.createElement('p');
        projectName.textContent = data.name.toUpperCase();
        projectName.id = 'project-name';
        const projectDesc = document.createElement('p');
        projectDesc.textContent = data.desc;
        projectDesc.id = 'project-description';
        const projectDate = document.createElement('p');
        projectDate.id = 'project-date';
        if (!data.date) {
          projectDate.textContent = 'N/D';
        } else {
          projectDate.textContent = data.date;
        }

        // eslint-disable-next-line max-len
        return showProject.append(buttonsContainer, projectName, projectDesc, projectDate, hr);
      }
    });
  }
  function closeView() {
    const container = document.getElementById('show-project');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    const addBtn = document.getElementById('new-project-welcome-btn')
    addBtn.style.marginLeft = 'auto';
  }
  function deleteProject() {
    const itemToDelete = showProject.childNodes[1].textContent;
    for (const [projectFolder, values] of Object.entries(projects)) {
      // eslint-disable-next-line no-loop-func
      values.forEach(element => {
        if (element.name.toUpperCase() === itemToDelete) {
          const index = projects[projectFolder].indexOf(element);
          projects[projectFolder].splice(index, 1);
          localStorage.data = JSON.stringify(projects);
          (0,_expandedSidebar__WEBPACK_IMPORTED_MODULE_2__.updateFolders)();
          closeView();
        }
      });
    }
  }
  closeBtn.onclick = () => closeView();
  deleteBtn.onclick = () => deleteProject();
  return showProject;
}



function viewProjects(element) {
  // getProject('work1');
  const container = document.createElement('div');
  container.appendChild(getProject(element));

  return container;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewProjects);


/***/ }),

/***/ "./src/sidebarSVG/close.svg":
/*!**********************************!*\
  !*** ./src/sidebarSVG/close.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bffb84ce2deb8280c4cf.svg";

/***/ }),

/***/ "./src/sidebarSVG/deleteIcon.svg":
/*!***************************************!*\
  !*** ./src/sidebarSVG/deleteIcon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c813c199ab7de0ee128.svg";

/***/ }),

/***/ "./src/sidebarSVG/important.svg":
/*!**************************************!*\
  !*** ./src/sidebarSVG/important.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98cf4cfb3b4b3b010b37.svg";

/***/ }),

/***/ "./src/sidebarSVG/newfolder.svg":
/*!**************************************!*\
  !*** ./src/sidebarSVG/newfolder.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8c6334a8374a20a9389.svg";

/***/ }),

/***/ "./src/projects.json":
/*!***************************!*\
  !*** ./src/projects.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Work":[{"name":"Example Project","desc":"Some description","date":"ND"}],"School":[],"Personal":[]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/editor.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQkFBaUIsa0RBQVM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFVO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrREFBYTtBQUN2QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZXhwYW5kZWRTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3ZpZXdwcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItdGVtcGxhdGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgeyBnZXRGb2xkZXJzLCBzaWRlYmFyRXhwYW5kZWQgfSBmcm9tICcuL2V4cGFuZGVkU2lkZWJhcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmRhdGEpO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnNvbGUubG9nKGRhdGUudG9Mb2NhbGVTdHJpbmcoKSlcbmxldCBzZWxlY3RlZDtcblxuY29uc3QgbmFtZUluVXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbm5hbWVJblVzZS50ZXh0Q29udGVudCA9ICdOYW1lIGluIHVzZSBpbiAnICsgc2VsZWN0ZWQgKyAnIGZvbGRlcic7XG5uYW1lSW5Vc2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjp0cmFuc3BhcmVudCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9uc0ZvbGRlcnMoKSB7XG4gIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZGF0YSk7XG4gIGNvbnN0IHNlbGVjdEZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3RGb2xkZXIuaWQgPSAnc2VsZWN0LWZvbGRlcic7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBmb3IgKGNvbnN0IFtmb2xkZXJOYW1lXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBmb2xkZXJOYW1lO1xuICAgIG9wdGlvbi5pZCA9IGZvbGRlck5hbWU7XG4gICAgc2VsZWN0Rm9sZGVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cbiAgc2VsZWN0Rm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBzZWxlY3RlZCA9IHNlbGVjdEZvbGRlci5zZWxlY3RlZE9wdGlvbnNbMF0uaWQ7XG4gIH0pO1xuICBpZiAoc2VsZWN0Rm9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBzZWxlY3RlZCA9IHNlbGVjdEZvbGRlci5maXJzdENoaWxkLmlkO1xuICB9XG4gIHJldHVybiBzZWxlY3RGb2xkZXI7XG59XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KG5hbWUsIGRlc2MsIGRhdGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGxldCBuZXdQcm9qZWN0ID0geyBuYW1lLCBkZXNjLCBkYXRlIH07XG4gIGZvciAoY29uc3QgW2ZvbGRlck5hbWUsIHZhbHVlc10gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdHMpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgIGNvbnNvbGUubG9nKGRhdGUpXG4gICAgdmFsdWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IG5hbWUgJiYgZm9sZGVyTmFtZSA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgbmV3UHJvamVjdCA9IG51bGw7XG4gICAgICAgIG5hbWVJblVzZS5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmIChuZXdQcm9qZWN0KSB7XG4gICAgcHJvamVjdHNbc2VsZWN0ZWRdLnB1c2gobmV3UHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIG5hbWVJblVzZS5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNpZGVCYXIoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS1zaWRlYmFyLWV4cGFuZGVkJykpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtZXhwYW5kZWQtc2lkZWJhcicpO1xuICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoc2lkZWJhci5sYXN0Q2hpbGQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZ2V0Rm9sZGVycygpKTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1leHBhbmRlZC1zaWRlYmFyJykpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctZXhwYW5kZWQtc2lkZWJhcicpO1xuICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoc2lkZWJhci5sYXN0Q2hpbGQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZ2V0Rm9sZGVycygpKTtcbiAgfVxufVxuXG5jb25zdCBmb2xkZXJzID0gKCkgPT4ge1xuICBjb25zdCBlZGl0b3JGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdG9yRm9sZGVyLmlkID0gJ2VkaXRvci1mb2xkZXInO1xuXG4gIGNvbnN0IGZvbGRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZm9sZGVyTGFiZWwudGV4dENvbnRlbnQgPSAnU2VsZWN0IEZvbGRlcjogJztcblxuICBlZGl0b3JGb2xkZXIuYXBwZW5kKGZvbGRlckxhYmVsLCBnZXRPcHRpb25zRm9sZGVycygpKTtcbiAgcmV0dXJuIGVkaXRvckZvbGRlcjtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmNvbnN0IGVkaXRvciA9ICgpID0+IHtcbiAgY29uc3QgZWRpdG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBlZGl0b3JDb250YWluZXIuaWQgPSAnZWRpdG9yLWNvbnRhaW5lcic7XG4gIGVkaXRvckNvbnRhaW5lci5vbnN1Ym1pdCA9IChlKSA9PiBoYW5kbGVGb3JtKGUpO1xuXG4gIGNvbnN0IGVkaXRvclByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXRvclByb2plY3ROYW1lLmlkID0gJ2VkaXRvci1wcm9qZWN0LW5hbWUnO1xuXG4gIGNvbnN0IGVkaXRvck5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdsYWJlbCcpO1xuICBlZGl0b3JOYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOiAnO1xuXG4gIGNvbnN0IGVkaXRvck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVkaXRvck5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcbiAgZWRpdG9yTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ015LVByb2plY3QnO1xuICBlZGl0b3JOYW1lSW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XG4gIGVkaXRvck5hbWVJbnB1dC5taW5MZW5ndGggPSA0O1xuXG4gIGVkaXRvclByb2plY3ROYW1lLmFwcGVuZChlZGl0b3JOYW1lTGFiZWwsIGVkaXRvck5hbWVJbnB1dCk7XG5cbiAgY29uc3QgZWRpdG9yRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGVkaXRvckRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24taW5wdXQnO1xuICBlZGl0b3JEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ015IGF3ZXNvbWUgcHJvamVjdCBkZXRhaWxzJztcblxuICBjb25zdCBlZGl0b3JEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlZGl0b3JEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSB0bzonO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2F2ZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gIHNhdmVCdXR0b24uaWQgPSAnc2F2ZS1idG4nO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghZWRpdG9yTmFtZUlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgc2F2ZVByb2plY3QoZWRpdG9yTmFtZUlucHV0LnZhbHVlLCBlZGl0b3JEZXNjcmlwdGlvbklucHV0LnZhbHVlLCBlZGl0b3JEYXRlSW5wdXQudmFsdWUpO1xuICAgICAgZWRpdG9yRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICBlZGl0b3JEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XG4gICAgICBlZGl0b3JOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHJldHVybiB1cGRhdGVTaWRlQmFyKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnV0dG9uLmlkID0gJ2NhbmNlbGJ0bic7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHNhdmVCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgZWRpdG9yQ29udGFpbmVyLmFwcGVuZChuYW1lSW5Vc2UsIGZvbGRlcnMoKSwgZWRpdG9yUHJvamVjdE5hbWUsIGVkaXRvckRlc2NyaXB0aW9uSW5wdXQsIGRhdGVMYWJlbCwgZWRpdG9yRGF0ZUlucHV0LCBidXR0b25zQ29udGFpbmVyKTtcblxuICByZXR1cm4gZWRpdG9yQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWRpdG9yO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuaW1wb3J0IG5ld2ZvbGRlckljb24gZnJvbSAnLi9zaWRlYmFyU1ZHL25ld2ZvbGRlci5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9zaWRlYmFyU1ZHL2RlbGV0ZUljb24uc3ZnJztcbmltcG9ydCBpbXBvcnRhbnRpY29uIGZyb20gJy4vc2lkZWJhclNWRy9pbXBvcnRhbnQuc3ZnJztcbmltcG9ydCB2aWV3UHJvamVjdHMgZnJvbSAnLi92aWV3cHJvamVjdHMnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9wcm9qZWN0cy5qc29uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IGdldE9wdGlvbnNGb2xkZXJzIH0gZnJvbSAnLi9lZGl0b3InO1xuXG5pZiAobG9jYWxTdG9yYWdlLmRhdGEgPT09IHVuZGVmaW5lZCB8fCBsb2NhbFN0b3JhZ2UuZGF0YSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHsgbG9jYWxTdG9yYWdlLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTsgfVxubGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZGF0YSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2xkZXJzKCkge1xuICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmRhdGEpO1xuICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9sZGVyQ29udGFpbmVyLmlkID0gJ2ZvbGRlci1jb250YWluZXInO1xuICBjb25zdCBzaG93UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaG93UHJvamVjdC5pZCA9ICdzaG93LXByb2plY3QnO1xuXG4gIGZvciAoY29uc3QgW2ZvbGRlck5hbWUsIHZhbHVlc10gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdHMpKSB7XG4gICAgY29uc3QgZm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnMnKTtcbiAgICBmb2xkZXIuaWQgPSBmb2xkZXJOYW1lO1xuXG4gICAgY29uc3QgZGVsZXRlRm9sZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUZvbGRlckljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBkZWxldGVGb2xkZXJJY29uLmlkID0gJ2RlbGV0ZS1mb2xkZXInO1xuICAgIGRlbGV0ZUZvbGRlckljb24uY2xhc3NMaXN0LmFkZChmb2xkZXJOYW1lKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgZGVsZXRlRm9sZGVySWNvbi5vbmNsaWNrID0gKCkgPT4gZGVsZXRlRm9sZGVyKGRlbGV0ZUZvbGRlckljb24uY2xhc3NOYW1lKTtcbiAgICBjb25zdCBmb2xkZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvbGRlckxhYmVsLnRleHRDb250ZW50ID0gZm9sZGVyTmFtZTtcbiAgICBmb2xkZXJMYWJlbC5pZCA9ICdsYWJlbCc7XG4gICAgZm9sZGVyTGFiZWwuYXBwZW5kQ2hpbGQoZGVsZXRlRm9sZGVySWNvbik7XG4gICAgZm9sZGVyQ29udGFpbmVyLmFwcGVuZChmb2xkZXJMYWJlbCk7XG5cbiAgICB2YWx1ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5pZCA9IGVsZW1lbnQubmFtZTtcblxuICAgICAgY29uc3QgaW1wb3J0YW50SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1wb3J0YW50SWNvbi5zcmMgPSBpbXBvcnRhbnRpY29uO1xuICAgICAgaW1wb3J0YW50SWNvbi5pZCA9ICdpbXBvcnRhbnQtaWNvbic7XG4gICAgICBpbXBvcnRhbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1pY29uLWRlZmF1bHQnKTtcbiAgICAgIGltcG9ydGFudEljb24ub25jbGljayA9ICgpID0+IG1hcmtBc0ltcG9ydGFudChpbXBvcnRhbnRJY29uKTtcblxuICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNob3dQcm9qZWN0LmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgc2hvd1Byb2plY3QuYXBwZW5kQ2hpbGQodmlld1Byb2plY3RzKGVsZW1lbnQubmFtZSkpO1xuICAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC13ZWxjb21lLWJ0bicpXG4gICAgICAgICAgYWRkQnRuLnN0eWxlLm1hcmdpbkxlZnQgPSAnNjByZW0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3dQcm9qZWN0LnJlbW92ZUNoaWxkKHNob3dQcm9qZWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIHNob3dQcm9qZWN0LmFwcGVuZCh2aWV3UHJvamVjdHMoZWxlbWVudC5uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmRhdGU7XG5cbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKG5hbWUsIGRhdGUpO1xuICAgICAgZm9sZGVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyLCBpbXBvcnRhbnRJY29uKTtcbiAgICAgIGZvbGRlckNvbnRhaW5lci5hcHBlbmQoZm9sZGVyLCBzaG93UHJvamVjdCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZvbGRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbmV3Rm9sZGVyKGZvbGRlck5hbWUpIHtcbiAgaWYgKC9cXHMvZy50ZXN0KGZvbGRlck5hbWUpKSB7XG4gICAgbGV0IGZvbGRlciA9IGZvbGRlck5hbWU7XG4gICAgZm9sZGVyID0gZm9sZGVyLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xuICAgIGNvbnNvbGUubG9nKGZvbGRlcilcbiAgICBwcm9qZWN0c1tmb2xkZXJdID0gW107XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdHNbZm9sZGVyTmFtZV0gPSBbXTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIGNvbnN0IHJlcGxhY2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5kYXRhKTtcbiAgT2JqZWN0LmFzc2lnbihwcm9qZWN0cywgcmVwbGFjZSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUZvbGRlcihmb2xkZXIpIHtcbiAgY29uc29sZS5sb2cocHJvamVjdHNbZm9sZGVyXSlcbiAgZGVsZXRlIHByb2plY3RzW2ZvbGRlcl07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgdXBkYXRlRm9sZGVycygpO1xufVxuXG5mdW5jdGlvbiBtYXJrQXNJbXBvcnRhbnQoaWNvbikge1xuICBzd2l0Y2ggKGljb24uY2xhc3NOYW1lKSB7XG4gICAgY2FzZSAnaW1wb3J0YW50LWljb24tZGVmYXVsdCc6IGljb24uY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LWljb24tbWFya2VkJyk7IGljb24uY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50LWljb24tZGVmYXVsdCcpOyByZXR1cm47XG4gICAgY2FzZSAnaW1wb3J0YW50LWljb24tbWFya2VkJzogaWNvbi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtaWNvbi1kZWZhdWx0Jyk7IGljb24uY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50LWljb24tbWFya2VkJyk7IHJldHVybjtcbiAgICBkZWZhdWx0OiBpY29uLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1pY29uLWRlZmF1bHQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRm9sZGVycygpIHtcbiAgY29uc3QgZWRpdG9yRm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1mb2xkZXInKTtcbiAgY29uc3QgZXhwYW5kZWRTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctZXhwYW5kZWQtc2lkZWJhcicpO1xuICBleHBhbmRlZFNpZGViYXIucmVtb3ZlQ2hpbGQoZXhwYW5kZWRTaWRlYmFyLmxhc3RDaGlsZCk7XG4gIGV4cGFuZGVkU2lkZWJhci5hcHBlbmRDaGlsZChnZXRGb2xkZXJzKCkpO1xuICBlZGl0b3JGb2xkZXIucmVtb3ZlQ2hpbGQoZWRpdG9yRm9sZGVyLmxhc3RDaGlsZCk7XG4gIHJldHVybiBlZGl0b3JGb2xkZXIuYXBwZW5kQ2hpbGQoZ2V0T3B0aW9uc0ZvbGRlcnMoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyRXhwYW5kZWQgPSAoKSA9PiB7XG4gIGNvbnN0IGV4cGFuZGVkU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBhbmRlZFNpZGViYXIuaWQgPSAnaGlkZS1leHBhbmRlZC1zaWRlYmFyJztcblxuICBjb25zdCBleHBsb3JlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBleHBsb3JlTGFiZWwudGV4dENvbnRlbnQgPSAnRXhwxLpvcmUgUHJvamV0cyc7XG4gIGV4cGxvcmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZC1zaWRlYmFyLWxhYmVsJyk7XG5cbiAgY29uc3QgYWRkRm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgYWRkRm9sZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhZGRGb2xkZXJJY29uLnNyYyA9IG5ld2ZvbGRlckljb247XG4gIGFkZEZvbGRlckljb24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQtc2lkZWJhci1pY29ucycpO1xuXG4gIGFkZEZvbGRlci5hcHBlbmRDaGlsZChhZGRGb2xkZXJJY29uKTtcblxuICBjb25zdCBhZGRGb2xkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgYWRkRm9sZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGFkZEZvbGRlck5hbWUucGxhY2Vob2xkZXIgPSAnTXktRm9sZGVyJztcblxuICBjb25zdCBhZGRGb2xkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkRm9sZGVyQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG5cbiAgYWRkRm9sZGVyTWVudS5hcHBlbmQoYWRkRm9sZGVyTmFtZSwgYWRkRm9sZGVyQnRuKTtcbiAgYWRkRm9sZGVyTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGV4cGFuZGVkU2lkZWJhci5hcHBlbmQoZXhwbG9yZUxhYmVsLCBhZGRGb2xkZXIsIGFkZEZvbGRlck1lbnUsIGdldEZvbGRlcnMoKSk7XG5cbiAgYWRkRm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmRhdGEpKVxuICAgIHN3aXRjaCAoYWRkRm9sZGVyTWVudS5zdHlsZS5kaXNwbGF5KSB7XG4gICAgICBjYXNlICcnOlxuICAgICAgY2FzZSAnbm9uZSc6IGFkZEZvbGRlck1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IHJldHVybjtcbiAgICAgIGNhc2UgJ2Jsb2NrJzogYWRkRm9sZGVyTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyByZXR1cm47XG4gICAgICBkZWZhdWx0OiBhZGRGb2xkZXJNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbiAgYWRkRm9sZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChhZGRGb2xkZXJOYW1lLnZhbHVlICYmICFwcm9qZWN0c1thZGRGb2xkZXJOYW1lLnZhbHVlXSkge1xuICAgICAgbmV3Rm9sZGVyKGFkZEZvbGRlck5hbWUudmFsdWUpO1xuICAgICAgZ2V0T3B0aW9uc0ZvbGRlcnMoKTtcbiAgICAgIHVwZGF0ZUZvbGRlcnMoKTtcbiAgICAgIGFkZEZvbGRlck1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRm9sZGVyTmFtZS52YWx1ZSA9ICdGb2xkZXIgbmFtZSBpbiBVc2UhJztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBleHBhbmRlZFNpZGViYXI7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9zaWRlYmFyU1ZHL2RlbGV0ZUljb24uc3ZnJztcbmltcG9ydCBjbG9zZWljb24gZnJvbSAnLi9zaWRlYmFyU1ZHL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgeyB1cGRhdGVGb2xkZXJzIH0gZnJvbSAnLi9leHBhbmRlZFNpZGViYXInO1xuXG5sZXQgcHJvamVjdHM7XG5mdW5jdGlvbiBnZXRQcm9qZWN0KGVsZW1lbnQpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5kYXRhKSB7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5kYXRhKTtcbiAgfSBlbHNlIHsgcmV0dXJuIG51bGw7IH1cbiAgY29uc3Qgc2hvd1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zQ29udGFpbmVyLmlkID0gJ3Byb2plY3RWaWV3LWJ1dHRvbnMtY29udGFpbmVyJztcbiAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNsb3NlQnRuLnNyYyA9IGNsb3NlaWNvbjtcbiAgY2xvc2VCdG4uaWQgPSAnY2xvc2UtcHJvamVjdCc7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWV3LWJ1dHRvbnMnKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWV3LWJ1dHRvbnMnKTtcbiAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZUljb247XG4gIGRlbGV0ZUJ0bi5pZCA9ICdkZWxldGUtcHJvamVjdCc7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGNsb3NlQnRuLCBkZWxldGVCdG4pO1xuXG4gIGZvciAoY29uc3QgW3Byb2plY3RGb2xkZXIsIHZhbHVlc10gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdHMpKSB7XG4gICAgdmFsdWVzLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLm5hbWUgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHByb2plY3ROYW1lLmlkID0gJ3Byb2plY3QtbmFtZSc7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IGRhdGEuZGVzYztcbiAgICAgICAgcHJvamVjdERlc2MuaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbic7XG4gICAgICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0RGF0ZS5pZCA9ICdwcm9qZWN0LWRhdGUnO1xuICAgICAgICBpZiAoIWRhdGEuZGF0ZSkge1xuICAgICAgICAgIHByb2plY3REYXRlLnRleHRDb250ZW50ID0gJ04vRCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBkYXRhLmRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICByZXR1cm4gc2hvd1Byb2plY3QuYXBwZW5kKGJ1dHRvbnNDb250YWluZXIsIHByb2plY3ROYW1lLCBwcm9qZWN0RGVzYywgcHJvamVjdERhdGUsIGhyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjbG9zZVZpZXcoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctcHJvamVjdCcpO1xuICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LXdlbGNvbWUtYnRuJylcbiAgICBhZGRCdG4uc3R5bGUubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGl0ZW1Ub0RlbGV0ZSA9IHNob3dQcm9qZWN0LmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG4gICAgZm9yIChjb25zdCBbcHJvamVjdEZvbGRlciwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgIHZhbHVlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lLnRvVXBwZXJDYXNlKCkgPT09IGl0ZW1Ub0RlbGV0ZSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHNbcHJvamVjdEZvbGRlcl0uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0Rm9sZGVyXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5kYXRhID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICAgICAgICAgIHVwZGF0ZUZvbGRlcnMoKTtcbiAgICAgICAgICBjbG9zZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNsb3NlQnRuLm9uY2xpY2sgPSAoKSA9PiBjbG9zZVZpZXcoKTtcbiAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiBkZWxldGVQcm9qZWN0KCk7XG4gIHJldHVybiBzaG93UHJvamVjdDtcbn1cblxuXG5cbmZ1bmN0aW9uIHZpZXdQcm9qZWN0cyhlbGVtZW50KSB7XG4gIC8vIGdldFByb2plY3QoJ3dvcmsxJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0UHJvamVjdChlbGVtZW50KSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCBkZWZhdWx0IHZpZXdQcm9qZWN0cztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==