import Head from "next/head";
import Image from "next/image";
import logo from "/public/whatsapp-icon-seeklogo.com.svg";
import { auth, provider } from "../firebase";
import { signInWithPopup} from 'firebase/auth';

function login() {
  const signIn = () => {
    signInWithPopup (auth,provider).catch(alert);
  };
  return (
    <div className="h-screen w-screen grid place-items-center  bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col">
        <Image
          src={logo}
          alt="Whatsapp image"
          width="200px"
          height="200px"
          className="mb-12"
        />
        <button
          onClick={signIn}
          className="border-2 p-4 uppercase rounded mt-8 bg-white"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default login;
