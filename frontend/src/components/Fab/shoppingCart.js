import {Drawer, List, Button, Row, Col} from "antd";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../Auth/UserAuthProvider";
import {Action} from "react-tiny-fab";
import {PayCircleOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import CheckoutModal from "./Checkout";


const ShoppingCartDrawer = (cart) => {
    return (
        <>
        <List
            dataSource={cart}
            bordered
            itemLayout="horizontal"
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        description={item.description}
                        title={item.title}
                    />
                    <div>${item.price}</div>
                </List.Item>
            )}
        />
        <CheckoutModal/>
        </>
    );
};


const ShoppingCartAction = (props) => {
    const [visible, setVisible] = useState(false);
    const authContext = useContext(AuthContext);

    const showDrawer = () => {
        setVisible((visible) => !visible);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <Action
            style={props.actionButtonStyles}
            text="Shopping Cart"
            onClick={showDrawer}
        >
            <ShoppingCartOutlined />
            <Drawer
                width={640}
                placement="left"
                closable={false}
                maskClosable={false}
                onClose={onClose}
                visible={visible}
            >
                {ShoppingCartDrawer(authContext.cart)}
            </Drawer>
        </Action>

    );

}

export default ShoppingCartAction;
