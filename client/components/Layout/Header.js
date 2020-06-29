import React, { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <Fragment>
      <Link href='/'>
        <a>home</a>
      </Link>
    </Fragment>
  );
};

Header.propTypes = {};

export default Header;
