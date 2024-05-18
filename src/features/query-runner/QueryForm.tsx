import { Link } from "react-router-dom";

export const QueryForm = () => {
  return (
    <>
      <div className="border-b bg-gray-100 p-4">text area goes here</div>
      <div className="border-b flex justify-end items-center px-4">
        <span>
          <Link to="/query/1" className="text-indigo-500">
            Run
          </Link>
        </span>
      </div>
    </>
  );
};
