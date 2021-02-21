import React from "react";

const ShoppingCartItem = (props) => {
    return (
        <div className="row d-flex justify-content-center border-top">
            <div className="col-5">
                <div className="row d-flex">
                    <div className="product">
                        {" "}
                        <img
                            src={props.productImgSrc}
                            alt={props.productImgAlt}
                            className="product-img"
                        />{" "}
                    </div>
                    <div className="my-auto flex-column d-flex pad-left">
                        <h6 className="mob-text">{props.productName}</h6>
                        <p className="mob-text">{props.productSeller}</p>
                    </div>
                </div>
            </div>
            <div className="my-auto col-7">
                <div className="row text-right">
                    <div className="col-4">
                        <p className="mob-text">{props.productPurchasedDate}</p>
                    </div>
                    <div className="col-4">
                        <div className="row d-flex justify-content-end px-3">
                            <p className="mb-0" id="cnt1">
                                {props.productCreatedDate}
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6 className="mob-text">{props.productPrice}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
