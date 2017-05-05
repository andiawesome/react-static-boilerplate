import { normalize } from 'normalizr';
import { types } from '../actions';
import { menuLocation } from '../schemas';

export default function menus(state = {
  menuLocations: {},
  menus: {},
  menuItems: {},
}, action) {
  let normalized = {};
  switch (action.type) {
    case types.REQUEST_GRAPHQL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.UPDATE_SITE_DATA:
      if (!action.menu_location) return state;
      normalized = normalize(action.menu_location, menuLocation);

      console.log({ normalized });

      return Object.assign({}, state, {
        isFetching: false,
        menuLocations: Object.assign({}, state.menuLocations, {
          ...normalized.entities.menuLocations,
        }),
        menus: Object.assign({}, state.menus, {
          ...normalized.entities.menus,
        }),
        menuItems: Object.assign({}, state.menuItems, {
          ...normalized.entities.menuItems,
        }),
      });
    default:
      return state;
  }
}
