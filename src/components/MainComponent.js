import React from 'react';
import {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import { render } from '@testing-library/react';

//function Main()
class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      // this dishes object will be passed child component "Menu"
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishID) {
    //when user chooses a dish update state to "selectedDish to current dish"
    this.setState({ selectedDish: dishID});
    }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href ="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} 
          onClick={(dishID) => this.onDishSelect(dishID)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
      </div>
    );
  }  
}
export default Main;
