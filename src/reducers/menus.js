import { normalize } from 'normalizr';
import { types } from '../actions';
import { menu } from '../schemas';

export default function menus(state = {}, action) {
  let normalized = {};
  switch (action.type) {
    case types.REQUEST_GRAPHQL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.UPDATE_SITE_DATA:
      if (!action.menu_location) return state;
      normalized = normalize(action.menu_location.active_menu, menu);

      console.log({ normalized });

      return Object.assign({}, state, {
        isFetching: false,
        menus: Object.assign({}, state.menus, {
          ...normalized.entities.menu[normalized.result],
        }),
        menuItems: Object.assign({}, state.menuItems, {
          ...normalized.entities.menuItem,
        }),
      });
    default:
      return state;
  }
}
