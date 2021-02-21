import "../../styles/intro.css";
import React from "react";
import IntroContainer from "./IntroContainer";
import IntroTitle from "./IntroTitle";

const Register = (props) => {
    return (
        <IntroContainer>
            <IntroTitle title="WELCOME!" subtitle="Register in Market!" />
            <form onSubmit={props.registerFunc}>
                <div className="form-group mb-3">
                    <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required=""
                        autoFocus=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        id="username"
                        type="text"
                        placeholder="Your User Name"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        id="firstname"
                        type="text"
                        placeholder="Your First Name"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        id="lastname"
                        type="text"
                        placeholder="Your Last Name"
                        required=""
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
            <div className="text-center d-flex justify-content-between mt-4">
                <p>
                    Already have an account?{" "}
                    <button
                        className="font-italic text-muted  toggleButton"
                        onClick={props.toggle}
                    >
                        Sign In Here!
                    </button>
                </p>
            </div>
        </IntroContainer>
    );

}

export default Register;
