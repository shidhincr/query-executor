import { Link } from "react-router-dom";
import { Layout } from "shared/ui/Layout";

export const Home = () => {
  return (
    <Layout
      sidebar={<div>This is the sidebar</div>}
      content={
        <div>
          <h1>Hello, World!</h1>
          <p>This is the home apge</p>
          <span className="underline">
            <Link to="/query/1">Go to Query Details</Link>
          </span>
        </div>
      }
    />
  );
};
