import React from 'react';

var JSONEditorStyle = {
    flex: '1',
    fontFamily: 'monospace'
}

export default class JSONEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {json: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(
            {json: event.target.value},
            () => console.log(this.state)
        );
    }

    render() {
        return (
            <textarea
                style={JSONEditorStyle}
                value={this.state.json}
                onChange={this.handleChange}
                >
            </textarea>
        );
    }
}
