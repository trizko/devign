import React from 'react';
import JSONEditor from './JSONEditor';

var ToolbarStyle = {
    display: 'flex',
    flex: '1',
    border: '5px solid grey'
}

export default class Toolbar extends React.Component {
    render() {
        return (
            <div style={ToolbarStyle}>
                <JSONEditor/>
            </div>
        );
    }
}
