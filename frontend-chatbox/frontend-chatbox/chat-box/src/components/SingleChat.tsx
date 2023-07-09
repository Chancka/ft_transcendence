function SingleChat() {
  return (
    <div
      className="flex flex-row py-4 px-2 items-center border-b-2"
      onClick={() => {
        console.log("display chat");
      }}
    >
      <div className="w-1/4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" // image from group chat or other user
          className="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="text-lg font-semibold">
          Name of other user or group chat name
        </div>{" "}
        {/* name of chat */}
        <span className="text-gray-500">Last message from group</span>{" "}
        {/* last message */}
      </div>
    </div>
  );
}

export default SingleChat;
