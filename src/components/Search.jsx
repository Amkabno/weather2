import React from "react";
import { IoMdSearch } from "react-icons/io";

export const Search = () => {
  return (
    <div className="relative px-[24px] py-[12] w-[450px] ">
      <IoMdSearch className="absolute" />
      <input
        placeholder="Search"
        className="  w-object-contain h-object-contain bg-white border border-none  text-[32px]  rounded-full outline-none shadow-md"
      />
    </div>
  );
};
