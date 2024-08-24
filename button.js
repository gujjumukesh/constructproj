const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  mobileNav.classList.toggle('active');
});