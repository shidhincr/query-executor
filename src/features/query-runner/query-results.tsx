import { useParams } from "react-router-dom";
import { useQueryStore } from "entities/query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "shared/ui/table";
import { Loader } from "shared/ui/loader";

export const QueryResults = () => {
  const [queries, isLoading] = useQueryStore((state) => [
    state.queries,
    state.isLoading,
  ]);
  const { queryId } = useParams();
  const currentQuery = queries.find((query) => query.id === queryId);

  if (!currentQuery) return null;

  const { result: data } = currentQuery;
  const columns = data[0] ? Object.keys(data[0]) : [];

  return (
    <div className="overflow-hidden relative">
      {isLoading && (
        <div className="absolute bg-white top-0 right-0 left-0 bottom-0 opacity-80 z-10 flex justify-center items-center">
          <Loader className="text-gray-500" />
        </div>
      )}
      {data.length ? (
        <Table className="w-max">
          <TableHeader className="sticky bg-white top-0">
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column}>{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column}>{row[column] ?? ""}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex items-center justify-center text-gray-500 text-sm h-40">
          No results
        </div>
      )}
    </div>
  );
};
