import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import RightComponent from '../components/RightComponent'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Whatsapp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
      <Sidebar />
      <RightComponent/>
      </div>
    </div>
  )
}