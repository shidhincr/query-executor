import { Link, useParams } from "react-router-dom";
import { useQueryStore } from "entities/query";
import cx from "classnames";

export const QueryList = () => {
  const { queryId } = useParams();
  const [queries] = useQueryStore((state) => [state.queries]);
  return (
    <div>
      <div className="flex text-xs bg-gray-50 justify-start p-2 text-slate-500 border-y">
        Previous Queries
      </div>
      <div className="">
        <ul>
          {queries.map((query) => (
            <Link to={`/query/${query.id}`} key={query.id}>
              <li
                title={query.query}
                className={cx(
                  "py-2 px-4 flex justify-start hover:bg-indigo-50 text-sm text-gray-500 whitespace-nowrap",
                  queryId === query.id
                    ? "text-white bg-indigo-500/50 hover:bg-indigo-500/50"
                    : "",
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
