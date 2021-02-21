import React from "react";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCartItem from "./ShoppingCartItem";
import ShoppingCartCheckout from "./ShoppingCartCheckout";
import "../styles/cart.css";

class ShoppingCart extends React.Component {
    getCartInfo() {
        console.log(this.props.items);
        let itemsInfo = this.props.items.map((element) => {
            return (
                <ShoppingCartItem
                    productImgSrc="not available"
                    productImgAlt="not available"
                    productName="test"
                    productSeller="test"
                    productPurchasedDate="test"
                    productCreatedDate="test"
                    productPrice={1000}
                />
            );
        });
        return itemsInfo;
    }

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
                {this.getCartInfo()}
                <ShoppingCartCheckout />
            </div>
        );
    }
}

export default ShoppingCart;
