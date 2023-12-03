import { achievement } from "../assets";
import { PiGraduationCapLight } from "react-icons/pi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";

export const Achivements = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2 px-4 md:px-0">
        <div className="flex flex-col justify-start">
          <h1 className="leading-[72px] text-3xl font-semibold">
            Our <span className="text-[#20B486]">Achievements</span>
          </h1>
          <p className="text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <div className="grid grid-cols-2 py-16">
            <div className="py-6 flex">
              <div className="p-4 bg-[#E9F8F3] rounded-xl">
                <PiGraduationCapLight size={30} style={{ color: "#1A906B" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">300</h1>
                <p className="text-gray-600">Instructor</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFFAF5] rounded-xl">
                <AiOutlineVideoCamera size={30} style={{ color: "#FFC27A" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10 000+</h1>
                <p className="text-gray-600">Video</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFEEF0] rounded-xl">
                <PiGraduationCapLight size={30} style={{ color: "#ED4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">20,000+</h1>
                <p className="text-gray-600">Students</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#F0F7FF] rounded-xl">
                <SlPeople size={30} style={{ color: "#0075FD" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1,00,000+</h1>
                <p className="text-gray-600">Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:order-last order-first">
          <img src={achievement} />
        </div>
      </div>
    </div>
  );
};
