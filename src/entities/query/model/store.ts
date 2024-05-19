import type { Query } from "./types";
import { executeQuery } from "shared/api";
import { create } from "zustand";
import { v4 as uuid } from "uuid";

interface QueryStoreState {
  queries: Query[];
  executeQueryAndUpdate: (
    id: string | undefined,
    query: string,
  ) => Promise<{ id: string }>;
}

export const useQueryStore = create<QueryStoreState>((set) => ({
  queries: [],
  executeQueryAndUpdate: async (id, query) => {
    const result = await executeQuery(query);
    const newId = id ?? uuid();
    const newQuery: Query = {
      id: newId,
      name: "Untitled Query",
      query,
      result,
    };
    set((state) => {
      const queries = state.queries.filter((query) => query.id !== id);
      return {
        queries: [newQuery, ...queries],
      };
    });
    return { id: newId };
  },
}));
