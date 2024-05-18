import { QueryList } from "features/query-list";
import { QueryContainer, QueryForm } from "features/query-runner";
import { Layout } from "shared/ui/Layout";

export const QueryDetails = () => {
  return (
    <Layout
      sidebar={<QueryList newQuery={true} />}
      content={
        <QueryContainer>
          <QueryForm />
        </QueryContainer>
      }
    />
  );
};
