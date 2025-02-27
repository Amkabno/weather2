import React from "react";
import { IoMdSearch } from "react-icons/io";

export const Search = () => {
  return (
    <div className="relative p-[30px]  ">
      <span className="absolute left-11 top-1/2 transform -translate-y-1/2">
        <IoMdSearch className="fill-[#cccccc] size-[30px]" />
      </span>

      <input
        placeholder="Search"
        className=" pl-12   placeholder:text-[#cccccc] px-[60px] py-[15px] bg-white border border-none text-[21px] min-w-[500px] rounded-full outline-none shadow-md "
      />
    </div>
  );
};
