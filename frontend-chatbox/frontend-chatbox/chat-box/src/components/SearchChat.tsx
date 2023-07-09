import { useState } from "react";

function SearchChat() {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="border-b-2 py-4 px-2">
      <input
        type="text"
        placeholder="Search Chat"
        value={search}
        onChange={handleChange} // find how to change the display of SingleChat.tsx
        className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
      />
    </div>
  );
}

export default SearchChat;
