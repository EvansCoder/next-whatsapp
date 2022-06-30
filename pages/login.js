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
          width="100px"
          height="100px"
        />
      <button className='border flex items-center px-5 py-2 mt-16 bg-white rounded hover:border-blue-300 cursor-pointer' onClick={signIn}><Image src="https://cdn-teams-slug.flaticon.com/google.jpg" width={50} height={50}/><span>Sign in with Google</span></button>

      </div>
    </div>
  );
}

export default login;
