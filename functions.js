const navbar = document.querySelector('.navBar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('sticky-active');
  } else {
    navbar.classList.remove('sticky-active');
  }
});

function moveRightSide() {
  const contentWrap = document.getElementById('contentWrap');
  const rightColumn = document.getElementById('rightColumn');
  const mainContainer = document.getElementById('mainContainer');
  const leftColumn = document.getElementById('leftColumn');
  const actionButtons = document.getElementById('actionButtons');
  if (!rightColumn || !mainContainer || !leftColumn || !actionButtons || !contentWrap) return;
  const h2 = rightColumn.querySelector('h2');

  if (window.innerWidth <= 768) {
    mainContainer.appendChild(rightColumn);
    leftColumn.appendChild(actionButtons);
  } else {
    contentWrap.appendChild(rightColumn);
    if (h2) h2.after(actionButtons);
  }
}

const hamMenu = document.querySelector(".hamMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");

if (hamMenu && offScreenMenu) {
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
}

window.addEventListener('load', moveRightSide);
window.addEventListener('resize', moveRightSide);
