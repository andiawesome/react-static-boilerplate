import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapState = (state, ownProps) => {
  const {
    menus: menusState,
  } = state;

  const {
    menuLocations,
    menus,
    menuItems,
  } = menusState;

  const { location } = ownProps;

  console.log({ menusState });
  if(!menuLocations.header || !menus[menuLocations.header.active_menu]) return {};

  const itemIds = menus[menuLocations.header.active_menu].items;

  const navItems = Object.keys(itemIds).map((key) => {
    return menuItems[itemIds[key]];
  });

  return {
    navItems,
  };
};

const NavigationContainer = connect(mapState)(Navigation);

export default NavigationContainer;
