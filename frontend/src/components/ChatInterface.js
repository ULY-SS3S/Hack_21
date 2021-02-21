import React from "react";
import {
    Chat,
    Channel,
    ChannelHeader,
    Thread,
    Window,
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hpbnktZGV3LTMiLCJleHAiOjE2MTM4ODAxMjl9.ud3aaSeS83d0lsiRV8rnvPr9M7JgG_A7k-1UG2NpsQE";

chatClient.connectUser(
    {
        id: "shiny-dew-3",
        name: "shiny",
        image: "https://getstream.io/random_png/?id=shiny-dew-3&name=shiny",
    },
    userToken
);

const channel = chatClient.channel("messaging", "godevs", {
    // add as many custom fields as you'd like
    image:
        "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
    name: "Talk about Go",
});

const ChatInterface = () => (
    <Chat client={chatClient} theme="messaging light">
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
);

export default ChatInterface;
