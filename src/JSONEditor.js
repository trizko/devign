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
        this.isValidJSON = this.isValidJSON.bind(this);
    }

    handleChange(event) {
        this.setState({json: event.target.value}, () => {
            if (this.isValidJSON(this.state.json)) {
                console.log('this is valid json');
            }
        });
    }

    isValidJSON(json) {
        let result = true;

        try {
            JSON.parse(json)
        } catch (e) {
            result = false;
        }

        return result;
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
