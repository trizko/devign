import React from 'react';
import Canvas from './Canvas';
import Toolbar from './Toolbar';

var AppStyle = {
    display: 'flex',
    height: '100vh',
}

export default class App extends React.Component {
    render() {
        return (
            <div style={AppStyle}>
                <Canvas/>
                <Toolbar/>
            </div>
        );
    }
}
