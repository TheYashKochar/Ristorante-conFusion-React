import React from 'react';
import {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

//function Main()
class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      // this dishes object will be passed child component "Menu"
      dishes: DISHES,
    };
  }

  render() {
    //Another method to pass function component other than used in Menu part
    const HomePage = () => {
      return(
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />  
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }  
}
export default Main;
