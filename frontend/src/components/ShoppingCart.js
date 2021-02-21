import React from "react";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCartItem from "./ShoppingCartItem";
import ShoppingCartCheckout from "./ShoppingCartCheckout";
import "../styles/cart.css";

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="container px-4 py-5 mx-auto">
                <ShoppingCartHeader />
                <ShoppingCartItem
                    productImgSrc="not available"
                    productImgAlt="not available"
                    productName="test"
                    productSeller="test"
                    productPurchasedDate="test"
                    productCreatedDate="test"
                    productPrice="$test"
                />
                <ShoppingCartCheckout />
            </div>
        );
    }
}

export default ShoppingCart;
