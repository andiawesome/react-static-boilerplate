import { connect } from 'react-redux';
import Navigation from './Navigation';
import ms from '../../src/selectors/menu';

const mapState = (state, ownProps) => {
  const { location } = ownProps;
  
  if (!state.menus.menuLocations[location]) return {};

  const itemIds = ms.getMenuItemsByLocation(state, location);
  const navItems = Object.keys(itemIds).map(key => ms.getMenuItemById(state, itemIds[key]));

  return {
    navItems,
  };
};

const NavigationContainer = connect(mapState)(Navigation);

export default NavigationContainer;
