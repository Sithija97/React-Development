import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";
export const Companies = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto">
        <h1 className="text-center text-2xl font-bold text-[#536E96]">
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className="text-center text-xl font-bold text-[#536E96]">
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
        <div className="flex justify-center py-8 md:gap-8">
          <img src={companyLogo1} />
          <img src={companyLogo2} />
          <img src={companyLogo3} />
          <img src={companyLogo4} />
        </div>
      </div>
    </div>
  );
};
