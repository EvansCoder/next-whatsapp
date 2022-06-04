import React from "react";
import Avatar from "react-avatar";
import { ImAttachment } from "react-icons/im";
import { FiMoreVertical } from "react-icons/fi";
import ChatScreen from "./ChatScreen";
import { MdInsertEmoticon, MdMic } from "react-icons/md";

function Chat_container() {
  return (
    <div className="sticky top-0 flex flex-col w-screen h-screen items-center  bg-dark-icons">
      <div className="w-full flex sticky top-0 z-10 items-center justify-between bg-dark-header  mb-4 py-2 px-2">
        <div className="flex">
          <Avatar
            className="cursor-pointer"
            size="40"
            round={true}
            src="https://scontent.fmba3-1.fna.fbcdn.net/v/t1.6435-1/126051899_1081478718969173_4431334387308704236_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vz8Ux2Y0COoAX90BUeu&_nc_ht=scontent.fmba3-1.fna&oh=00_AT-YqFToqcn9XB2Rz4K3unypuf_y25_U8UGGSQMvFn1yxQ&oe=62B4E850"
          />
          <div className="ml-5">
            <p className="text-white ">wangaevans84@gmail.com</p>
            <p className="text-dark-icons text-sm">
              last Active: <span>10:54</span>
            </p>
          </div>
        </div>
        <div className="iconsContainer flex items-center text-dark-icons">
          <ImAttachment size={22} className="mx-5  cursor-pointer" />
          <FiMoreVertical size={22} className="cursor-pointer mr-5" />
        </div>
      </div>
      <div className="absolute bottom-0 px-5 py-1  w-full ">
        <div className="flex items-center  bg-dark-gray py-5 px-5  rounded z-10">
          <MdInsertEmoticon className="text-3xl text-dark-icons" />
          <input
            type="text"
            className="bg-transparent outline-none flex-1 ml-4 text-dark-icons"
            />
          <MdMic className="text-3xl text-dark-icons" />
        </div>
      </div>
            <ChatScreen/>
    </div>
  );
}

export default Chat_container;
