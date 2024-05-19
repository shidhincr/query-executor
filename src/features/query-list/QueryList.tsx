import { Link, useParams } from "react-router-dom";
import { useQueryStore } from "entities/query";
import cx from "classnames";

export const QueryList = () => {
  const { queryId } = useParams();
  const [queries] = useQueryStore((state) => [state.queries]);
  return (
    <div>
      <div className="flex text-xs bg-gray-50 justify-center py-2 text-slate-500">
        Previous Queries
      </div>
      <div className="px-4">
        <ul>
          {queries.map((query) => (
            <Link to={`/query/${query.id}`} key={query.id}>
              <li
                className={cx(
                  "py-2 my-1 flex justify-center hover:bg-indigo-50 text-sm",
                  queryId === query.id ? "border border-indigo-500 " : "",
                )}
              >
                {query.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
