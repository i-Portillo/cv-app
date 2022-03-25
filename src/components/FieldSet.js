import React, { Component } from 'react';

class FieldSet extends Component {
  constructor(props) {
    super(props);
    
    this.fields = props.fields;
    this.key = props.key;
  }

  handleChange = (field) => {
    let newState = {
      [this.props.name]: field
    }
    this.props.onFieldChange(newState);
  }
  
  render() {
    
    return (
      <div className='field-set'>
        <h2>{this.props.label}</h2>
          <ul>
            {this.fields.map((field) => {
              return <Field key={field.id}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            onFieldChange={this.handleChange} />
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

  handleChange = (value) => {
    let newState = {
      [this.props.name]: value,
    }
    this.props.onFieldChange(newState);
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
            onChange = { (e) => { this.handleChange(e.target.value) } } />;
    }
    
    return (
      <li>
        <label>{this.props.label}</label>
        {inputItem}
      </li>
      );
    }
  }
  
  export default FieldSet;