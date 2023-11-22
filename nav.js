document.addEventListener('DOMContentLoaded', () => {
  const primaryNav = document.querySelector('.navbar');
  const navToggle = document.querySelector('#menu-icon');

  navToggle.addEventListener('click', () => {
    // console.log('clicked');
    const isVisible = primaryNav.getAttribute('data-visible') === 'true';

    console.log(isVisible);
    console.log(!isVisible);
    primaryNav.setAttribute('data-visible', !isVisible);
  });
});