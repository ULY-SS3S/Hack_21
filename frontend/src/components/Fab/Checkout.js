import React, {useState} from "react";
import "../../styles/cart.css"
import {Button, Col, Modal} from "antd";
import {MoneyCollectTwoTone, PayCircleOutlined} from "@ant-design/icons";

const Checkout = () => {
    return (

        <div className="container px-4 py-5 mx-auto">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-3 radio-group">
                                <div className="row d-flex px-3 radio">
                                    {" "}
                                    <img
                                        className="pay"
                                        src="https://i.imgur.com/WIAP9Ku.jpg"
                                        alt="not available"
                                    />
                                    <p className="my-auto">Credit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio">
                                    {" "}
                                    <img
                                        className="pay"
                                        src="https://i.imgur.com/OdxcctP.jpg"
                                        alt="not available"
                                    />
                                    <p className="my-auto">Debit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio mb-3">
                                    {" "}
                                    <img
                                        className="pay"
                                        src="https://i.imgur.com/cMk1MtK.jpg"
                                        alt="not available"
                                    />
                                    <p className="my-auto">PayPal</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="row px-2">
                                    <div className="form-group col-md-6">
                                        {" "}
                                        <label className="form-control-label">
                                            Name on Card
                                        </label>{" "}
                                        <input
                                            type="text"
                                            id="cname"
                                            name="cname"
                                            placeholder=""
                                        />{" "}
                                    </div>
                                    <div className="form-group col-md-6">
                                        {" "}
                                        <label className="form-control-label">
                                            Card Number
                                        </label>{" "}
                                        <input
                                            type="text"
                                            id="cnum"
                                            name="cnum"
                                            placeholder=""
                                        />{" "}
                                    </div>
                                </div>
                                <div className="row px-2">
                                    <div className="form-group col-md-6">
                                        {" "}
                                        <label className="form-control-label">
                                            Expiration Date
                                        </label>{" "}
                                        <input
                                            type="text"
                                            id="exp"
                                            name="exp"
                                            placeholder="MM/YYYY"
                                        />{" "}
                                    </div>
                                    <div className="form-group col-md-6">
                                        {" "}
                                        <label className="form-control-label">
                                            CVV
                                        </label>{" "}
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            placeholder="***"
                                        />{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-2">
                                <div className="row d-flex justify-content-between px-4">
                                    <p className="mb-1 text-left">Subtotal</p>
                                    <h6 className="mb-1 text-right">$23.49</h6>
                                </div>
                                <div className="row d-flex justify-content-between px-4">
                                    <p className="mb-1 text-left">Shipping</p>
                                    <h6 className="mb-1 text-right">$2.99</h6>
                                </div>
                                <div
                                    className="row d-flex justify-content-between px-4"
                                    id="tax"
                                >
                                    <p className="mb-1 text-left">
                                        Total (tax included)
                                    </p>
                                    <h6 className="mb-1 text-right">$26.48</h6>
                                </div>{" "}
                                <button className="btn-block btn-blue">
                                    {" "}
                                    <span>
                                    {" "}
                                        <span id="checkout">Checkout</span>{" "}
                                        <span id="check-amt">$26.48</span>{" "}
                                </span>{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CheckoutModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" icon={<MoneyCollectTwoTone />} onClick={showModal} shape="circle"/>
            <Modal
                title="Checkout"
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={1000}
            >
                <Checkout/>
            </Modal>
        </>
    );
}

export default CheckoutModal;

