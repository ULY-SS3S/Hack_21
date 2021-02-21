import React from "react";
import I2URoute from "./Nav/I2URoute";
import {BrowserRouter} from "react-router-dom";
import {UserAuthProvider} from "./Auth/UserAuthProvider";
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <UserAuthProvider>
                <I2URoute/>
            </UserAuthProvider>
        </BrowserRouter>
    );
}

export default App;
