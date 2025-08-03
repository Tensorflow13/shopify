document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('.header-icon[href*="search"]');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.querySelector('.search-close');
  const searchForm = document.querySelector('#search-overlay form');
  
  if (searchIcon && searchOverlay) {
    searchIcon.addEventListener('click', function (e) {
      e.preventDefault();
      searchOverlay.classList.add('active');
      document.body.classList.add('blurred-behind');
      document.body.style.overflow = 'hidden';
      document.getElementById('SearchInputOverlay').focus();
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', function () {
      searchOverlay.classList.remove('active');
      document.body.classList.remove('blurred-behind');
      document.body.style.overflow = '';
      const input = document.getElementById('SearchInputOverlay');
      if (input) input.value = '';
    });
  }

  if (searchForm && searchOverlay) {
    searchForm.addEventListener('submit', function (e) {
      if (!searchOverlay.classList.contains('active')) {
        e.preventDefault();
        return false;
      }
    });
  }

  // Optional: Hide overlay on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      document.body.classList.remove('blurred-behind');
      document.body.style.overflow = '';
    }
  });
});
