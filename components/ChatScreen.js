import React from "react";

function ChatScreen() {
  return (
    <div className="w-full ">
      <div className="flex justify-start flex-wrap ">
        <div className="mx-10  bg-white min-w-44 py-2 rounded-full my-5 h-fit">
          <h1 className="px-2">How are you?</h1>
        </div>
      </div>
      <div className="flex justify-end flex-wrap ">
        <div className=" mx-10 bg-gray-200 min-w-44 py-2 rounded-full h-fit">
          <h1 className="px-2">Am good en you?</h1>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
