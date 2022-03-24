import React, { Component } from 'react';

class CVPrev extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.personal.firstName} {this.props.personal.lastName}</p>
            </div>
        );
    }
}

export default CVPrev;