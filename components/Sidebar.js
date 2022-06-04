import React from "react";
import Avatar from "react-avatar";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
import * as EmailValidator from "email-validator";
import Chat from "./Chat";

function Sidebar() {
  // const createChat = () => {
  //   const input = prompt(
  //     "Please enter the email of the person you want to chat with"
  //   );
  //   if (!input) return null;

  //   if (EmailValidator.validate(input)) {
  //     return <div className="text-white">{input}</div>;
  //   }
  // 
  // };
  return (
    <div className="flex-initial  w-90 bg-dark-left border-r-1.5 border-dark-gray  select-none">
      <div className="header flex sticky top-0 z-10 items-center justify-between bg-dark-header  mb-4 py-2 px-2">
        <Avatar
        className="cursor-pointer"
          size="43.3"
          round={true}
          src="https://scontent.fmba3-1.fna.fbcdn.net/v/t1.6435-1/126051899_1081478718969173_4431334387308704236_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vz8Ux2Y0COoAX90BUeu&_nc_ht=scontent.fmba3-1.fna&oh=00_AT-YqFToqcn9XB2Rz4K3unypuf_y25_U8UGGSQMvFn1yxQ&oe=62B4E850"
        />
        <div className="iconsContainer flex items-center">
          <svg
            version="1.1"
            id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-dark-icons cursor-pointer"
          >
            <path
              fill="currentColor"
              d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
            ></path>
            <path
              fill="#009588"
              d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
            ></path>
          </svg>
          <BsChatLeftTextFill size={22} className="mx-5 text-dark-icons cursor-pointer" />
          <FiMoreVertical size={22} className="text-dark-icons cursor-pointer mr-5" />
        </div>
      </div>
      <div className="search flex items-center rounded mx-2 mb-2 py-2 bg-dark-header hover:bg-dark-gray">
        <FiSearch className="ml-2 text-dark-icons" />
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="ml-1 flex-1 outline-none bg-transparent text-dark-icons"
        />
      </div>
      {/* <button
        onClick={createChat}
        className="w-full  flex justify-center items-center py-2 my-4 uppercase bg-gray-100 hover:bg-gray-300"
      >
        start a new chat
      </button> */}
      <Chat/>
      
    
    </div>
  );
}

export default Sidebar;
