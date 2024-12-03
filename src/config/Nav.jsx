import React from "react";
import { BiSolidContact } from "react-icons/bi";

function Nav() {
  return (
    <div className=" flex h-[50px] items-center justify-center rounded bg-slate-300">
      <div className="flex items-center gap-2 text-2xl font-bold">
        {/* <img src="/logos_firebase.svg" alt="Logo" /> */}
        <BiSolidContact className="text-fuchsia-800"/>
        <h1>Contact App</h1>
      </div>
    </div>
  );
}

export default Nav;
