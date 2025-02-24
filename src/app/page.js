import { Search } from "@/components/Search";
export default function Home() {
  return (
    <div className="flex">
      <div className="bg-[#ecedef] w-1/2 h-screen ">
        <div className="p-[40px]">
          <Search />
        </div>
      </div>
      <div className="bg-[#0f141e] w-1/2 h-screen"></div>
    </div>
  );
}
