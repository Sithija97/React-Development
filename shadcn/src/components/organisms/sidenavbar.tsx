import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { NavBar } from "../ui/navbar";
import { useState } from "react";
import { Button } from "../ui/button";
import { ORDERS, ROOT, SETTINGS, USERS } from "@/routes";
import { useWindowWidth } from "@react-hook/window-size";

export const SideNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <div className="relative min-w-[80px] px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <NavBar
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: ROOT,
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: USERS,
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Ordrs",
            href: ORDERS,
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: SETTINGS,
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};
