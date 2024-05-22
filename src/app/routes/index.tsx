import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/query/:queryId"
        lazy={async () => {
          const { QueryDetails } = await import("pages/query-details");
          return { element: <QueryDetails /> };
        }}
      />
      {/* For all other paths */}
      <Route
        path="*"
        lazy={async () => {
          const { Home } = await import("pages/home");
          return { element: <Home /> };
        }}
      />
    </Route>,
  ),
);

export const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
