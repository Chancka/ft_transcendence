import { useState } from "react";
import MessageOther from "./MessageOther";
import MessageYou from "./MessageYou";

function MessageChat() {
  const [messages, setMessages] = useState(["Blabla", "Blabla"]); // need to map messages from server
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message + " submitted"); // send message to server
    setMessage("");
  };

  return (
    <div className="w-full px-5 flex flex-col justify-between">
      <div className="flex flex-col mt-5">
        <MessageYou /> {/* need to map messages from server and to send pic*/}
        <MessageOther /> {/* need to map messages from server */}
      </div>
      <div className="py-5">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            className="w-full bg-gray-300 py-5 px-3 rounded-xl"
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

export default MessageChat;
