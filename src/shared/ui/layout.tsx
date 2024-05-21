import { ReactNode } from "react";

interface LayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export const Layout = ({ sidebar, content }: LayoutProps) => (
  <div className="grid grid-cols-[200px,1fr] grid-rows-[60px,1fr] h-screen">
    {/* header */}
    <div className="col-span-2 p-4 shadow-gray-200 shadow-md font-bold uppercase text-xl justify-center flex bg-gradient-to-t from-white via-gray-100 to-gray-200">
      <span className="bg-gradient-to-r text-transparent from-pink-600 to-indigo-400 bg-clip-text">
        SQL Runner
      </span>
    </div>
    {/* sidebar */}
    <div className="border-r">{sidebar}</div>
    {/* main */}
    <div className="">{content}</div>
  </div>
);
