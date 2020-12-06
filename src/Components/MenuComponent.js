import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state= {
            selectdDish : null
        };
    }

    OnDishSelect(dish){
        this.setState({selectdDish:dish});
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width='20%' src={dish.image} alt={dish.name}>
                    </CardImg>
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){

        const menu= this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={ () => this.OnDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt="{dish.name}">
                        </CardImg>
                        <CardImgOverlay>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
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
                    {this.renderDish(this.state.selectdDish)}
                </div>
            </div>
        );
    }
}

export default Menu;