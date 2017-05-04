import { schema } from 'normalizr';

const menuItem = new schema.Entity('menuItem');

const menu = new schema.Entity('menu', {
  items: [menuItem],
}, { idAttribute: 'name' });

export { menuItem, menu };
