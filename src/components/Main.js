import React, { Component } from "react";
import CVForm from './CVForm';
import CVPrev from './CVPrev';
import '../styles/Main.css';

class Main extends Component {

  constructor() {
    super();
    
    this.state = { personal: {firstName: '' }};
  }

  handleChange = (value) => {
    console.log('test');
    this.setState( { personal: { firstName: value } } );
  }
  
  render() {
    return (
      <main>
        <CVForm onFieldChange={this.handleChange}/>
        <CVPrev personal={this.state.personal}/>
      </main>
      );
    }
  }
  
  export default Main;