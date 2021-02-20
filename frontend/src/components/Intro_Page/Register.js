import "../../styles/intro.css";
import React from "react";
import IntroContainer from "./IntroContainer";
import IntroTitle from "./IntroTitle";

class Register extends React.Component {
    render() {
        return (
            <IntroContainer>
                <IntroTitle title="WELCOME!" subtitle="Register in Market!" />
                <form>
                    <div className="form-group mb-3">
                        <input
                            id="inputEmail"
                            type="email"
                            placeholder="Email address"
                            required=""
                            autofocus=""
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                        Register
                    </button>
                </form>
            </IntroContainer>
        );
    }
}

export default Register;
