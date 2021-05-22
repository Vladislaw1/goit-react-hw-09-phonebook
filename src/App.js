import React from 'react';
import Contacts from "./Contacts";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Contacts/>
            </Router>
        </Provider>
    );
}

export default App;