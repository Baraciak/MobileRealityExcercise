import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../History';
import WelcomePage from './WelcomePage/WelcomePage';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        return await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ message: json.title });
            });
    };

    render() {
        return (
            <div className="app-container">
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={WelcomePage} />
                        {/* <Route exact path={'/'} component={} /> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
