/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
      super(props);
  
    }
  
    render() {
      
      let inputItem;
      
      switch(this.props.type) {
        case 'textarea':
          inputItem =
            <textarea />;
          break;
        case 'date-range':
          inputItem =
            <div>
              <input type='date' />
              <input type='date' />
            </div>;
          break;
        default:
          inputItem =
            <input type={this.props.type}
              onChange = { this.handleChange } />;
      }
      
      return (
        <li>
          <label>{this.props.name}</label>
          {inputItem}
        </li>
        );
      }
    }

export default Field;