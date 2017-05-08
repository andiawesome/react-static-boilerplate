const getMenuState = state => state.menus;
const getMenuNameByLocation = (state, location) =>
  getMenuState(state).menuLocations[location].active_menu;
const getMenuByName = (state, name) => getMenuState(state).menus[name];
const getMenuItemsByName = (state, name) => getMenuState(state).menus[name].items;
const getMenuByLocation = (state, location) =>
  getMenuByName(state, getMenuNameByLocation(state, location));
const getMenuItemsByLocation = (state, location) =>
  getMenuItemsByName(state, getMenuNameByLocation(state, location));
const getMenuItemById = (state, id) => getMenuState(state).menuItems[id];

export default {
  getMenuState,
  getMenuNameByLocation,
  getMenuByName,
  getMenuByLocation,
  getMenuItemsByName,
  getMenuItemsByLocation,
  getMenuItemById,
};
