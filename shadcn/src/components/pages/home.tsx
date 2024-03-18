import { cardData } from "@/data";
import { Card, CardContent } from "../ui/card";
import { Title } from "../ui/title";
import { BarChart } from "../ui/barchart";

export const Home = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Title title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            amount={data.amount}
            description={data.description}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        {/* <CardContent>
          <p className="p-4 font-semibold">Recent Sales</p>
        </CardContent> */}
      </section>
    </div>
  );
};
