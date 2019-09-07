import React from 'react';

// import Aux from '../../hoc/Aux';
import classes from './menu.css';

const menu = (props) => (
  // Can't use onClick on a <Aux> component
  // <Aux>
    <div onClick={props.toggleSD}>
      <div className={classes.MenuIconLine}></div>
      <div className={classes.MenuIconLine}></div>
      <div className={classes.MenuIconLine}></div>
    </div>
  // </Aux>
)

export default menu;