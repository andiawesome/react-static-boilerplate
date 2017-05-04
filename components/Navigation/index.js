import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapState = (state) => {
  const {
    menus: menusState,
  } = state;

  console.log({ menusState });
  if (!menusState.headerMenu) return {};
  const navItems = Object.keys(menusState.headerMenu).map(key => menusState.menuItems[key]);

  console.log({ navItems });

  return {
    navItems,
  };
};

const NavigationContainer = connect(mapState)(Navigation);

export default NavigationContainer;
