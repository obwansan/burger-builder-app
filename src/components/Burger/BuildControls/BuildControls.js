import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

// The types need to be the same as the cases in burgerIngredient.js
const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} // true or false
      />
    ))}
    <button 
      className={classes.OrderButton}
      // set the disabled html property to true or false if no ingredients have been added
      disabled={!props.purchaseable} 
      >ORDER NOW</button>
  </div>
);

export default buildControls;