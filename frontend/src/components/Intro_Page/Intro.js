import React, {useContext, useState} from "react";
import Login from "./Login";
import Register from "./Register";
import {AuthContext} from "../../Auth/UserAuthProvider";

const Intro = () => {
    const [registerPage, setRegisterPage] = useState(false);

    const authContext = useContext(AuthContext);

    function registerToggle() {
        setRegisterPage(registerPage => !registerPage);
    }

    return (
        <div>
            {registerPage ?
                <Register
                    toggle={registerToggle}
                    registerFunc={authContext.registerFunc}
                />
                : <Login
                    toggle={registerToggle}
                    loginFunc={authContext.loginFunc}
                />
            }
        </div>
    )
}

export default Intro;
