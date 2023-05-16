"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["expanded"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/expandedSidebar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGlCQUFpQixrREFBUztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQVU7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtEQUFhO0FBQ3ZCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9leHBhbmRlZFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdmlld3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci10ZW1wbGF0ZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCB7IGdldEZvbGRlcnMsIHNpZGViYXJFeHBhbmRlZCB9IGZyb20gJy4vZXhwYW5kZWRTaWRlYmFyJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxubGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZGF0YSk7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc29sZS5sb2coZGF0ZS50b0xvY2FsZVN0cmluZygpKVxubGV0IHNlbGVjdGVkO1xuXG5jb25zdCBuYW1lSW5Vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xubmFtZUluVXNlLnRleHRDb250ZW50ID0gJ05hbWUgaW4gdXNlIGluICcgKyBzZWxlY3RlZCArICcgZm9sZGVyJztcbm5hbWVJblVzZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOnRyYW5zcGFyZW50Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHRpb25zRm9sZGVycygpIHtcbiAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5kYXRhKTtcbiAgY29uc3Qgc2VsZWN0Rm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdEZvbGRlci5pZCA9ICdzZWxlY3QtZm9sZGVyJztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3QgW2ZvbGRlck5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb2plY3RzKSkge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGZvbGRlck5hbWU7XG4gICAgb3B0aW9uLmlkID0gZm9sZGVyTmFtZTtcbiAgICBzZWxlY3RGb2xkZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuICBzZWxlY3RGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHNlbGVjdGVkID0gc2VsZWN0Rm9sZGVyLnNlbGVjdGVkT3B0aW9uc1swXS5pZDtcbiAgfSk7XG4gIGlmIChzZWxlY3RGb2xkZXIuZmlyc3RDaGlsZCkge1xuICAgIHNlbGVjdGVkID0gc2VsZWN0Rm9sZGVyLmZpcnN0Q2hpbGQuaWQ7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdEZvbGRlcjtcbn1cblxuZnVuY3Rpb24gc2F2ZVByb2plY3QobmFtZSwgZGVzYywgZGF0ZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgbGV0IG5ld1Byb2plY3QgPSB7IG5hbWUsIGRlc2MsIGRhdGUgfTtcbiAgZm9yIChjb25zdCBbZm9sZGVyTmFtZSwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgY29uc29sZS5sb2coZGF0ZSlcbiAgICB2YWx1ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gbmFtZSAmJiBmb2xkZXJOYW1lID09PSBzZWxlY3RlZCkge1xuICAgICAgICBuZXdQcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgbmFtZUluVXNlLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaWYgKG5ld1Byb2plY3QpIHtcbiAgICBwcm9qZWN0c1tzZWxlY3RlZF0ucHVzaChuZXdQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgbmFtZUluVXNlLnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2lkZUJhcigpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLXNpZGViYXItZXhwYW5kZWQnKSkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS1leHBhbmRlZC1zaWRlYmFyJyk7XG4gICAgc2lkZWJhci5yZW1vdmVDaGlsZChzaWRlYmFyLmxhc3RDaGlsZCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChnZXRGb2xkZXJzKCkpO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWV4cGFuZGVkLXNpZGViYXInKSkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1leHBhbmRlZC1zaWRlYmFyJyk7XG4gICAgc2lkZWJhci5yZW1vdmVDaGlsZChzaWRlYmFyLmxhc3RDaGlsZCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChnZXRGb2xkZXJzKCkpO1xuICB9XG59XG5cbmNvbnN0IGZvbGRlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGVkaXRvckZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0b3JGb2xkZXIuaWQgPSAnZWRpdG9yLWZvbGRlcic7XG5cbiAgY29uc3QgZm9sZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBmb2xkZXJMYWJlbC50ZXh0Q29udGVudCA9ICdTZWxlY3QgRm9sZGVyOiAnO1xuXG4gIGVkaXRvckZvbGRlci5hcHBlbmQoZm9sZGVyTGFiZWwsIGdldE9wdGlvbnNGb2xkZXJzKCkpO1xuICByZXR1cm4gZWRpdG9yRm9sZGVyO1xufTtcblxuZnVuY3Rpb24gaGFuZGxlRm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuY29uc3QgZWRpdG9yID0gKCkgPT4ge1xuICBjb25zdCBlZGl0b3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGVkaXRvckNvbnRhaW5lci5pZCA9ICdlZGl0b3ItY29udGFpbmVyJztcbiAgZWRpdG9yQ29udGFpbmVyLm9uc3VibWl0ID0gKGUpID0+IGhhbmRsZUZvcm0oZSk7XG5cbiAgY29uc3QgZWRpdG9yUHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdG9yUHJvamVjdE5hbWUuaWQgPSAnZWRpdG9yLXByb2plY3QtbmFtZSc7XG5cbiAgY29uc3QgZWRpdG9yTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2xhYmVsJyk7XG4gIGVkaXRvck5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6ICc7XG5cbiAgY29uc3QgZWRpdG9yTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWRpdG9yTmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xuICBlZGl0b3JOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTXktUHJvamVjdCc7XG4gIGVkaXRvck5hbWVJbnB1dC5yZXF1aXJlZCA9ICd0cnVlJztcbiAgZWRpdG9yTmFtZUlucHV0Lm1pbkxlbmd0aCA9IDQ7XG5cbiAgZWRpdG9yUHJvamVjdE5hbWUuYXBwZW5kKGVkaXRvck5hbWVMYWJlbCwgZWRpdG9yTmFtZUlucHV0KTtcblxuICBjb25zdCBlZGl0b3JEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZWRpdG9yRGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbi1pbnB1dCc7XG4gIGVkaXRvckRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnTXkgYXdlc29tZSBwcm9qZWN0IGRldGFpbHMnO1xuXG4gIGNvbnN0IGVkaXRvckRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVkaXRvckRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIHRvOic7XG5cbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzYXZlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgc2F2ZUJ1dHRvbi5pZCA9ICdzYXZlLWJ0bic7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFlZGl0b3JOYW1lSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBzYXZlUHJvamVjdChlZGl0b3JOYW1lSW5wdXQudmFsdWUsIGVkaXRvckRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGVkaXRvckRhdGVJbnB1dC52YWx1ZSk7XG4gICAgICBlZGl0b3JEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGVkaXRvckRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGVkaXRvck5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgcmV0dXJuIHVwZGF0ZVNpZGVCYXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdXR0b24uaWQgPSAnY2FuY2VsYnRuJztcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBlZGl0b3JDb250YWluZXIuYXBwZW5kKG5hbWVJblVzZSwgZm9sZGVycygpLCBlZGl0b3JQcm9qZWN0TmFtZSwgZWRpdG9yRGVzY3JpcHRpb25JbnB1dCwgZGF0ZUxhYmVsLCBlZGl0b3JEYXRlSW5wdXQsIGJ1dHRvbnNDb250YWluZXIpO1xuXG4gIHJldHVybiBlZGl0b3JDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlZGl0b3I7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5pbXBvcnQgbmV3Zm9sZGVySWNvbiBmcm9tICcuL3NpZGViYXJTVkcvbmV3Zm9sZGVyLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL3NpZGViYXJTVkcvZGVsZXRlSWNvbi5zdmcnO1xuaW1wb3J0IGltcG9ydGFudGljb24gZnJvbSAnLi9zaWRlYmFyU1ZHL2ltcG9ydGFudC5zdmcnO1xuaW1wb3J0IHZpZXdQcm9qZWN0cyBmcm9tICcuL3ZpZXdwcm9qZWN0cyc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL3Byb2plY3RzLmpzb24nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgZ2V0T3B0aW9uc0ZvbGRlcnMgfSBmcm9tICcuL2VkaXRvcic7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGxvY2FsU3RvcmFnZS5kYXRhID09PSAnW29iamVjdCBPYmplY3RdJykgeyBsb2NhbFN0b3JhZ2UuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpOyB9XG5sZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5kYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbGRlcnMoKSB7XG4gIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZGF0YSk7XG4gIGNvbnN0IGZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb2xkZXJDb250YWluZXIuaWQgPSAnZm9sZGVyLWNvbnRhaW5lcic7XG4gIGNvbnN0IHNob3dQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNob3dQcm9qZWN0LmlkID0gJ3Nob3ctcHJvamVjdCc7XG5cbiAgZm9yIChjb25zdCBbZm9sZGVyTmFtZSwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICBjb25zdCBmb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb2xkZXIuY2xhc3NMaXN0LmFkZCgnZm9sZGVycycpO1xuICAgIGZvbGRlci5pZCA9IGZvbGRlck5hbWU7XG5cbiAgICBjb25zdCBkZWxldGVGb2xkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlRm9sZGVySWNvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIGRlbGV0ZUZvbGRlckljb24uaWQgPSAnZGVsZXRlLWZvbGRlcic7XG4gICAgZGVsZXRlRm9sZGVySWNvbi5jbGFzc0xpc3QuYWRkKGZvbGRlck5hbWUpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICBkZWxldGVGb2xkZXJJY29uLm9uY2xpY2sgPSAoKSA9PiBkZWxldGVGb2xkZXIoZGVsZXRlRm9sZGVySWNvbi5jbGFzc05hbWUpO1xuICAgIGNvbnN0IGZvbGRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9sZGVyTGFiZWwudGV4dENvbnRlbnQgPSBmb2xkZXJOYW1lO1xuICAgIGZvbGRlckxhYmVsLmlkID0gJ2xhYmVsJztcbiAgICBmb2xkZXJMYWJlbC5hcHBlbmRDaGlsZChkZWxldGVGb2xkZXJJY29uKTtcbiAgICBmb2xkZXJDb250YWluZXIuYXBwZW5kKGZvbGRlckxhYmVsKTtcblxuICAgIHZhbHVlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gZWxlbWVudC5uYW1lO1xuXG4gICAgICBjb25zdCBpbXBvcnRhbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbXBvcnRhbnRJY29uLnNyYyA9IGltcG9ydGFudGljb247XG4gICAgICBpbXBvcnRhbnRJY29uLmlkID0gJ2ltcG9ydGFudC1pY29uJztcbiAgICAgIGltcG9ydGFudEljb24uY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LWljb24tZGVmYXVsdCcpO1xuICAgICAgaW1wb3J0YW50SWNvbi5vbmNsaWNrID0gKCkgPT4gbWFya0FzSW1wb3J0YW50KGltcG9ydGFudEljb24pO1xuXG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2hvd1Byb2plY3QuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICBzaG93UHJvamVjdC5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdHMoZWxlbWVudC5uYW1lKSk7XG4gICAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LXdlbGNvbWUtYnRuJylcbiAgICAgICAgICBhZGRCdG4uc3R5bGUubWFyZ2luTGVmdCA9ICc2MHJlbSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd1Byb2plY3QucmVtb3ZlQ2hpbGQoc2hvd1Byb2plY3QuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgc2hvd1Byb2plY3QuYXBwZW5kKHZpZXdQcm9qZWN0cyhlbGVtZW50Lm5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGF0ZTtcblxuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQobmFtZSwgZGF0ZSk7XG4gICAgICBmb2xkZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIsIGltcG9ydGFudEljb24pO1xuICAgICAgZm9sZGVyQ29udGFpbmVyLmFwcGVuZChmb2xkZXIsIHNob3dQcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZm9sZGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBuZXdGb2xkZXIoZm9sZGVyTmFtZSkge1xuICBpZiAoL1xccy9nLnRlc3QoZm9sZGVyTmFtZSkpIHtcbiAgICBsZXQgZm9sZGVyID0gZm9sZGVyTmFtZTtcbiAgICBmb2xkZXIgPSBmb2xkZXIucmVwbGFjZUFsbCgnICcsICctJyk7XG4gICAgY29uc29sZS5sb2coZm9sZGVyKVxuICAgIHByb2plY3RzW2ZvbGRlcl0gPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0c1tmb2xkZXJOYW1lXSA9IFtdO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgY29uc3QgcmVwbGFjZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmRhdGEpO1xuICBPYmplY3QuYXNzaWduKHByb2plY3RzLCByZXBsYWNlKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGZvbGRlcikge1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c1tmb2xkZXJdKVxuICBkZWxldGUgcHJvamVjdHNbZm9sZGVyXTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB1cGRhdGVGb2xkZXJzKCk7XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ltcG9ydGFudChpY29uKSB7XG4gIHN3aXRjaCAoaWNvbi5jbGFzc05hbWUpIHtcbiAgICBjYXNlICdpbXBvcnRhbnQtaWNvbi1kZWZhdWx0JzogaWNvbi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtaWNvbi1tYXJrZWQnKTsgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQtaWNvbi1kZWZhdWx0Jyk7IHJldHVybjtcbiAgICBjYXNlICdpbXBvcnRhbnQtaWNvbi1tYXJrZWQnOiBpY29uLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1pY29uLWRlZmF1bHQnKTsgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQtaWNvbi1tYXJrZWQnKTsgcmV0dXJuO1xuICAgIGRlZmF1bHQ6IGljb24uY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LWljb24tZGVmYXVsdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGb2xkZXJzKCkge1xuICBjb25zdCBlZGl0b3JGb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWZvbGRlcicpO1xuICBjb25zdCBleHBhbmRlZFNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1leHBhbmRlZC1zaWRlYmFyJyk7XG4gIGV4cGFuZGVkU2lkZWJhci5yZW1vdmVDaGlsZChleHBhbmRlZFNpZGViYXIubGFzdENoaWxkKTtcbiAgZXhwYW5kZWRTaWRlYmFyLmFwcGVuZENoaWxkKGdldEZvbGRlcnMoKSk7XG4gIGVkaXRvckZvbGRlci5yZW1vdmVDaGlsZChlZGl0b3JGb2xkZXIubGFzdENoaWxkKTtcbiAgcmV0dXJuIGVkaXRvckZvbGRlci5hcHBlbmRDaGlsZChnZXRPcHRpb25zRm9sZGVycygpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNpZGViYXJFeHBhbmRlZCA9ICgpID0+IHtcbiAgY29uc3QgZXhwYW5kZWRTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZGVkU2lkZWJhci5pZCA9ICdoaWRlLWV4cGFuZGVkLXNpZGViYXInO1xuXG4gIGNvbnN0IGV4cGxvcmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGV4cGxvcmVMYWJlbC50ZXh0Q29udGVudCA9ICdFeHDEum9yZSBQcm9qZXRzJztcbiAgZXhwbG9yZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkLXNpZGViYXItbGFiZWwnKTtcblxuICBjb25zdCBhZGRGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBhZGRGb2xkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGFkZEZvbGRlckljb24uc3JjID0gbmV3Zm9sZGVySWNvbjtcbiAgYWRkRm9sZGVySWNvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZC1zaWRlYmFyLWljb25zJyk7XG5cbiAgYWRkRm9sZGVyLmFwcGVuZENoaWxkKGFkZEZvbGRlckljb24pO1xuXG4gIGNvbnN0IGFkZEZvbGRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBhZGRGb2xkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYWRkRm9sZGVyTmFtZS5wbGFjZWhvbGRlciA9ICdNeS1Gb2xkZXInO1xuXG4gIGNvbnN0IGFkZEZvbGRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRGb2xkZXJCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcblxuICBhZGRGb2xkZXJNZW51LmFwcGVuZChhZGRGb2xkZXJOYW1lLCBhZGRGb2xkZXJCdG4pO1xuICBhZGRGb2xkZXJNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZXhwYW5kZWRTaWRlYmFyLmFwcGVuZChleHBsb3JlTGFiZWwsIGFkZEZvbGRlciwgYWRkRm9sZGVyTWVudSwgZ2V0Rm9sZGVycygpKTtcblxuICBhZGRGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZGF0YSkpXG4gICAgc3dpdGNoIChhZGRGb2xkZXJNZW51LnN0eWxlLmRpc3BsYXkpIHtcbiAgICAgIGNhc2UgJyc6XG4gICAgICBjYXNlICdub25lJzogYWRkRm9sZGVyTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgcmV0dXJuO1xuICAgICAgY2FzZSAnYmxvY2snOiBhZGRGb2xkZXJNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IHJldHVybjtcbiAgICAgIGRlZmF1bHQ6IGFkZEZvbGRlck1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuICBhZGRGb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGFkZEZvbGRlck5hbWUudmFsdWUgJiYgIXByb2plY3RzW2FkZEZvbGRlck5hbWUudmFsdWVdKSB7XG4gICAgICBuZXdGb2xkZXIoYWRkRm9sZGVyTmFtZS52YWx1ZSk7XG4gICAgICBnZXRPcHRpb25zRm9sZGVycygpO1xuICAgICAgdXBkYXRlRm9sZGVycygpO1xuICAgICAgYWRkRm9sZGVyTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRGb2xkZXJOYW1lLnZhbHVlID0gJ0ZvbGRlciBuYW1lIGluIFVzZSEnO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV4cGFuZGVkU2lkZWJhcjtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL3NpZGViYXJTVkcvZGVsZXRlSWNvbi5zdmcnO1xuaW1wb3J0IGNsb3NlaWNvbiBmcm9tICcuL3NpZGViYXJTVkcvY2xvc2Uuc3ZnJztcbmltcG9ydCB7IHVwZGF0ZUZvbGRlcnMgfSBmcm9tICcuL2V4cGFuZGVkU2lkZWJhcic7XG5cbmxldCBwcm9qZWN0cztcbmZ1bmN0aW9uIGdldFByb2plY3QoZWxlbWVudCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmRhdGEpIHtcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmRhdGEpO1xuICB9IGVsc2UgeyByZXR1cm4gbnVsbDsgfVxuICBjb25zdCBzaG93UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuaWQgPSAncHJvamVjdFZpZXctYnV0dG9ucy1jb250YWluZXInO1xuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2xvc2VCdG4uc3JjID0gY2xvc2VpY29uO1xuICBjbG9zZUJ0bi5pZCA9ICdjbG9zZS1wcm9qZWN0JztcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXctYnV0dG9ucycpO1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXctYnV0dG9ucycpO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlSWNvbjtcbiAgZGVsZXRlQnRuLmlkID0gJ2RlbGV0ZS1wcm9qZWN0JztcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoY2xvc2VCdG4sIGRlbGV0ZUJ0bik7XG5cbiAgZm9yIChjb25zdCBbcHJvamVjdEZvbGRlciwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICB2YWx1ZXMuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEubmFtZSA9PT0gZWxlbWVudCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcHJvamVjdE5hbWUuaWQgPSAncHJvamVjdC1uYW1lJztcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gZGF0YS5kZXNjO1xuICAgICAgICBwcm9qZWN0RGVzYy5pZCA9ICdwcm9qZWN0LWRlc2NyaXB0aW9uJztcbiAgICAgICAgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3REYXRlLmlkID0gJ3Byb2plY3QtZGF0ZSc7XG4gICAgICAgIGlmICghZGF0YS5kYXRlKSB7XG4gICAgICAgICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSAnTi9EJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGRhdGEuZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHJldHVybiBzaG93UHJvamVjdC5hcHBlbmQoYnV0dG9uc0NvbnRhaW5lciwgcHJvamVjdE5hbWUsIHByb2plY3REZXNjLCBwcm9qZWN0RGF0ZSwgaHIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGNsb3NlVmlldygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1wcm9qZWN0Jyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3Qtd2VsY29tZS1idG4nKVxuICAgIGFkZEJ0bi5zdHlsZS5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgaXRlbVRvRGVsZXRlID0gc2hvd1Byb2plY3QuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcbiAgICBmb3IgKGNvbnN0IFtwcm9qZWN0Rm9sZGVyLCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHByb2plY3RzKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgdmFsdWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gaXRlbVRvRGVsZXRlKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0c1twcm9qZWN0Rm9sZGVyXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgIHByb2plY3RzW3Byb2plY3RGb2xkZXJdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmRhdGEgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG4gICAgICAgICAgdXBkYXRlRm9sZGVycygpO1xuICAgICAgICAgIGNsb3NlVmlldygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IGNsb3NlVmlldygpO1xuICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IGRlbGV0ZVByb2plY3QoKTtcbiAgcmV0dXJuIHNob3dQcm9qZWN0O1xufVxuXG5cblxuZnVuY3Rpb24gdmlld1Byb2plY3RzKGVsZW1lbnQpIHtcbiAgLy8gZ2V0UHJvamVjdCgnd29yazEnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRQcm9qZWN0KGVsZW1lbnQpKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgdmlld1Byb2plY3RzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9