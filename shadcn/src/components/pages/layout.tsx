import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import { SideNavBar } from "../organisms";

type IProps = {
  children: ReactNode;
};

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <section
      className={cn(
        "min-h-screen w-full bg-white text-black flex ",
        import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
      )}
    >
      {/* sidebar */}
      <div className="border">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="p-8 w-full">{children}</div>
    </section>
  );
};
