import React from 'react';

import classes from './Logo.css';

// Need to do this so webpack can find the logo when it munges all the files for a build
import BurgerLogo from '../../assets/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="BurgerLogo" />
  </div>
);

export default logo;