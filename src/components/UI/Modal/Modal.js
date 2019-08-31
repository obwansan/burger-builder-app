import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

// click handler that sets show to false?

const modal = (props) => (
  <Aux>
    {/* If the modal displays the backdrop should display */}
    <Backdrop 
      show={props.show}
      clicked={props.modalClosed}
    />
    <div 
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;