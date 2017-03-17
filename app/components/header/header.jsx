import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';

import Language from '../language/language';

@inject('language')
class Header extends React.Component {
  changeLanguage(language) {
    this.props.language.changeLanguageTo(language);
  }

  render() {
    return (
      <div>
        <Link to={'/'}><Language resource="HEADER.HOME" /></Link>
        <Link to={'/works'}><Language resource="HEADER.MY_WORKS" /></Link>
        <Link to={'/user'}><Language resource="HEADER.USER" /></Link>
        <button onClick={this.changeLanguage.bind(this, 'es')}>
          <Language resource="HEADER.CHANGE_TO_SPANISH" />
        </button>
        <button onClick={this.changeLanguage.bind(this, 'en')}>
          <Language resource="HEADER.CHANGE_TO_ENGLISH" />
        </button>
      </div>
    );
  }
}

export default Header;
