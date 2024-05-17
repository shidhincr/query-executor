import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {children}
      </ErrorBoundary>
    </BrowserRouter>
  );
};
