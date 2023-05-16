import './style.scss';
import './editorStyle.scss';
import './sidebarStyle.scss';
import sideBar from './sidebar';
import editor from './editor';
import { getFolders, sidebarExpanded } from './expandedSidebar';
import addIcon from './sidebarSVG/add.svg';
import viewProjects from './viewprojects';

const newBtn = () => {
  const add = document.createElement('div');
  add.textContent = 'New Project';
  add.id = 'new-project-welcome-btn';
  const newIcon = document.createElement('img');
  newIcon.src = addIcon;
  add.appendChild(newIcon);
  return add;
};

const App = () => {
  const wrapper = document.createElement('div');
  const titleContainer = document.createElement('div');
  titleContainer.id = 'title-container';
  const TO = document.createElement('p');
  TO.textContent = 'To DO!';
  const DO = document.createElement('p');
  DO.textContent = '.DO';
  titleContainer.append(TO, DO);
  wrapper.id = 'wrapper';
  wrapper.append(sideBar(), sidebarExpanded(), titleContainer, newBtn(), editor());
  return wrapper;
};

document.body.appendChild(App());

const add = document.getElementById('new-project-welcome-btn');
const cancel = document.getElementById('cancelbtn');
const editorContainer = document.getElementById('editor-container');

add.addEventListener('click', () => {
  // if "new Project" button is clicked, don't display it and display the Editor instead
  editorContainer.style.display = 'flex';
  add.style.display = 'none';
  if (document.getElementById('show-project')) {
    const showProject = document.getElementById('show-project');
    showProject.style.display = 'none';
    add.style.marginLeft = 'auto';
  }
});
cancel.addEventListener('click', () => {
  // if cancel button is clicked on the editor,
  // hide the editor and display the New Project button instead
  editorContainer.style.display = 'none';
  add.style.display = 'flex';
  if (document.getElementById('show-project') && !document.getElementById('show-project').firstChild) {
    const showProject = document.getElementById('show-project');
    showProject.style.display = 'flex';
    add.style.marginLeft = 'auto';
  } else {
    const showProject = document.getElementById('show-project');
    showProject.style.display = 'flex';
    add.style.marginLeft = '60rem';
  }
});
