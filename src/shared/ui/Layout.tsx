interface LayoutProps {
  sidebar: JSX.Element;
  content: JSX.Element;
}

export const Layout = ({ sidebar, content }: LayoutProps) => (
  <div className="grid grid-cols-[200px,1fr] grid-rows-[60px,1fr] h-full">
    {/* header */}
    <div className="col-span-2 p-4 shadow-gray-200 shadow-sm">
      This is the header
    </div>
    {/* sidebar */}
    <div className="p-4 border-r">{sidebar}</div>
    {/* main */}
    <div className="p-4">{content}</div>
  </div>
);
