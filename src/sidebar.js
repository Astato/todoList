import addsvg from './sidebarSVG/add.svg';
import trashcansvg from './sidebarSVG/deleteIcon.svg';
import logoutsvg from './sidebarSVG/logout.svg';
import menusvg from './sidebarSVG/menu.svg';
import profilesvg from './sidebarSVG/profile.svg';
import sharesvg from './sidebarSVG/share.svg';
import { updateFolders } from './expandedSidebar';

let showProject;

function expandSidebar() {
  // function to check is the expanded sidebar is being display via class name
  // if display closed if closed display
  if (document.getElementById('show-project')) { showProject = document.getElementById('show-project'); }
  if (document.getElementById('hide-expanded-sidebar')) {
    const showexpandedSidebar = document.getElementById('hide-expanded-sidebar');
    showexpandedSidebar.id = 'show-expanded-sidebar';
    if (showProject) { showProject.style.display = 'flex'; }
  } else if (document.getElementById('show-expanded-sidebar')) {
    const hideexpandedSidebar = document.getElementById('show-expanded-sidebar');
    hideexpandedSidebar.id = 'hide-expanded-sidebar';
    hideexpandedSidebar.style.display = 'flex';
    // hide the view Project on contracting the sidebar
    if (showProject) { showProject.style.display = 'none'; }
  }
  // update sidebar calls the funcion in expandedSidebar so when is closed
  // if a project is added the new project will show up in the sidebar regardless
  // of the sidebar state.
  updateFolders();
}

const sideBar = () => {
  const sideBarContainer = document.createElement('div');
  sideBarContainer.id = 'sidebar-container';

  const menu = document.createElement('img');
  menu.id = 'menu';
  menu.classList.add('sidebar-items');
  menu.src = menusvg;
  menu.addEventListener('click', () => expandSidebar());

  const profile = document.createElement('img');
  profile.id = 'profile';
  profile.classList.add('sidebar-items');
  profile.src = profilesvg;

  const newTodo = document.createElement('img');
  newTodo.id = 'new-todo';
  newTodo.classList.add('sidebar-items');
  newTodo.src = addsvg;

  const shareTodo = document.createElement('img');
  shareTodo.id = 'share-todo';
  shareTodo.classList.add('sidebar-items');
  shareTodo.src = sharesvg;

  const exit = document.createElement('img');
  exit.id = 'exit';
  exit.classList.add('sidebar-items');
  exit.src = logoutsvg;

  exit.onclick = () => window.close();

  sideBarContainer.append(menu, profile, shareTodo, exit);

  return sideBarContainer;
};

export default sideBar;
