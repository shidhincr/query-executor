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

export const QueryResults = () => {
  const queries = useQueryStore((state) => state.queries);
  const { queryId } = useParams();
  const currentQuery = queries.find((query) => query.id === queryId);

  if (!currentQuery) return null;

  const { result: data } = currentQuery;
  const columns = data[0] ? Object.keys(data[0]) : [];

  return (
    <div className="overflow-hidden h-screen">
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
    </div>
  );
};
