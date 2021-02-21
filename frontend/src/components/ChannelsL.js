import React from "react";
import { Chat, Channel, ChannelList, Window } from "stream-chat-react";
import { ChannelHeader, MessageList } from "stream-chat-react";
import { MessageInput, Thread } from "stream-chat-react";
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

const filters = { type: "messaging", members: { $in: ["shiny-dew-3"] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const ChannelsL = () => (
    <Chat client={chatClient} theme="messaging light">
        <ChannelList filters={filters} sort={sort} />
        <Channel>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
);

export default ChannelsL;
