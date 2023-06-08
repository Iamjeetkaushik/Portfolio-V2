var nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('nav-scrool');
  } else {
    nav.classList.remove('nav-scrool');
  }
});
