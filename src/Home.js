import React, {Component} from 'react';
import Fire from './Fire';

class Home extends Component {
  state = {
    table: Fire.database().ref('list'),
    rows: [],
    name:"",
    location:""
  }

  componentDidMount(){
    //We are using firebase to request a response from our table
    //The response is a higher order function object (don't ask - lol - I mean...do)
    //We then build a simple array of rows
    this.state.table.on('value', (response) => {
      let objects = response.val();
      let rows = [];
      for(let key in objects) {
        let row = objects[key];
        row.key = key;
        rows.push(row);
      }
      this.setState({rows});
    });
  }

  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  add = (event) => {
    event.preventDefault();
    if(this.state.name){
      let row = {
        name: this.state.name,
        email: this.state.email,
        rsvp: this.state.rsvp,
        food: this.state.food

      }
      this.state.table.push(row);
      this.setState({name:""});
      this.setState({email:""});
      this.setState({rsvp:""});
      this.setState({food:""});
    }
  }

  delete = (row) => {
    this.state.table.child(row.key).remove();
  }

  render(){
    let rows = this.state.rows.map(row =>
      <li key={row.key} className="list-group-item">
        {row.name} is in {row.email} is in {row.rsvp} is in {row.food}
        <button onClick={clickEvent => this.delete(row)} className="btn btn-danger float-right">
          <i className="fa fa-trash"></i>
        </button>
      </li>
    );

    return (
      <div className="container mt-3">
        <h1>RSVP Here</h1>
        <form className="form-group">
        <label>Name:</label>
          <input className="form-control" type="text"
            name="name"
            placeholder="Type name here"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>E-Mail:</label>
          <input className="form-control" type="text"
            name="email"
            placeholder="Please provide e-mail for follow up."
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>RSVP:</label>
          <input className="form-control" type="text"
            name="rsvp"
            placeholder="Type RSVP here"
            onChange={this.handleChange}
            value={this.state.rsvp}
          />
          <label>Food Selection:</label>
          <input className="form-control" type="text"
            name="food"
            placeholder="Food selection here."
            onChange={this.handleChange}
            value={this.state.food}
          />
          <button onClick={this.add} className="btn btn-success">
            <i className="fa fa-plus"></i>
          </button>
        </form>

      </div>
    );
  }
}

export default Home;
