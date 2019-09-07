import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  // sideDrawerCloseHandler = () => {
  //   this.setState({showSideDrawer: false});
  // }

  toggleSideDrawer = () => {
    this.setState({showSideDrawer: !this.state.showSideDrawer});
  }

  render() {
    return (
      <Aux>
        <Toolbar
          toggleSideDrawer={this.toggleSideDrawer} />  
        />
        <SideDrawer 
          open={this.state.showSideDrawer}          
          toggle={this.toggleSideDrawer} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}


export default Layout;