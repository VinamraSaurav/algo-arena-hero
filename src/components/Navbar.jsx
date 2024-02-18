import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <div className="lg:flex lg:justify-between  lg:p-3 hidden">
    <div className="top-0  w-3/6 flex justify-between items-baseline text-sm">
      <Link href="/" className="text-white font-extrabold flex text-xl ">
        AlgoArena
      </Link>
      <Link
        href="/"
        className="flex items-baseline text-white font-extralight gap-2"
      >
        <Image src="/home_fill.png" alt="AlgoArena" width={18} height={18} />
        Home
      </Link>
      <Link href="/learning-path" className="flex items-baseline text-white font-extralight gap-2">
      <Image src="/lp.png" alt="AlgoArena" width={18} height={18} />
        Learning Path
      </Link>
      <Link
        href="/community"
        className="flex items-baseline text-white font-extralight gap-2"
      >
        <Image src="/community.png" alt="AlgoArena" width={18} height={18} />
        Community
      </Link>
      <Link href="/about-us" className="flex items-baseline text-white font-extralight gap-2">
      <Image src="/about.png" alt="AlgoArena" width={18} height={18} />
        About US
      </Link>
    </div>
    <button className="bg-color-2 text-white pr-5 pl-5 pt-1 pb-1 rounded-xl">Login</button>
    </div>
    
    </>
  );
};

export default Navbar;
