import { cn } from "@/lib/utils";
import { FC } from "react";

type IProps = {
  title: string;
  className?: string;
};

export const Title: FC<IProps> = ({ title, className }) => {
  return <h1 className={cn("font-semibold text-2xl", className)}>{title}</h1>;
};
