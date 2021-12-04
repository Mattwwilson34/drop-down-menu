import './style.css';

const MenuDropDowns = {
  menus: document.querySelectorAll('.menu'),
  menuItems: document.querySelectorAll('.menu-item'),

  init() {
    this.setEvents();
  },

  setEvents() {
    this.menus.forEach((menu) => {
      menu.addEventListener('mouseenter', this.openMenu);
      menu.addEventListener('mouseleave', this.closeMenu);
    });
  },

  openMenu(e) {
    const menu = e.target;
    const menuItems = menu.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
      item.classList.toggle('visible');
    });
    // sets height based on what is required to fit all elements in dropdown + 20px to give addition space at bottom
    menu.style.height = `${menu.scrollHeight + 20}px`;
  },

  closeMenu(e) {
    const menu = e.target;
    const menuItems = e.target.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
      item.classList.toggle('visible');
    });
    menu.style.height = '50px';
  },
};

MenuDropDowns.init();
