const items = document.querySelectorAll('.bottom-nav__item');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => {
      i.classList.remove('is-active');
      i.removeAttribute('aria-current');
    });
    item.classList.add('is-active');
    item.setAttribute('aria-current', 'page');
  });
});