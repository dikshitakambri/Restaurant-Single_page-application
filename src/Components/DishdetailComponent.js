import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 ml-1">
                    <Card>
                        <CardImg width='100%' src={dish.image} alt={dish.name}>
                        </CardImg>
                        <CardBody>
                            <CardTitle><h3>{dish.name}</h3></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
       const CommentList = comments.map((comment) => {
           return(
            <ListGroupItem key={comment.id}>
                <p>{comment.comment}</p>
                <p>{comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </ListGroupItem>
           );
       });
       return(CommentList);
    }

    render(){
        if (this.props.dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ListGroup flush >
                            {this.renderComments(this.props.comments)}
                        </ListGroup>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;