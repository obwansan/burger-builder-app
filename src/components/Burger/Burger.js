import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // Object.keys returns an array of the keys in state.ingredients.
  // We map over this array and return an array of 

  // This is a nested loop. We map over each element in ["salad", "bacon", "cheese", "meat"],
  // returning an array with undefined elements for each one. The nested map (loop) runs on
  // the array created for 'salad' before the outer .map runs on 'bacon' and so on. Therefore
  // the nested .map returns an array with a number of <BurgerIngredients /> corresponding to 
  // the number of undefined element placeholders in each array.
  // The key is that the nested .map runs on the array created by the last outer .map loop BEFORE
  // the outer .map loop moves to the next ingredients key.
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      }); 
    });


  console.log('transformedIngredients - step 1:', Object.keys(props.ingredients));
  console.log('transformedIngredients - step 2:', Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])];}));
  console.log('transformedIngredients - step 3:', Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map(() => {
      return 'el';
      }); 
    })
  ); 

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;