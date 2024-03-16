import { cn } from "@/lib/utils";
import { FC } from "react";
import { SideNavBar } from "../organisms";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <section
      className={cn(
        "min-h-screen w-full bg-white text-black flex ",
        import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
      )}
    >
      {/* sidebar */}
      <div className="border-r">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="p-8 w-full">
        <Outlet />
      </div>
    </section>
  );
};
