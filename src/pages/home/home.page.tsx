import { QueryList } from "features/query-list";
import { QueryContainer, QueryForm } from "features/query-runner";
import { Layout } from "shared/ui/layout";

export const Home = () => {
  return (
    <Layout
      sidebar={<QueryList />}
      content={
        <QueryContainer>
          <QueryForm newQuery={false} />
        </QueryContainer>
      }
    />
  );
};
