/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import newfolderIcon from './sidebarSVG/newfolder.svg';
import deleteIcon from './sidebarSVG/deleteIcon.svg';
import importanticon from './sidebarSVG/important.svg';
import viewProjects from './viewprojects';
import data from './projects.json';
// eslint-disable-next-line import/no-cycle
import { getOptionsFolders } from './editor';

let projects;
/// check for localStorage if false, use JSON data instead.
export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      (storage && storage.length !== 0);
  }
}
if (storageAvailable('localStorage')) {
  if (localStorage.data === undefined || localStorage.data === '[object Object]') {
    localStorage.data = JSON.stringify(data);
  }
  projects = JSON.parse(localStorage.data);
} else {
  projects = data;
}

export function getFolders() {
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
    deleteFolderIcon.src = deleteIcon;
    deleteFolderIcon.id = 'delete-folder';
    deleteFolderIcon.classList.add(folderName);
    // eslint-disable-next-line no-loop-func
    deleteFolderIcon.onclick = () => deleteFolder(deleteFolderIcon.className);
    const folderLabel = document.createElement('div');
    folderLabel.textContent = folderName;
    folderLabel.id = 'label';
    folderLabel.appendChild(deleteFolderIcon);
    folderContainer.append(folderLabel);

    // eslint-disable-next-line no-loop-func
    values.forEach((element) => {
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('project-container');
      projectContainer.id = element.name;

      const importantIcon = document.createElement('img');
      importantIcon.src = importanticon;
      importantIcon.id = 'important-icon';
      if (element.important === 'true') {
        importantIcon.classList.add('important-icon-marked');
      } else {
        importantIcon.classList.add('important-icon-default');
      }
      importantIcon.addEventListener('click', () => {
        markAsImportant(importantIcon);
        if (element.important === 'true') {
          element.important = 'false';
        } else {
          element.important = 'true';
        }
        localStorage.data = JSON.stringify(projects);
      });

      projectContainer.addEventListener('click', () => {
        if (showProject.childElementCount === 0) {
          // on project clicked on sidebar call ViewProjects function
          // and append it to the sidebar to display it and move the btn to the left
          showProject.appendChild(viewProjects(element.name));
          const addBtn = document.getElementById('new-project-welcome-btn');
          addBtn.style.marginLeft = '60rem';
        } else {
          showProject.removeChild(showProject.firstChild);
          showProject.append(viewProjects(element.name));
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
  // if name contains spaces replace them
  if (/\s/g.test(folderName)) {
    let folder = folderName;
    folder = folder.replaceAll(' ', '-');
    projects[folder] = [];
  } else {
    projects[folderName] = [];
  }
  // update the LocalStorage and JSON if localStora's not available
  localStorage.setItem('data', JSON.stringify(projects));
  const replace = JSON.parse(localStorage.data);
  Object.assign(projects, replace);
}

function deleteFolder(folder) {
  delete projects[folder];
  localStorage.setItem('data', JSON.stringify(projects));
  // update folder on folder remove so the change is inmediate and does not
  // requiere other input.
  updateFolders();
}

function markAsImportant(icon) {
  switch (icon.className) {
    case 'important-icon-default':
      icon.classList.add('important-icon-marked');
      icon.classList.remove('important-icon-default');
      return;

    case 'important-icon-marked':
      icon.classList.add('important-icon-default');
      icon.classList.remove('important-icon-marked');
      return;

    default: icon.classList.add('important-icon-default');
  }
}

export function updateFolders() {
  const editorFolder = document.getElementById('editor-folder');
  if (document.getElementById('hide-sidebar-expanded')) {
    const sidebar = document.getElementById('hide-expanded-sidebar');
    sidebar.removeChild(sidebar.lastChild);
    sidebar.appendChild(getFolders());
  } else if (document.getElementById('show-expanded-sidebar')) {
    const sidebar = document.getElementById('show-expanded-sidebar');
    sidebar.removeChild(sidebar.lastChild);
    sidebar.appendChild(getFolders());
  }
  // on folder add or remove, update the folders displayed on the select
  // element in the editor
  editorFolder.removeChild(editorFolder.lastChild);
  return editorFolder.appendChild(getOptionsFolders());
}

export const sidebarExpanded = () => {
  const expandedSidebar = document.createElement('div');
  expandedSidebar.id = 'hide-expanded-sidebar';

  const exploreLabel = document.createElement('label');
  exploreLabel.textContent = 'Expĺore Projets';
  exploreLabel.classList.add('expanded-sidebar-label');

  const addFolder = document.createElement('div');

  const addFolderIcon = document.createElement('img');
  addFolderIcon.src = newfolderIcon;
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
      updateFolders();
      addFolderMenu.style.display = 'none';
    } else {
      addFolderName.value = 'Folder name in Use!';
    }
  });

  return expandedSidebar;
};
