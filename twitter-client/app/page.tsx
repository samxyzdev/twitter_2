import Image from "next/image";
import { BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 flex justify-start pt-8">
          <div className="text-4xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
