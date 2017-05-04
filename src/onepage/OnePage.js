import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

class OnePage extends React.Component {
  static propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired),
    fetchGraphQLData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    pages: [],
  };

  componentDidMount() {
    this.props.fetchGraphQLData();
  }

  createPageContent = content => ({ __html: content })

  render() {
    const { pages } = this.props;

    console.log({ pages });

    return (
      <Layout className="content">
        <h4>pages</h4>
        <ul>
          {pages.length > 0 && pages.map(page =>
            <li key={page.id}>
              {page.title}
              <div dangerouslySetInnerHTML={this.createPageContent(page.content)} />
            </li>,
          )}
        </ul>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default OnePage;
