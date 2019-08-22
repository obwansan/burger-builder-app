import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  /*
  // This is a nested loop. We map over each element in ["salad", "bacon", "cheese", "meat"],
  // returning an array with undefined elements for each one. The nested map (loop) runs on
  // the array created for 'salad' before the outer .map runs on 'bacon' and so on. Therefore
  // the nested .map returns an array with a number of <BurgerIngredients /> corresponding to 
  // the number of undefined element placeholders in each array.
  // The key is that the nested .map runs on the array created by the last outer .map loop BEFORE
  // the outer .map loop moves to the next ingredients key.
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      }); 
    })
    // On each loop it returns the container array with the nested array merged into it
    // i.e. moves the nested array's elements into the container array. So we end up with 
    // a single array of JSX objects rather than an array of arrays containing JSX objects.
    // This 'flattening' of the array allows us to check its length below (if it wasn't 
    // 'flattened' the length would be 4 even if there's nothing in each of the 4 sub-arrays).
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
    */

    // A much simpler way to generate the transformedIngredients
    let transformedIngredients = [];

    for (let key in props.ingredients) {
      for (let i = 0; i < props.ingredients[key]; i++) {
        transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />)
      }
    }

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;