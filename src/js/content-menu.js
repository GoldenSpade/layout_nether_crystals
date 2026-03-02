const navItems = document.querySelectorAll('.content__menu-item');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const active = document.querySelector('.content__menu-item--active');
    if (active) {
      active.classList.remove('content__menu-item--active');
      active.setAttribute('aria-selected', 'false');
    }
    item.classList.add('content__menu-item--active');
    item.setAttribute('aria-selected', 'true');
  });

  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      item.click();
    }
  });
});
