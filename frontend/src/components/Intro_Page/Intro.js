import React from "react";
import Login from "./Login";
import Register from "./Register";

class Intro extends React.Component {
    state = { registerPage: false };

    constructor(props) {
        super(props);
        this.registerToggle = this.registerToggle.bind(this);
    }

    registerToggle() {
        this.setState({ registerPage: !this.state.registerPage });
    }

    renderContent() {
        if (!this.state.registerPage) {
            return <Login toggle={this.registerToggle} />;
        } else {
            return <Register toggle={this.registerToggle} />;
        }
    }

    render() {
        return <div>{this.renderContent()}</div>;
    }
}

export default Intro;
