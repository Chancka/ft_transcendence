import Channel from "../components/Channel";
import SearchChat from "../components/SearchChat";
import ChatTab from "../components/ChatTab";
import { useEffect, useState } from "react";
import ChatTabAdd from "../components/ChatTabAdd";
// import api from '../api/chat'; !!!!!!!!!!!!!!
// import { Socket, io } from 'socket.io-client'; !!!!!!!!!!!!

function ChatPage() {
  const [channels, setChannels] = useState<any>([
    {
      id: 1,
      name: "general",
    },
  ]); // need to map channels from server
  const [currentChannel, setCurrentChannel] = useState(1);
  const [messages, setMessages] = useState<any>([]);
  // const [socket, setSocket] = useState<Socket | undefined>(); !!!!!!!!!!!!!!!!!!!!
  const [channelName, setChannelName] = useState("");

  useEffect(() => {
    // const fetchChannels = async () => {
    //   // const channels = await api.getChannels(1);
    // };
    // fetchChannels();
    const channels = [
      {
        id: 1,
        name: "general",
      },
      {
        id: 2,
        name: "random",
      },
      {
        id: 3,
        name: "other",
      },
    ];
    setChannels(channels);
    console.log(channels);
  }, []);

  const handleIncomingMessage = (message: any) => {
    if (message.channelId === currentChannel) {
      setMessages([...messages, message]);
    }
  };

  useEffect(() => {
    const channelName = channels.find(
      (channel: { id: number }) => channel.id === currentChannel
    ).name;
    setChannelName(channelName);
    //   setSocket(io("/chat"));
    //   if (!socket) return;
    //   let newSocket = socket;
    //   newSocket.on("connect", () => {
    //     for (const channel of channels) {
    //       newSocket.emit("join", channel.id);
    //     }
    //   });
    //   setSocket(newSocket);
    //   return () => {
    //     socket.disconnect();
    //     setSocket(undefined);
    //   };
  }, [channels, currentChannel]);

  // useEffect(() => {
  //   if (!socket) return;
  //   let newSocket = socket;
  //   newSocket.on("message", handleIncomingMessage);
  //   setSocket(newSocket);
  //   return () => {
  //     let newSocket = socket;
  //     newSocket.off("message", handleIncomingMessage);
  //     setSocket(newSocket);
  //   };
  // }, [socket, currentChannel, messages, handleIncomingMessage]); !!!!!!!!
  const [search, setSearch] = useState("");

  const filteredTabs = channels.filter((tab: any) => {
    return tab.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto no-scrollbar">
          <SearchChat search={search} setSearch={setSearch} />
          {filteredTabs.map((tab: any) => {
            return (
              <ChatTab
                name={tab.name}
                lastMessage={"last message"}
                avatar="https://img-02.stickers.cloud/packs/1da1c0da-9330-4d89-9700-8d75b9c62635/webp/65bb0543-f220-456a-ad64-2ae40431ec03.webp"
                id={tab.id}
                setCurrentChannel={setCurrentChannel}
              />
            );
          })}
          <ChatTabAdd channels={channels} setChannels={setChannels} />
        </div>
        <Channel
          channelId={currentChannel}
          messages={messages}
          setMessages={setMessages}
          channelName={channelName}
          setChannelName={setChannelName}
        />
      </div>
    </>
  );
}

export default ChatPage;
