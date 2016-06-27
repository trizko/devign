import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
        <div style={AppStyle}>
        </div>
    )
  }
}

var AppStyle = {
    display: 'flex',
    height: '100vh',
}

ReactDOM.render(<App/>, document.getElementById('app-view'));
