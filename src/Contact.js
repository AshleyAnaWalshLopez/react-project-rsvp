import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  state = {
   title: "Contact Ashley",
   offices: [
     {
       address: "ashleyana.walsh@gmail.com"
     }
   ]
 }
  render() {
    let offices = this.state.offices.map((office,index) =>
     <p>Ashley's E-Mail: {office.address}</p>
   );
    return (
      <div>
      <h1>{this.state.title}</h1>
        <p>Are you having trouble with the RSVP form?</p>
        {offices}
      </div>
    );
  }
}

export default Menu;
