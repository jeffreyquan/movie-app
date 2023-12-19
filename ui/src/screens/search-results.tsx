import Search from "components/search";
import { useAsync } from "hooks/use-async";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchResults } from "services/search";

export function SearchResults() {
  const [searchParams] = useSearchParams();

  const { data, isLoading, run } = useAsync<any>();
  useEffect(() => {
    const query = searchParams.get("q");
    if (!query) return;
    run(getSearchResults(query));
  }, [run, searchParams]);
  return (
    <div>
      <Search />
      {isLoading && <div>Loading...</div>}
    </div>
  );
}
