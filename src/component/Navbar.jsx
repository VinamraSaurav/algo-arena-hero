"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const onClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="lg:flex lg:justify-between  lg:p-6 hidden">
        <div className="top-0  w-3/6 flex justify-between items-baseline text-sm">
          <Link
            href="/"
            className="text-[white] font-extrabold flex text-xl p-0 m-0  "
          >
            AlgoArena
          </Link>
          <Link
            href="/"
            className="flex justify-center text-[white] font-extralight gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-[transparent] "
          >
            <Image src="/lp.png" alt="AlgoArena" width={18} height={18} />
            HOME
          </Link>
          <Link
            href="/learning-path"
            className="flex justify-center text-[white] font-extralight gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-[transparent] "
          >
            <Image src="/lp.png" alt="AlgoArena" width={18} height={18} />
            Learning Path
          </Link>
          <Link
            href="/community"
            className="flex  justify-center text-[white] font-extralight gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-[transparent] "
          >
            <Image
              src="/community.png"
              alt="AlgoArena"
              width={18}
              height={18}
            />
            Community
          </Link>
          <Link
            href="/about-us"
            className="flex justify-center text-[white] font-extralight gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-[transparent] "
          >
            <Image src="/about.png" alt="AlgoArena" width={18} height={18} />
            About US
          </Link>
        </div>
        <button className="bg-color-2 text-[white] pr-5 pl-5 pt-1 pb-1 rounded-xl hover:bg-gradient-to-r from-color-2 to-color-3 transition duration-500">
          Login
        </button>
      </div>
      <div className="flex justify-between p-6  w-screen lg:hidden ">
        <Image
          src="/menu.svg"
          alt="Ellipse"
          height={20}
          width={20}
          className="text-[white]"
          onClick={onClick}
        />
        <Link href="/" className="text-[white] font-extrabold flex text-xl ">
          AlgoArena
        </Link>
      </div>
      <div
        className={`fixed top-0 left-0 w-3/5 h-full  lg:hidden bg-[white] bg-opacity-25 text-transparent backdrop-blur-sm border-white border-opacity-25 border transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          src="/close.svg"
          alt="Close"
          width={20}
          height={20}
          onClick={onClose}
          className="absolute top-0 right-0 m-4"
        />

        <div className="mt-40 ">
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            className="flex  text-[white] font-extralight gap-2 px-4 py-2 text-gray-800 hover:bg-color-3"
          >
            <Image
              src="/home_fill.png"
              alt="AlgoArena"
              width={20}
              height={10}
            />
            Home
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            className="flex  text-[white] font-extralight gap-2 px-4 py-2 text-gray-800 hover:bg-color-3"
          >
            <Image src="/lp.png" alt="AlgoArena" width={20} height={10} />
            Learning Path
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/about-us"
            className="flex  text-[white] font-extralight gap-2 px-4 py-2 text-gray-800 hover:bg-color-3"
          >
            <Image
              src="/community.png"
              alt="AlgoArena"
              width={20}
              height={10}
            />
            Community
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/about-us"
            className="flex  text-[white] font-extralight gap-2 px-4 py-2 text-gray-800 hover:bg-color-3"
          >
            <Image src="/about.png" alt="AlgoArena" width={20} height={10} />
            About US
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <button className="bg-color-2 text-[white] pr-5 pl-5 pt-1 pb-1 ml-5 rounded-md hover:bg-color-4">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
