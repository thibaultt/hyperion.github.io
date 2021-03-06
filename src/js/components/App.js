import React, {Component} from 'react';
import logo from '../../images/logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Table from '../containers/table';

import '../../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Project : Hyperion </h2>

                </div>
                <MuiThemeProvider>
                    <Table/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
