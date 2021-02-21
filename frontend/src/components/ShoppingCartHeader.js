import React from "react";

const ShoppingCartHeader = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-5">
                <h4 className="heading">Shopping Bag</h4>
            </div>
            <div className="col-7">
                <div className="row text-right">
                    <div className="col-4">
                        <h6 className="mt-2">Purchased Date</h6>
                    </div>
                    <div className="col-4">
                        <h6 className="mt-2">Created Date</h6>
                    </div>
                    <div className="col-4">
                        <h6 className="mt-2">Price</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartHeader;
