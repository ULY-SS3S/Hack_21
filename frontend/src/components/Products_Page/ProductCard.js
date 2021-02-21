import "../../styles/product.css";
import React, {useEffect, useState} from "react";
import {Button, message} from "antd";


const ProductCard = (props) => {

    let [info, setInfo] = useState({
        title: "title",
        subtitle: "subtitle",
        price: 1000,
        seller_id: 1,
        datePurchased: new Date(2000, 4, 15),
        dateCreated: new Date(1999, 6, 15),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });

    // before click: danger, after click: secondary
    let [buttonState, setButtonState] = useState({
        type: "danger",
        disabled: false
    });

    useEffect(() => {
        // TODO
        // API call update info
        console.log(props.cart);
        console.log(buttonState)
    })

    function onItemAdded() {
        // props.cart.push()
        props.setCart([...props.cart, info]);
        message.success({
            content: "Added to the shopping cart!",
            style: {
                marginTop: '20vh',
            }
        });
        setButtonState({
            type: "dashed",
            disabled: true
        })
    }


    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
            <div className="card shadow-lg border">
                {" "}
                <img
                    src={props.img}
                    alt="not available"
                    className="card-img-top"
                    width="100%"
                />
                <div className="card-body pt-0 px-0">
                    <div className="d-flex flex-row justify-content-between mb-0 px-3">
                        {" "}
                        <span className="text-muted mt-3">
                            {info.title}
                            </span>
                        <h6 className="mt-4">{info.subtitle}</h6>
                    </div>
                    <hr className="mt-2 mx-3" />
                    <div className="d-flex flex-row justify-content-between px-3 pb-4">
                        <div className="d-flex flex-column mb-1">
                                <span className="text-muted" id="price">
                                    PRICE
                                </span>
                            <small className="text-muted">
                                TAX INCLUDED
                            </small>
                        </div>
                        <div className="d-flex flex-column mb-1 pt-1">
                            <h5 className="mb-0">$&#xa0;{info.price}</h5>
                            <small className="text-muted text-right">
                                Sample Subprice
                            </small>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-3 mid">
                        <div className="d-flex flex-column">
                            <small className="text-muted mb-2">
                                SELLER ID:
                            </small>
                            <div className="d-flex flex-row">
                                <h6 className="ml-1">#{info.seller_id}</h6>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <small className="text-muted mb-2">
                                DATE PURCHASED:
                            </small>
                            <div className="d-flex flex-row">
                                <h6 className="ml-1">{info.datePurchased.toISOString().split('T')[0]}</h6>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <small className="text-muted mb-2">
                                DATE CREATED:
                            </small>
                            <div className="d-flex flex-row">
                                <h6 className="ml-1">{info.dateCreated.toISOString().split('T')[0]}</h6>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="d-flex flex-row justify-content-between p-3 mid border-top">
                        <div className="d-flex flex-column">
                            <small className="text-muted mb-2">
                                DESCRIPTION:
                            </small>
                            <div className="d-flex flex-row">
                                {info.description}
                            </div>
                        </div>
                    </div>{" "}
                    <div className="mx-3 mt-3 mb-2">
                        <Button
                            {...buttonState}
                            // className="btn btn-block"
                            onClick={onItemAdded}
                            block
                        >
                            <b>BUY</b>
                        </Button>
                    </div>{" "}
                    <small className="d-flex justify-content-center text-muted">
                        *Legal Disclaimer
                    </small>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
