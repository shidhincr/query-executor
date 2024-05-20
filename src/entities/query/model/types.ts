export interface Query {
  id: string;
  name: string;
  query: string;
  result: Record<string, string>[];
}
