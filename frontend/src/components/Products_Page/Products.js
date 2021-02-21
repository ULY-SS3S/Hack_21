import React, {useContext, useEffect} from "react";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import SampleImg_1 from "../../images/SampleImage_1.jpg";
import SampleImg_2 from "../../images/SampleImage_2.jpg";
import Sample from "../../images/Sample.jpg";
import {AuthContext} from "../../Auth/UserAuthProvider";
import {useHistory} from "react-router";

const Products = () => {
    let authContext = useContext(AuthContext);
    let history = useHistory();
    let imgs = [SampleImg_1, SampleImg_2, Sample];

    useEffect(() =>{
        if (!authContext.isLoggedIn){
            history.push("/intro");
        }
    }, [authContext.isLoggedIn]);

    return (
        <ProductContainer>
            {
                imgs.map(img => {
                    return (
                        <ProductCard
                        cart={authContext.cart} setCart={authContext.setCart} img={img}
                        />
                    )})
            }
        </ProductContainer>
    );
}

export default Products;
