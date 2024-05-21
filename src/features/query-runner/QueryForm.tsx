import { useCallback, useEffect, useState, useRef } from "react";
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

Then press the "Run" button below to execute the query. You can also use "Cmd + Enter" or "Ctrl + Enter" to run the query.
`;

export const QueryForm = ({ newQuery = true }: QueryFormProps) => {
  const { queryId } = useParams();
  const navigate = useNavigate();
  const [queries, isLoading, executeQueryAndUpdate] = useQueryStore((state) => [
    state.queries,
    state.isLoading,
    state.executeQueryAndUpdate,
  ]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentQueryState = queries.find((query) => query.id === queryId);
  const [query, setQuery] = useState("");

  const handleRunQuery = useCallback(async () => {
    const { id } = await executeQueryAndUpdate(queryId, query);
    navigate(`/query/${id}`);
  }, [query, queryId, executeQueryAndUpdate, navigate]);

  useEffect(() => {
    if (currentQueryState) {
      setQuery(currentQueryState.query);
      textareaRef.current?.focus();
    }
  }, [currentQueryState]);

  return (
    <>
      <div className="border-b p-4 bg-gray-400/10">
        <textarea
          ref={textareaRef}
          className="w-full h-full p-2 resize-none outline-indigo-200 rounded-md "
          placeholder={TEXT_AREA_PLACEHOLDER}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          disabled={isLoading}
          onKeyDown={(e) => {
            if (query && (e.metaKey || e.ctrlKey) && e.key === "Enter") {
              handleRunQuery();
            }
          }}
        ></textarea>
      </div>
      <div className="border-b flex justify-end items-center px-4 gap-4 ">
        {newQuery && (
          <Link to="/" className="text-indigo-500">
            <Button
              variant={"default"}
              disabled={isLoading}
              className="bg-indigo-400 hover:bg-indigo-500"
              size="sm"
            >
              New Query
            </Button>
          </Link>
        )}
        <Button
          onClick={handleRunQuery}
          disabled={!query || isLoading}
          size={"sm"}
          className="w-20"
        >
          {isLoading ? <Loader className="text-white" /> : "Run"}
        </Button>
      </div>
    </>
  );
};
