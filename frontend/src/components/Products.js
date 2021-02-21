import React from "react";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";

class Products extends React.Component {
    render() {
        return (
            <ProductContainer>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductContainer>
        );
    }
}

export default Products;
