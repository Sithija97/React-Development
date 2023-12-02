import { Card } from "./card";
import Slider from "react-slick";
import { courses } from "../data/cources";

export const Courses = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className="w-full bg-[#E9F8F3B2] py-32">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto  px-4 md:px-0">
        <h1 className="py-3 text-3xl font-bold text-[#21212F]">
          Most Popular <span className="text-[#20B486]">Courses</span>
        </h1>
        <p className="text-[#6D737A]">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <Slider {...settings}>
          {courses.map((course) => (
            <Card course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
