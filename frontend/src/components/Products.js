import React from "react";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import SampleImg_1 from "../images/SampleImage_1.jpg";
import SampleImg_2 from "../images/SampleImage_2.jpg";
import Sample from "../images/Sample.jpg";

class Products extends React.Component {
    render() {
        return (
            <ProductContainer>
                <ProductCard update={this.props.update} img={SampleImg_1} />
                <ProductCard update={this.props.update} img={SampleImg_2} />
                <ProductCard update={this.props.update} img={Sample} />
            </ProductContainer>
        );
    }
}

export default Products;
