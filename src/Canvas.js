import React from 'react';

var CanvasStyle = {
    flex: '3',
    cursor: 'crosshair',
    backgroundImage: 'url("/canvas.png")'
}

export default class Canvas extends React.Component {
    render() {
        return (
            <div style={CanvasStyle}>
            </div>
        );
    }
}
