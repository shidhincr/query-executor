import { Suspense, type ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "shared/ui/loader";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
