const getSiteState = state => state.site;
const getSiteTitle = state => getSiteState(state).title;
const getSiteTagline = state => getSiteState(state).tagline;


export default {
  getSiteState,
  getSiteTitle,
  getSiteTagline,
};
