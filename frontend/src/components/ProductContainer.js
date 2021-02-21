import React from "react";

const ProductContainer = ({ children }) => {
    return (
        <div className="container-fluid w-100 px-5 justify-content-center">
            <div className="row mt-5">{children}</div>
        </div>
    );
};

export default ProductContainer;
