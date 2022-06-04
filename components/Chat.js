import React from "react";
import Avatar from "react-avatar";
import {useRouter} from "next/router"

function Chat({users,id}) {
  const router=useRouter()
  const enterChat=()=>{
    router.push(`/chat/${id}`)
  }
  return (
    <div onClick={enterChat} className=" pt-4  cursor-pointer px-4 hover:bg-dark-gray">
        <div  className="flex">
      <Avatar
        size="50"
        round={true}
        src="https://scontent.fmba3-1.fna.fbcdn.net/v/t1.6435-1/126051899_1081478718969173_4431334387308704236_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vz8Ux2Y0COoAX90BUeu&_nc_ht=scontent.fmba3-1.fna&oh=00_AT-YqFToqcn9XB2Rz4K3unypuf_y25_U8UGGSQMvFn1yxQ&oe=62B4E850"
      />
      <div className="flex border-b-1.5 border-active-light ml-4  ">
      <div  className="text-light-gray w-80 pb-2">
          <div className="number">+254 706 244 456</div>
          <p  className="recent_msg text-base">How are you?</p>
      </div>
      <p className="text-dark-icons">10:54</p>
      </div>
      </div>
    </div>
  );
}

export default Chat;
