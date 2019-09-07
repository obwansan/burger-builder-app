import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../../Menu/menu';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
      {/* <div onClick={props.toggleSideDrawer}>MENU</div> */}
      <div>
        <Menu toggleSD={props.toggleSideDrawer} />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      {/* Same NavigationItems in the SideDrawer */}
      <nav className={classes.DesktopOnly}>
        <NavigationItems /> 
      </nav>
    </header>
);

export default toolbar;