import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is the home apge</p>
      <Link to="/query/1">Go to Query Details</Link>
    </div>
  );
};
