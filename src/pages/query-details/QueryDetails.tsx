import { QueryList } from "features/query-list";
import { QueryContainer, QueryForm, QueryResults } from "features/query-runner";
import { Layout } from "shared/ui/Layout";

export const QueryDetails = () => {
  return (
    <Layout
      sidebar={<QueryList />}
      content={
        <QueryContainer>
          <QueryForm />
          <QueryResults />
        </QueryContainer>
      }
    />
  );
};
