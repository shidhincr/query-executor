import { Link } from "react-router-dom";
import { Layout } from "shared/ui/Layout";

export const QueryDetails = () => {
  return (
    <Layout
      sidebar={<div>This is the sidebar</div>}
      content={
        <div>
          <h1>Hello, Query Page!</h1>
          <p>This is the Query details apge</p>
          <span className="underline">
            <Link to="/">Go to Home</Link>
          </span>
        </div>
      }
    />
  );
};
