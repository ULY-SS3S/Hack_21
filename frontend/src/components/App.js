import React from "react";
import Intro from "./Intro_Page/Intro";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import NewProduct from "./NewProduct";

class App extends React.Component {
    state = { currentCartItems: [] };

    constructor(props) {
        super(props);
        this.updateCart = this.updateCart.bind(this);
    }

    updateCart(newItem) {
        this.setState({
            currentCartNum: this.state.currentCartItems.push(newItem),
        });
    }

    render() {
        return (
            <div>
                <Intro />
                <Products update={this.updateCart} />
                <ShoppingCart items={this.state.currentCartItems} />
                <NewProduct />
            </div>
        );
    }
}

export default App;
