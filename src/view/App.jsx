import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.appState.hello} </h1>
                <DevTools />
            </div>
        );
    }
}

export default App;