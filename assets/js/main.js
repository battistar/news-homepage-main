function toggleMenu() {
  const menuElement = document.querySelector('#menu');
  const menuBackgroundElement = document.querySelector('#menu-background');

  if (menuElement.style.width === '0%' || menuElement.style.width === '') {
    menuElement.style.width = '100%';
    menuBackgroundElement.style.width = '100%';
    menuBackgroundElement.style.backgroundColor = 'hsla(240, 100%, 5%, 0.5)';
  } else {
    menuElement.style.width = '0%';
    menuBackgroundElement.style.backgroundColor = 'hsla(240, 100%, 5%, 0)';
    menuBackgroundElement.addEventListener(
      'transitionend',
      function () {
        menuBackgroundElement.style.width = '0%';
      },
      { once: true }
    );
  }
}
