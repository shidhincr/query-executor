export interface Query {
  id: string;
  name: string;
  query: string;
  result: { data: Record<string, unknown>[] };
}
