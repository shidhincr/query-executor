import { ReactNode } from "react";

export const QueryContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-rows-[300px,50px,1fr] h-full">{children}</div>
  );
};
