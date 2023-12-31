import { useEffect, useState } from "react";
// import MessageOther from "./MessageOther";
import Messages from "./Messages";
// import api from '../api/chat'; !!!!!!!!!
import MyMenu from "./Menu";
import ChangeNameDialog from "./ChangeNameDialog";
import AddSomeoneDialog from "./AddSomeoneDialog";
import ListOfUsersDialog from "./ListOfUsersDialog";
import LeaveChannelDialog from "./LeaveChannelDialog";

function Channel(props: {
  channelId: number;
  messages: any;
  setMessages: any;
  channelName: string;
  setChannelName: any;
}) {
  const [message, setMessage] = useState("");
  const [changeNameDialog, setChangeNameDialog] = useState(false);
  const [addSomeoneDialog, setAddSomeoneDialog] = useState(false);
  const [listOfUsersDialog, setListOfUsersDialog] = useState(false);
  const [leaveChannelDialog, setLeaveChannelDialog] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      // const messages = await api.getMessages(props.channelId);!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const messages = [
        {
          id: 1,
          content: "hello",
        },
        {
          id: 2,
          content: "hi",
        },
      ];
      props.setMessages(messages);
    };
    fetchMessages();
  }, [props.channelId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(message + " submitted"); // send message to server
    // props.setMessages([...props.messages, newMessage]); // send message to database
    // api.postMessage(message, props.channelId, 1); // need to get channelId and authorId from server !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // console.log(messages);
    setMessage("");
  };

  // scroll to bottom of messages
  useEffect(() => {
    const messages = document.getElementById("messages");
    if (messages) {
      messages.scrollTop = messages.scrollHeight;
    }
  }, [props.messages]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex border-b-2 py-4 px-2 justify-between">
        <div className="py-2 px-3 text-lg font-semibold w-3/4">
          <p className="overflow-ellipsis overflow-hidden">
            {props.channelName}
          </p>
        </div>
        <MyMenu
          channelName={props.channelName}
          changeNameDialog={changeNameDialog}
          setChangeNameDialog={setChangeNameDialog}
          addSomeoneDialog={addSomeoneDialog}
          setAddSomeoneDialog={setAddSomeoneDialog}
          listOfUsersDialog={listOfUsersDialog}
          setListOfUsersDialog={setListOfUsersDialog}
          leaveChannelDialog={leaveChannelDialog}
          setLeaveChannelDialog={setLeaveChannelDialog}
        />
        <ChangeNameDialog
          changeNameDialog={changeNameDialog}
          setChangeNameDialog={setChangeNameDialog}
          nameOfChannel={props.channelName}
          setNameOfChannel={props.setChannelName}
        ></ChangeNameDialog>
        <AddSomeoneDialog
          addSomeoneDialog={addSomeoneDialog}
          setAddSomeoneDialog={setAddSomeoneDialog}
        ></AddSomeoneDialog>
        <ListOfUsersDialog
          listOfUsersDialog={listOfUsersDialog}
          setListOfUsersDialog={setListOfUsersDialog}
        ></ListOfUsersDialog>
        <LeaveChannelDialog
          leaveChannelDialog={leaveChannelDialog}
          setLeaveChannelDialog={setLeaveChannelDialog}
        ></LeaveChannelDialog>
      </div>
      <div
        id="messages"
        className="flex-col mt-5 mx-3 h-screen overflow-y-auto overflow-y-scroll no-scrollbar"
      >
        {props.messages.map((message: any) => {
          return (
            <Messages
              message={message.content}
              author={"you"}
              avatar="https://img-02.stickers.cloud/packs/1da1c0da-9330-4d89-9700-8d75b9c62635/webp/af435734-4fe8-4c6f-a37e-1ac423e849b3.webp"
            />
          ); // need author and avatar from server
        })}
      </div>
      <div className="pt-auto pb-3 px-4">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            className="w-full bg-gray-200 py-5 px-3 rounded-xl"
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="type your message here..."
          />
        </form>
      </div>
    </div>
  );
}

export default Channel;
