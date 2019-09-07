import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
  // It's ok for a component to return null.
  // The backdrop displaying is controlled by toggling state.showSideDrawer or state.purchasing
  // to true/false
  props.showSideDrawer ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;