import { ReactNode } from "react";

export const QueryContainer = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-rows-[200px,50px,1fr]">{children}</div>;
};
