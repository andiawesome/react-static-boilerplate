import { connect } from 'react-redux';
import Header from './Header';
import ss from '../../src/selectors/site';

const mapState = (state) => {
  const title = ss.getSiteTitle(state);
  const tagline = ss.getSiteTagline(state);

  return {
    title,
    tagline,
  };
};

const HeaderContainer = connect(mapState)(Header);

export default HeaderContainer;
