import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <h1>Here are the food options to review:</h1>
        <h3>Steak:</h3>
        <p>Roasted Beef Tenderloin with Garlic Potato Purée, Buttered Baby Carrots, Shallot Sauce (GF)</p>
        <h3>Chicken:</h3>
        <p>Crispy All Natural Chicken with Tomato Risotto, Baby Carrots, Pesto, au Jus (GF)</p>
        <p>The chicken does have a slight spiceyness as a warning to those who don't like spicy food.</p>
        <h3>Vegan:</h3>
        <p>Swiss Potato Rosti over mixed vegitables</p>
      </div>
    );
  }
}

export default Menu;
