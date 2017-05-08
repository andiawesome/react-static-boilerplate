import { combineReducers } from 'redux';
import site from './site';
import menus from './menus';
import pages from './pages';
import posts from './posts';

export default combineReducers({
  site,
  menus,
  pages,
  posts,
});
