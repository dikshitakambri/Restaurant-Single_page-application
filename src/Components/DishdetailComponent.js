import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg, } from 'reactstrap';

    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 ml-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} ></CardImg>
                    <CardBody>
                        <CardTitle><h3>{dish.name}</h3></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments(comments){
        if(comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>{comment.author},{comment.date}</p>
                                </li>
                            );
                        }
                        )}
                    </ul>
                </div>
            );
            else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
        if (props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments = {props.dish.comments}/>
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

export default DishDetail;