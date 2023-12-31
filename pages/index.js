import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FidgetSpinner } from "react-loader-spinner";

export default function Home() {

  const {data:session}=useSession()
  console.log('session',session)

  return  <Layout>
  <div className="flex justify-between p-2 text-blue-900">
   <h1>Hello! Mr. {session?.user?.name}</h1>
   <div className="flex bg-gray-400 p-1 items-center gap-2 text-black">
     <img src={session?.user?.image} alt="" className="w-8 h-8 rounded-full"/>
     <span>{session?.user?.name}</span>
   </div>
  </div>
 </Layout>

  // if(session){
  //   return  <Layout>
  //   <div className="flex justify-between p-2 text-blue-900">
  //    <h1>Hello! Mr. {session?.user?.name}</h1>
  //    <div className="flex bg-gray-400 p-1 items-center gap-2 text-black">
  //      <img src={session?.user?.image} alt="" className="w-8 h-8 rounded-full"/>
  //      <span>{session?.user?.name}</span>
  //    </div>
  //   </div>
  //  </Layout>
  // }
  // else{
  //   return <div className="flex justify-center items-center h-full absolute left-[50%]">
  //     <FidgetSpinner
  //   visible={true}
  //   height="80"
  //   width="80"
  //   ariaLabel="dna-loading"
  //   wrapperStyle={{}}
  //   wrapperClass="dna-wrapper"
  //   ballColors={['blue', 'green', 'black']}
  //   backgroundColor="black"
  // />
  //   </div>
  // }
  

  
}
