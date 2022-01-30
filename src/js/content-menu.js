const navItems = document.querySelectorAll('.content__menu-item');

navItems.forEach((li) => {
  li.addEventListener('click', function () {
    let item = document.querySelector('.content__menu-item--active');

    item.classList.remove('content__menu-item--active');
    li.classList.toggle('content__menu-item--active');
  });
});
