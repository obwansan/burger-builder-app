# burger-builder-app

## Example control flow

- When the Order Now button is clicked, props.ordered is called.
- props.ordered holds this.purchaseHandler that sets state.purchasing to false
- This causes the BurgerBuilder component to rerender.
- The new state.purchasing value is passed into Modal as props.show
- If props.show is true, the modal displays via CSS
- So, in short, an event occurs dependent on a state value (e.g. true or false).
- And the state value is changed by an event listener (e.g. onClick) that calls an event handler.
