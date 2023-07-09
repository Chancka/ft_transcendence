import MessageChat from "../components/MessageChat";
import SearchChat from "../components/SearchChat";
import SingleChat from "../components/SingleChat";
import "../style/ChatPage.css";

function ChatPage() {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          <SearchChat />
          <SingleChat />{" "}
          {/* need a AllChat to display all the chats possible */}
          <SingleChat />
          <SingleChat />
          <SingleChat />
        </div>
        <MessageChat />
      </div>
    </>
  );
}

export default ChatPage;
