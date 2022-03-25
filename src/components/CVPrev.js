import React, { Component } from 'react';

class CVPrev extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.personal.firstName} {this.props.personal.lastName}</p>
                <p>{this.props.personal.title}</p>
                <br/>
                <p>{this.props.contact.email}</p>
                <p>{this.props.contact.phone}</p>
                <p>{this.props.contact.address}</p>
                <br/>
                <p>{this.props.experience.jobTitle}</p>
                <p>{this.props.experience.jobDescription}</p>
                <p>{this.props.experience.date}</p>
            </div>
        );
    }
}

export default CVPrev;