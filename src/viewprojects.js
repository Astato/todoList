/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
import deleteIcon from './sidebarSVG/deleteIcon.svg';
import closeicon from './sidebarSVG/close.svg';
import { updateFolders } from './expandedSidebar';
import { format } from 'date-fns';

let projects;
function getProject(element) {
  /// get projects from localStorage;
  if (localStorage.data) {
    projects = JSON.parse(localStorage.data);
  } else { return null; }

  /// project view container
  const showProject = document.createElement('div');
  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'projectView-buttons-container';

  const closeBtn = document.createElement('img');
  closeBtn.src = closeicon;
  closeBtn.id = 'close-project';
  closeBtn.classList.add('projectView-buttons');

  const deleteBtn = document.createElement('img');
  deleteBtn.classList.add('projectView-buttons');
  deleteBtn.src = deleteIcon;
  deleteBtn.id = 'delete-project';
  buttonsContainer.append(closeBtn, deleteBtn);

  for (const [projectFolder, values] of Object.entries(projects)) {
    // search for stored elements and retrieve the passed element;
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
          let formatDate = data.date.split('-');
          formatDate = formatDate.reverse();
          formatDate = formatDate.join(',');
          data.date = format(new Date(formatDate), 'eee dd MMMM yyyy');
          projectDate.textContent = data.date;
        }

        // eslint-disable-next-line max-len
        // append the elements to main container
        showProject.append(buttonsContainer, projectName, projectDesc, projectDate);
        if (projectDesc.textContent === '') {
          // if description is empy, remove it from the container to not display and empty div
          showProject.removeChild(showProject.childNodes[2]);
        }
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
          updateFolders();
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
export default viewProjects;
