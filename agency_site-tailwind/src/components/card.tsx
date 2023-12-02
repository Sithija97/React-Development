import { Rating } from "./rating";

export interface ICourse {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: string;
  linkImg: string;
}
interface IProps {
  course: ICourse;
}

export const Card = ({ course }: IProps) => {
  return (
    <div className="bg-white drop-shadow-md rounded-2xl md:mr-4 mr-2 my-4">
      <img
        src={course.linkImg}
        className="h-40 w-full object-cover overflow-hidden rounded-2xl"
      />
      <div className="p-5 border border-b">
        <h1 className="py-2">{course.title}</h1>
        <Rating rating={course.rating} />
      </div>
      <h3 className="p-5 text-xl">{course.price}</h3>
      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
        {course.category}
      </div>
    </div>
  );
};
