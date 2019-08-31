import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  }

  /*
  updatePurchaseState = (ingredients) => {
    // Get an array of the object keys.
    // Use them to get an array of the associated values (counts of each ingredient).
    // Add the counts (numbers) up and return the total (the sum!).
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
      this.setState({purchaseable: sum > 0});
  }
  */

  // Simpler way to check if burger can be ordered (i.e. has at least one ingredient)
  updatePurchaseState (ingredients) {
      const atLeastOneIngredient = Object.values(ingredients).some(amount => amount > 0);
      this.setState({purchaseable: atLeastOneIngredient});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return ;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  // The arrow function binds 'this' to the class. If you used an ES5 style function
  // you'd have to bind 'this' (e.g. this.purchaseHandler = this.purchaseHandler.bind(this))
  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }
  
  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    // Set the ingredient's value to true (i.e. is disabled) if no ingredient.
    // Set to false if one or more ingredients.
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal 
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary 
            ingredients={this.state.ingredients} 
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchaseable={this.state.purchaseable}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;