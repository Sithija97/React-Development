import { blogImg1 } from "../assets";
import { Rating } from "./rating";

export const Card = () => {
  return (
    <div className="bg-white drop-shadow-md rounded-2xl md:mr-4 mr-2 my-4">
      <img
        src={blogImg1}
        className="h-40 w-full object-cover overflow-hidden rounded-2xl"
      />
      <div className="p-5 border border-b">
        <h1 className="py-2">programing concepts</h1>
        <Rating rating={3} />
      </div>
      <h3 className="p-5 text-xl">$500</h3>
      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
        HTML
      </div>
    </div>
  );
};
