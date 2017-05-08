import getData from './data';

const types = {
  REQUEST_GRAPHQL_DATA: 'REQUEST_GRAPHQL_DATA',
  UPDATE_SITE_DATA: 'UPDATE_SITE_DATA',
};

const creators = {};

creators.requestGraphQLData = () => ({
  type: types.REQUEST_GRAPHQL_DATA,
});

creators.fetchGraphQLData = query => (
  (dispatch) => {
    dispatch(creators.requestGraphQLData());

    return getData(query).then((data) => {
      dispatch(creators.updateData(data.data));
    });
  }
);

creators.updateData = (data) => {
  console.log({ updateData: data });
  return {
    type: types.UPDATE_SITE_DATA,
    ...data,
  };
};

export { creators, types };
