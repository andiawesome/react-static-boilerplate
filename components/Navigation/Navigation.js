/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Link from '../Link';

class Navigation extends React.Component {
  static propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    navItems: [],
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    const { navItems } = this.props;
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        {navItems.map(item =>
          <Link className="mdl-navigation__link" to={item.url}>{item.title}</Link>,
        )}
      </nav>
    );
  }

}

export default Navigation;
