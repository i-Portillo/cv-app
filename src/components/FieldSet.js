/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class FieldSet extends Component {
  constructor(props) {
    super(props);
    
    this.fields = props.fields;
    this.key = props.key;
  }
  
  render() {
    
    return (
      <div className='field-set'>
        <h2>{this.props.title}</h2>
          <ul>
            {this.fields.map((field) => {
              return <Field key={field.id}
                            name={field.name}
                            type={field.type}
                            onFieldChange={this.props.onFieldChange} />
            })}
        </ul>
      </div>
    );
  }
}
  
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
            onChange = { (e) => { this.props.onFieldChange(e.target.value)} } />;
    }
    
    return (
      <li>
        <label>{this.props.name}</label>
        {inputItem}
      </li>
      );
    }
  }
  
  export default FieldSet;