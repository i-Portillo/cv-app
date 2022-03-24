import React, { Component } from 'react';
import FieldSet from './FieldSet';
import uniqid from 'uniqid';

class CVForm extends Component {
    constructor(props) {
        super(props);

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
    }

    render() {

        return (
            <div>
                {this.forms.map((form) => {
                    return <FieldSet key={form.id}
                                    title={form.title}
                                    fields={form.fields}
                                    onFieldChange={this.props.onFieldChange} />
                })}
                
            </div>
        );
    }
}

export default CVForm;