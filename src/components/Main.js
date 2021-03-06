import React, { Component } from "react";
import CVForm from './CVForm';
import CVPrev from './CVPrev';
import '../styles/Main.css';
import uniqid from 'uniqid';
import { merge } from 'lodash';

class Main extends Component {

    constructor() {
        super();

        this.forms = [
            {
                label: "Personal",
                name: "personal",
                fields: [
                    {
                        label: "First Name",
                        name: "firstName",
                        type: "text",
                        id: uniqid(),
                    },
                    {
                        label: "Last Name",
                        name: "lastName",
                        type: "text",
                        id: uniqid(),
                    },
                    {
                        label: "Title",
                        name: "title",
                        type: "text",
                        id: uniqid(),
                    },
                ],
                id: uniqid(),
            },
            {
                label: "Contact",
                name: "contact",
                fields: [
                    {
                        label: "Email",
                        name: "email",
                        type: "email",
                        id: uniqid(),
                    },
                    {
                        label: "Phone",
                        name: "phone",
                        type: "tel",
                        id: uniqid(),
                    },
                    {
                        label: "Address",
                        name: "address",
                        type: "textarea",
                        id: uniqid(),
                    },
                ],
                id: uniqid(),
            },
            {
                label: "Experience",
                name: "experience",
                fields: [
                    {
                        label: "Job Title",
                        name: "jobTitle",
                        type: "text",
                        id: uniqid(),
                    },
                    {
                        label: "Job Description",
                        name: "jobDescription",
                        type: "textarea",
                        id: uniqid(),
                    },
                    {
                        label: "Date",
                        name: "date",
                        type: "date",
                        id: uniqid(),
                    },
                ],
                id: uniqid(),
            }
        ]

        this.state = { 
            personal: {
                firstName: '',
                lastName: '',
                title: '',
            },
            contact: {
                email: '',
                phone: '',
                address: '',
            },
            experience: {
                jobTitle: '',
                jobDescription: '',
                date: '',
            },
        };
    }

    handleChange = (newState) => {
        const merged = merge(this.state, newState);
        this.setState( merged );
    }

    render() {
        return (
            <main>
                <CVForm forms={this.forms} onFieldChange={this.handleChange}/>
                <CVPrev personal={this.state.personal}
                        contact={this.state.contact}
                        experience={this.state.experience}/>
            </main>
            );
        }
    }

    export default Main;