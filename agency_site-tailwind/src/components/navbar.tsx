import { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] w-full h-full m-auto md:px-2 px-4 flex justify-between items-center">
        <img src={logo} className="h-[25px]" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 py-4 gap-2 rounded-md  ">
            <img src={lock} />
            Login
          </button>
          <button className="px-8 py-4 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up for Free
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle ? "absolute w-full z-10 p-4 bg-white px-8 md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="flex justify-center border border-[#20B486] items-center bg-transparent px-6 py-4 gap-2 rounded-md  ">
              <img src={lock} />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
              Sign Up for Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
