document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const sideMenu = document.getElementById('side-menu');
  const header = document.getElementById('header-main');

  if (menuToggle && sideMenu) {
    // Open the side menu
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevents scrolling when menu is open
    });
  }

  if (menuClose && sideMenu) {
    // Close the side menu
    menuClose.addEventListener('click', () => {
      sideMenu.classList.remove('open');
      document.body.style.overflow = ''; // Restores scrolling
    });
  }

  // Handle header transparency and background on scroll
  if (header && header.classList.contains('is-transparent')) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    });
  }
});
