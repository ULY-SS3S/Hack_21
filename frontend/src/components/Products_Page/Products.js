import React, {useContext, useEffect} from "react";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import SampleImg_1 from "../../images/SampleImage_1.jpg";
import SampleImg_2 from "../../images/SampleImage_2.jpg";
import Sample from "../../images/Sample.jpg";
import {AuthContext} from "../../Auth/UserAuthProvider";
import {useHistory} from "react-router";
import {BackTop} from "antd";

import 'react-tiny-fab/dist/styles.css';

import {ArrowUpOutlined} from '@ant-design/icons';
import fab from "../Fab/fab";


const Products = () => {
    let authContext = useContext(AuthContext);
    let history = useHistory();
    let imgs = [SampleImg_1, SampleImg_2, Sample];

    useEffect(() =>{
        if (!authContext.isLoggedIn){
            history.push("/intro");
        }
    }, [authContext.isLoggedIn]);

    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };

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
            <BackTop>
                <div style={style}><ArrowUpOutlined /></div>
            </BackTop>

            {fab({
                backgroundColor: '#9b59b6'
            })}
        </ProductContainer>
    );
}

export default Products;
