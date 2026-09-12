document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav a');
  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
});
