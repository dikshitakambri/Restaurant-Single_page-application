import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

function Contact(props) {
    return(
        <div className="container">
            <div className="row">
                   <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                   </Breadcrumb>
                </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        B-ving, Vihang apt.,<br></br>
                        Kotwal Nagar,<br></br>
                        Karjat,Raigad-410201<br></br>
                        <i className="fa fa-phone fa-lg"></i>: +91 8554067489<br></br>
                        <i className="fa fa-fax fa-lg"></i>: +91 8554067489<br></br>
                        <i className="fa fa-envelope fa-lg"></i>: 
                        <a href="mailto:dikshitakambri18@gmail.com">dikshitakambri18@gmail.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+918554067489"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:dikshitakambri18@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;