import React from "react";
import "../../styles/createProduct.css";

const CreateProduct = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mx-auto">
                    <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex"></div>
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                Your Product Info
                            </h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input
                                        type="text"
                                        id="inputProductName"
                                        className="form-control"
                                        placeholder="ProductName"
                                        required
                                        autofocus
                                    />
                                    <label htmlFor="inputProductName">
                                        Product Name
                                    </label>
                                </div>

                                <div className="form-label-group">
                                    <input
                                        type="date"
                                        id="inputPurchasedDate"
                                        className="form-control"
                                        placeholder="PurchasedDate"
                                        required
                                    />
                                    <label htmlFor="inputProductName">
                                        Purchased Date
                                    </label>
                                </div>

                                <hr />

                                <div className="form-label-group">
                                    <p className="pl-2">Product Description</p>
                                    <textarea
                                        type="text"
                                        id="inputProductDescription"
                                        className="form-control"
                                        placeholder=""
                                        required
                                    />
                                </div>

                                <hr />

                                <button
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
