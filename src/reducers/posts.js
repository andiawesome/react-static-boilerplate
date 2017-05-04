import { types } from '../actions';

export default function posts(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_GRAPHQL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.UPDATE_SITE_DATA:
      if (!action.term) return state;
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.term.objects,
      });
    default:
      return state;
  }
}
