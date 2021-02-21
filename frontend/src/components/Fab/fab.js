import {Action, Fab} from "react-tiny-fab";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {Badge} from "antd";
import React from "react";

export default function fab(actionButtonStyles){
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
            <Action
                style={actionButtonStyles}
                text="User"
                onClick={e => {
                    alert('I printed the event to the console.');
                    console.log(e);
                }}
            >
                <UserOutlined />
            </Action>
            <Action
                style={actionButtonStyles}
                text="Shopping Cart"
                onClick={() => alert('Here is your notification.')}
            >
                <ShoppingCartOutlined />
            </Action>
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
        </Fab>
    )
}
