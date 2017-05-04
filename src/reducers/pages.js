import { types } from '../actions';

export default function pages(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_GRAPHQL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.UPDATE_SITE_DATA:
      if (!action.pages) return state;
      return Object.assign({}, state, {
        isFetching: false,
        pages: [...action.pages],
      });
    default:
      return state;
  }
}
