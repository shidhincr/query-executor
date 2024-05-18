import { QueryList } from "features/query-list";
import { QueryContainer, QueryForm } from "features/query-runner";
import { Layout } from "shared/ui/Layout";

export const Home = () => {
  return (
    <Layout
      sidebar={<QueryList newQuery={false} />}
      content={
        <QueryContainer>
          <QueryForm />
        </QueryContainer>
      }
    />
  );
};
