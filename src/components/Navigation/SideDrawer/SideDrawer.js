import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {

  // The sideDrawer's position is opened and closed using classes,
  // that are determined by props.open
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop 
        showSideDrawer={props.open} 
        clicked={props.toggle} 
      />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        {/* Same NavigationItems in the Toolbar */}
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
};

export default sideDrawer;