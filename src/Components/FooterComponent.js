import React from 'react';
import { Link } from "react-router-dom";

function Footer(props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row ">
                    <div className="col-3 col-sm-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>< Link to="/home">Home</ Link></li>
                            <li>< Link to="/aboutus">About Us</ Link></li>
                            <li>< Link to="/menu">Menu</ Link></li>
                            <li>< Link to="/contactus">Contact Us</ Link></li>
                        </ul>
                    </div>
                    <div className="col-9 col-sm-4 align-self-center order-md-last">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/+"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:dikshitakambri18@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5">
                        <h5>Our Address</h5>
                        <div>
                            B-ving, Vihang apt.,<br></br>
                              Kotwal Nagar,<br></br>
                              Karjat,Raigad-410201<br></br>
                            <i className="fa fa-phone fa-lg"></i>: +91 8554067489<br></br>
                            <i className="fa fa-fax fa-lg"></i>: +91 8554067489<br></br>
                            <i className="fa fa-envelope fa-lg"></i>: 
                            <a href="mailto:dikshitakambri18@gmail.com">dikshitakambri18@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;