import { Suspense } from "react";
import { Route, Routes as BaseRoutes } from "react-router-dom";
import { Home } from "pages/home";
import { QueryDetails } from "pages/query-details";

export const Routes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BaseRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/query/:id" element={<QueryDetails />} />
      </BaseRoutes>
    </Suspense>
  );
};
