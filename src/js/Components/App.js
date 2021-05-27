import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../History';
import ManageHouses from './ManageHouses/ManageHouses';
import WelcomePage from './WelcomePage/WelcomePage';

import { Provider } from 'react-redux';

import store from '../store';
import HouseDetails from './HouseDetails/HouseDetails';

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
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route exact path={'/'} component={WelcomePage} />
                            <Route path={'/management'} component={ManageHouses} />
                            <Route path={'/house/:id'} component={HouseDetails} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
