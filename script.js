document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      // Add animation or scrolling effect here
    });
  });
  
  document.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    // Add form validation or submission logic here
  });
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    const scrollPosition = window.scrollY;

    // Change 100 to the desired scroll position where you want the navbar to appear
    if (scrollPosition > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
