import { heroImg } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

export const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2 px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#20B486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            Access To <span className="text-[#20B486]">5000+</span> Courses from{" "}
            <span className="text-[#20B486]">300</span> Instructors &
            Institutions
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <form className="p-4 shadow-lg rounded-md flex justify-between input-box-shadow">
            <input
              type="text"
              className="bg-white"
              placeholder="What do want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ coloe: "#000" }}
              />
            </button>
          </form>
        </div>
        <img className="md:order-last order-first" src={heroImg} />
      </div>
    </div>
  );
};
