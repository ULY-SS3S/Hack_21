import {Action, Fab} from "react-tiny-fab";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import {BASE_API} from "../../env";
import {notification} from "antd";

export const UserMsg = (props) => {
    function clickUser(){
        fetch(BASE_API + "/user/getUser?id=1", {method: "GET"} )
            .then(resp => resp.json())
            .then(data => {
                let join_date = Date.parse(data.joinDate);
                let today = Date.now();
                let diff_time_in_days = Math.floor((today - join_date)/(24 * 1000 * 3600));

                notification.info({
                    message: `Hello ${data.username}!`,
                    description: `You have been joining us for ${diff_time_in_days} days!`,
                    placement: "topLeft"
                })
                console.log(data);
            })
    }

    return(
        <Action
            style={props.actionButtonStyles}
            text="User"
            onClick={clickUser}
        >
            <UserOutlined />
        </Action>

    )
}