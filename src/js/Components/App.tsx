import React, { Component } from 'react'
import { AppContext } from './AppContext';

type AppProps = {
    // using `interface` is also ok
    message?: string;
};

type MyState = {
    // using `interface` is also ok
    message?: string,
    title?: string
};

// const App: React.FC<AppProps> = ({message}: AppProps) => {
//     return (
//         <div>
//             <h1>{message || "React, typescript, webpack + babel, eslint, prettier"}</h1>
//         </div>
//     )
// }

class App extends Component<AppProps, MyState> {
    constructor(props: AppProps){
        super(props)
    }

    state: MyState = {
        message: ""
    }

    componentDidMount(): void {
        this.getData();
    }

    getData = async (): Promise<void> => {
        return await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({message: json.title})
            })
    }

    render() {
        return (
            <AppContext.Provider value={{
                apiUrl: ""
            }}>
                <div className="container">
                    <h1>{"React, typescript, webpack + babel, eslint, prettier"}</h1>
                    <h2>{this.state.message}</h2>
                </div>
            </AppContext.Provider>
        )
    }
}

export default App