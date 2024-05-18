import { Link } from "react-router-dom";

interface QueryListProps {
  newQuery?: boolean;
}
export const QueryList = ({ newQuery = true }: QueryListProps) => {
  return (
    <div>
      {newQuery && (
        <div className="p-4 border-b flex justify-center">
          <Link to="/" className="text-indigo-500">
            New Query
          </Link>
        </div>
      )}
      <div className="p-4">query list goes here</div>
    </div>
  );
};
