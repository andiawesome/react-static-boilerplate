import { schema } from 'normalizr';

const menuItem = new schema.Entity('menuItems');

const menu = new schema.Entity('menus', {
  items: [menuItem],
}, { idAttribute: 'name' });

const menuLocation = new schema.Entity('menuLocations', {
  active_menu: menu,
}, { idAttribute: 'slug' });

export { menuItem, menu, menuLocation };
