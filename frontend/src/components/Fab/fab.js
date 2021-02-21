import {Action, Fab} from "react-tiny-fab";
import {EditFilled, UserOutlined} from "@ant-design/icons";
import {Badge} from "antd";
import React from "react";
import ShoppingCartAction from "./shoppingCart";
import {useHistory} from "react-router";
import {UserMsg} from "./UserMsg";

export const FabNavBar = (props) => {
    let actionButtonStyles = props.actionButtonStyles;
    const history = useHistory();
    return (
        <Fab
            mainButtonStyles={actionButtonStyles}
            style={{
                top: 0,
                right: 0,
            }}
            icon="+"
            event="click"
            alwaysShowTitle={true}
        >
            <UserMsg actionButtonStyles={actionButtonStyles} text="User"/>

            <ShoppingCartAction actionButtonStyles={actionButtonStyles} text="Cart"/>

            <Action style={actionButtonStyles} text="Search" onClick={() => alert('No search...')}>
                🔍
            </Action>

            <Action
                style={actionButtonStyles}
                text="Notifications"
                onClick={() => alert('Here is your notification.')}
            >
                <Badge
                    count={9}
                    size="default"
                    offset={[4, 0]}
                >
                    <a href="#" className="head-example" />
                    🔔
                </Badge>
            </Action>
            <Action style={actionButtonStyles}
                    text="Add product"
                    onClick={() => {
                        history.push("/create/product");
                    }}>
                <EditFilled />
            </Action>
        </Fab>
    )
}
