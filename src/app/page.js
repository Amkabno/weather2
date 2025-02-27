import { LeftLogo } from "@/components/LeftLogo";
import { RightLogo } from "@/components/RightLogo";
import { Search } from "@/components/Search";
import { Day } from "@/components/Day";
import { Night } from "@/components/Night";
export default function Home() {
  return (
    <div className="flex ">
      <div className="bg-[#ecedef] w-1/2 h-screen rounded-l-[50px] ">
        <span className="p-[40px]">
          <Search />
        </span>
        <div className="flex justify-between">
          <div className="flex-1"></div>
          <div className="flex-none py-[10px] ">
            <Day />
          </div>
          <div className="flex flex-1 items-center justify-end  ">
            <LeftLogo className="flex-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 ">
        <div className=" flex bg-[#0F141E]  h-[calc(50vh-75px)] rounded-tr-[50px] rounded-bl-[16.5px] justify-center py-[180px]  ">
          <Night className="z-[3] " />
        </div>
        <div className="bg-[#0F141E]  h-[150px]  flex z-[-1]">
          <div className="bg-[#ecedef] rounded-r-full w-[85px] flex justify-center items-center">
            <RightLogo />
          </div>
        </div>
        <div className=" z-[-1] bg-[#0F141E]  h-[calc(50vh-75px)] rounded-br-[50px] rounded-tl-[16.5px] rounded-bl-[50px] flex"></div>
      </div>
    </div>
  );
}
