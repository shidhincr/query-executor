import { useCallback, useEffect, useState } from "react";
import { useQueryStore } from "entities/query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "shared/ui/button";
import { Loader } from "shared/ui/loader";

interface QueryFormProps {
  newQuery?: boolean;
}

const TEXT_AREA_PLACEHOLDER = `Enter your query here 

Example: 
SELECT * FROM table_name;

Then press the "Run" button below to execute the query.
`;

export const QueryForm = ({ newQuery = true }: QueryFormProps) => {
  const { queryId } = useParams();
  const navigate = useNavigate();
  const [queries, isLoading, executeQueryAndUpdate] = useQueryStore((state) => [
    state.queries,
    state.isLoading,
    state.executeQueryAndUpdate,
  ]);

  const currentQueryState = queries.find((query) => query.id === queryId);
  const [query, setQuery] = useState("");

  const handleRunQuery = useCallback(async () => {
    const { id } = await executeQueryAndUpdate(queryId, query);
    navigate(`/query/${id}`);
  }, [query, queryId, executeQueryAndUpdate, navigate]);

  useEffect(() => {
    if (currentQueryState) {
      setQuery(currentQueryState.query);
    }
  }, [currentQueryState]);

  return (
    <>
      <div className="border-b p-4 bg-gray-400/10">
        <textarea
          className="w-full h-full p-2 resize-none outline-indigo-200 rounded-md "
          placeholder={TEXT_AREA_PLACEHOLDER}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          disabled={isLoading}
        ></textarea>
      </div>
      <div className="border-b flex justify-end items-center px-4 gap-2 ">
        {newQuery && (
          <Link to="/" className="text-indigo-500">
            <Button variant={"outline"} disabled={isLoading}>
              New Query
            </Button>
          </Link>
        )}
        <Button onClick={handleRunQuery} disabled={!query || isLoading}>
          {isLoading ? <Loader className="text-white" /> : "Run"}
        </Button>
      </div>
    </>
  );
};
