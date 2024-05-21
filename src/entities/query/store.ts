import type { Query } from "./types";
import { executeQuery } from "shared/api";
import { create } from "zustand";
import { v4 as uuid } from "uuid";

interface QueryStoreState {
  isLoading: boolean;
  queries: Query[];
  executeQueryAndUpdate: (
    id: string | undefined,
    query: string,
  ) => Promise<{ id: string }>;
}

export const useQueryStore = create<QueryStoreState>((set) => ({
  isLoading: false,
  queries: [],
  executeQueryAndUpdate: async (id, query) => {
    set({ isLoading: true });
    const result = await executeQuery(query);
    const newId = id ?? uuid();
    const newQuery: Query = {
      id: newId,
      name: query.slice(0, 20) + "...",
      query,
      result,
    };
    set((state) => {
      const queries = state.queries.filter((query) => query.id !== id);
      return {
        queries: [newQuery, ...queries],
      };
    });
    set({ isLoading: false });
    return { id: newId };
  },
}));
