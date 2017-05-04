import { combineReducers } from 'redux';
import menus from './menus';
import pages from './pages';
import posts from './posts';

export default combineReducers({
  menus,
  pages,
  posts,
});
