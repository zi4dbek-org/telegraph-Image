"use client";
import { ToastContainer } from "react-toastify";

import Footer from '@/components/Footer'
import Link from "next/link";
import ImageBox from "@/components/ImageBox";

export default function Home() {




  return (
    <div className=" overflow-auto h-full flex w-full min-h-screen flex-col items-center justify-between">
      <header className="fixed top-0 h-[50px] left-0 w-full border-b bg-white flex z-50 justify-center items-center">
        <nav className="flex justify-between items-center w-full max-w-4xl px-4">图床</nav>

        <Link href="/admin"><button className="px-4 py-2 mx-2 w-28  sm:w-28 md:w-20 lg:w-16 xl:w-16  2xl:w-20 bg-blue-500 text-white rounded ">管理</button></Link>
      </header>
      <main className="flex flex-col items-center justify-center w-full h-full">
        <ImageBox/>
      </main>
      <div className="fixed inset-x-0 bottom-0 h-[50px] bg-slate-200  w-full  flex  z-50 justify-center items-center ">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}
