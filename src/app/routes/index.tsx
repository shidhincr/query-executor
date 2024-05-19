import { Suspense } from "react";
import { Route, Routes as BaseRoutes } from "react-router-dom";
import { Home } from "pages/home";
import { QueryDetails } from "pages/query-details";

export const Routes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BaseRoutes>
        <Route path="/query/:queryId" element={<QueryDetails />} />
        {/* For all other paths */}
        <Route path="*" element={<Home />} />
      </BaseRoutes>
    </Suspense>
  );
};
