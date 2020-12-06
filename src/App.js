import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/MenuComponent';
import { Navbar, NavbarBrand} from 'reactstrap';
import { DISHES } from './shared/dishes';

function App() {

  constructor(props){
    super(props);

    this.state = {
      dishes = DISHES
    };
  }

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristorant Con Fusion 
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}

export default App;
