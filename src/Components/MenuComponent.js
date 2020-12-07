import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state= {
            selectdDish : null
        };
    }

    render(){

        const menu= this.props.dishes.map((dish) => {
            return(
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={ () => this.props.onClick(dish.id)}>
                        <CardImg width='100%' src={dish.image} alt="{dish.name}">
                        </CardImg>
                        <CardImgOverlay>
                            <CardTitle><h3>{dish.name}</h3></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail dish={this.state.selectdDish} />
                </div>
            </div>
        );
    }
}

export default Menu;