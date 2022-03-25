import React, { Component } from 'react';
import FieldSet from './FieldSet';

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.forms = props.forms;

    }

    render() {

        return (
            <div>
                {this.forms.map((form) => {
                    return <FieldSet key={form.id}
                                    label={form.label}
                                    name={form.name}
                                    fields={form.fields}
                                    onFieldChange={this.props.onFieldChange} />
                })}
                
            </div>
        );
    }
}

export default CVForm;