/* eslint-disable prefer-template */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/no-cycle
import { updateFolders, storageAvailable } from './expandedSidebar';
import data from './projects.json';

// let projects = JSON.parse(localStorage.data);
let projects;

if (storageAvailable('localStorage')) {
  if (localStorage.data === undefined || localStorage.data === '[object Object]') {
    localStorage.data = JSON.stringify(data);
  }
  projects = JSON.parse(localStorage.data);
} else {
  projects = data;
}

let selected;

const currentDate = new Date().toLocaleDateString('en-GB');
const arr = currentDate.split('/');

const nameInUse = document.createElement('h4');
nameInUse.textContent = 'Name in use';
nameInUse.setAttribute('style', 'color:transparent');

export function getOptionsFolders() {
  projects = JSON.parse(localStorage.data);
  const selectFolder = document.createElement('select');
  selectFolder.id = 'select-folder';
  // eslint-disable-next-line no-restricted-syntax
  // get folders in localStorage and set an option for each in the select element
  for (const [folderName] of Object.entries(projects)) {
    const option = document.createElement('option');
    option.textContent = folderName;
    option.id = folderName;
    selectFolder.appendChild(option);
  }
  selectFolder.addEventListener('change', () => {
    // set the variable selected to the select option
    selected = selectFolder.selectedOptions[0].id;
  });
  if (selectFolder.firstChild) {
    //  by default the selected is the first folder
    selected = selectFolder.firstChild.id;
  }
  return selectFolder;
}

function saveProject(name, desc, date, important) {
  // eslint-disable-next-line no-restricted-syntax
  let dateCheck = date.split('-');
  if (date && dateCheck[2].length !== arr[2].length) {
    dateCheck = dateCheck.reverse();
    // eslint-disable-next-line no-param-reassign
    date = dateCheck.join('-');
  }
  let newProject = {
    name, desc, date, important,
  };
  // create a new project object an store it if condition met
  for (const [folderName, values] of Object.entries(projects)) {
    // eslint-disable-next-line no-loop-func
    values.forEach((element) => {
      if (element.name === name) {
        newProject = null;
        nameInUse.style.color = 'red';
        nameInUse.textContent = 'Name in use';
      }
    });
  }
  if (dateCheck[0] < arr[0] && dateCheck[1] <= arr[1] && dateCheck[2] <= arr[2]) {
    // if date is older than current actually date don't save.
    nameInUse.style.color = 'red';
    nameInUse.textContent = 'Planning to time travel?';
    newProject = null;
  }
  else if (newProject) {
    projects[selected].push(newProject);
    localStorage.setItem('data', JSON.stringify(projects));
    nameInUse.style.color = 'transparent';
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
  saveButton.value = 'Save';
  saveButton.id = 'savebtn';
  // eslint-disable-next-line max-len
  saveButton.addEventListener('click', () => {
    if (!editorNameInput.validity.valueMissing) {
      // eslint-disable-next-line max-len
      saveProject(editorNameInput.value, editorDescriptionInput.value, editorDateInput.value, 'false');
      editorDateInput.value = '';
      editorDescriptionInput.value = '';
      editorNameInput.value = '';
      // on project save, call updateFolders() on expandedSidebar so
      // the recently created project shows in the sidebar after clicking save btn
      return updateFolders();
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

export default editor;
