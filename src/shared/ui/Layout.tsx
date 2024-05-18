import { ReactNode } from "react";

interface LayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export const Layout = ({ sidebar, content }: LayoutProps) => (
  <div className="grid grid-cols-[200px,1fr] grid-rows-[60px,1fr] h-full">
    {/* header */}
    <div className="col-span-2 p-4 shadow-gray-200 shadow-sm font-bold uppercase text-indigo-500 text-xl justify-center flex">
      SQL Runner
    </div>
    {/* sidebar */}
    <div className="border-r">{sidebar}</div>
    {/* main */}
    <div className="">{content}</div>
  </div>
);
