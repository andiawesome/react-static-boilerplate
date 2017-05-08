import { types } from '../actions';

export default function site(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_GRAPHQL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.UPDATE_SITE_DATA:
      if (!action.title) return state;
      return Object.assign({}, state, {
        isFetching: false,
        title: action.title,
        tagline: action.tagline,
      });
    default:
      return state;
  }
}
