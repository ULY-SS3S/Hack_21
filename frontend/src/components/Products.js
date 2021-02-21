import React, {useContext, useEffect} from "react";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import SampleImg_1 from "../images/SampleImage_1.jpg";
import SampleImg_2 from "../images/SampleImage_2.jpg";
import Sample from "../images/Sample.jpg";
import {AuthContext} from "../Auth/UserAuthProvider";
import {useHistory} from "react-router";

const Products = (props) => {
    let authContext = useContext(AuthContext);
    let history = useHistory();
    useEffect(() =>{
        if (!authContext.isLoggedIn){
            history.push("/intro");
        }
    }, [authContext]);

    return (
        <ProductContainer>
            <ProductCard update={props.update} img={SampleImg_1} />
            <ProductCard update={props.update} img={SampleImg_2} />
            <ProductCard update={props.update} img={Sample} />
        </ProductContainer>
    );
}

export default Products;
