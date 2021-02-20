import React from "react";
import Intro from "./components/Intro_Page/Intro";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <UserAuthProvider>
                <Intro />
            </UserAuthProvider>
        </BrowserRouter>
    );

}

export default App;
