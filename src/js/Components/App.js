import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../History';

class App extends Component {
    constructor(props) {
        super(props);

        state = {
            message: '',
        };
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
            <div className="container">
                <Router history={history}>
                    <Switch>
                        {/* <Route exact path={'/'} component={} /> */}
                        {/* <Route exact path={'/'} component={} /> */}
                    </Switch>

                    <h1>{'React, typescript, webpack + babel, eslint, prettier'}</h1>
                    <h2>{this.state.message}</h2>
                </Router>
            </div>
        );
    }
}

export default App;
