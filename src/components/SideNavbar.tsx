import { IoReorderThreeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegLightbulb, FaLaptopCode } from "react-icons/fa";

export default function SideNavbar() {
  return (
    <div className="group w-[60px] hover:w-[140px] transition-all duration-300 bg-[#191923] flex flex-col outline-1 outline-white rounded-xl sticky left-10 z-50 top-2/5 overflow-hidden">

      <div className="flex flex-col justify-start items-start text-white text-[16px] py-4 w-full px-3">

        <div className="border-b-1 border-white w-full flex justify-center mb-4">
          <IoReorderThreeOutline className="size-6" />
        </div>

        <div className="flex flex-col gap-3 w-full font-semibold">
          <a href="#about" className="flex items-center gap-3 hover:text-[#854CE6] hover:bg-[#1C1C27] hover:outline-1 hover:outline-black outline-transparent rounded-md transition-colors duration-200 p-2 cursor-hover">
            <CgProfile className="size-5 min-w-[20px]" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              About
            </span>
          </a>

          <a href="#skills" className="flex items-center gap-3 hover:text-[#854CE6] hover:bg-[#1C1C27] hover:outline-1 hover:outline-black outline-transparent rounded-md transition-colors duration-200 p-2 cursor-hover">
            <FaRegLightbulb className="size-5 min-w-[20px]" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Skills
            </span>
          </a>

          <a href="#projects" className="flex items-center gap-3 hover:text-[#854CE6] hover:bg-[#1C1C27] hover:outline-1 hover:outline-black outline-transparent rounded-md transition-colors duration-200 p-2 cursor-hover">
            <FaLaptopCode className="size-5 min-w-[20px]" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Projects
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
