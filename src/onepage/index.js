import { connect } from 'react-redux';
import OnePage from './OnePage';
import { creators } from '../actions';
import query from './query.txt';

const mapState = (state) => {
  const { pages: pageState } = state;
  return { pages: pageState.pages };
};
const mapDispatch = dispatch => ({
  fetchGraphQLData: () => {
    dispatch(creators.fetchGraphQLData(query));
  },
});

const OnePageContainer = connect(mapState, mapDispatch)(OnePage);

export default OnePageContainer;
