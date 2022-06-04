import Head from "next/head";
import Chat_container from "../../components/Chat_container";
import Sidebar from "../../components/Sidebar";

function Chat() {
  return (
    <div>
      <Head>
        <title>Chat</title>
      </Head>
      <div className="flex ">
      <Sidebar/>
      <Chat_container/>
      </div>
     
    </div>
  );
}

export default Chat;
