import { FC, ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <section
      className={`min-h-screen w-full bg-white text-black flex debug-screens
      `}
    >
      {children}
    </section>
  );
};
