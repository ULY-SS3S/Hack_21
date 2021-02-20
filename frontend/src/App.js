import React from "react";
import Intro from "./components/Intro_Page/Intro";
import {BrowserRouter} from "react-router-dom";
import Team2Route from "./Nav/Team2Route";

function App() {
    return (
        <BrowserRouter>
            <Team2Route/>
            {/*<UserAuthProvider>*/}
            {/*</UserAuthProvider>*/}
        </BrowserRouter>
    );

}

export default App;
