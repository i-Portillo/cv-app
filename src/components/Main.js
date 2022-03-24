import React, { Component } from "react";
import CVForm from './CVForm';
import CVPrev from './CVPrev';
import '../styles/Main.css';
import uniqid from 'uniqid';

class Main extends Component {

  constructor() {
    super();

    this.forms = [
      {
          title: "Personal",
          fields: [
              {
                  name: "First Name",
                  type: "text",
                  id: uniqid(),
              },
              {
                  name: "Last Name",
                  type: "text",
                  id: uniqid(),
              },
              {
                  name: "Title",
                  type: "text",
                  id: uniqid(),
              },
          ],
          id: uniqid(),
      },
      {
          title: "Contact",
          fields: [
              {
                  name: "Job Title",
                  type: "text",
                  id: uniqid(),
              },
              {
                  name: "Job Description",
                  type: "textarea",
                  id: uniqid(),
              },
              {
                  name: "Date",
                  type: "date",
                  id: uniqid(),
              },
          ],
          id: uniqid(),
      },
      {
          title: "Experience",
          fields: [
              {
                  name: "Job Title",
                  type: "text",
                  id: uniqid(),
              },
              {
                  name: "Job Description",
                  type: "textarea",
                  id: uniqid(),
              },
              {
                  name: "Date",
                  type: "date-range",
                  id: uniqid(),
              },
          ],
          id: uniqid(),
      }
    ]
    
    this.state = { personal: {firstName: '' }};

  }

  handleChange = (value, formName, fieldName) => {
    this.setState( { [formName]: { [fieldName]: value } } );
  }
  
  render() {
    return (
      <main>
        <CVForm forms={this.forms} onFieldChange={this.handleChange}/>
        <CVPrev personal={this.state.personal}/>
      </main>
      );
    }
  }
  
  export default Main;