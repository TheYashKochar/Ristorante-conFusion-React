import React , {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle} from 'reactstrap';
import DishDetail from  './DishdetailComponent';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //This is implemented to click event to take the dish page
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        //when user chooses a dish update state to "selectedDish to currebt dish"
        this.setState({ selectedDish: dish});
    }

    // This function renders the selectedDish and displays below
    //<div className="row">  
    //  {this.renderDish(this.state.selectedDish)}
    //</div>

    /*renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }*/

    render() {
        // using props keyword we can use to map the array
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish}/>
                </div>
            </div>
        );
    }
}
export default Menu;