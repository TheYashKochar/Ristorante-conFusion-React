import React from 'react';
import {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';

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
        <Header />
        <Menu dishes={this.state.dishes} 
          onClick={(dishID) => this.onDishSelect(dishID)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
        <Footer />
      </div>
    );
  }  
}
export default Main;
