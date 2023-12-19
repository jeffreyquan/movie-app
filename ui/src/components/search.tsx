import { Routes } from "constants/routes";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const query = fieldValues.query;
    if (!query) return;
    const searchParams = createSearchParams({
      q: query as string,
    });
    navigate({
      pathname: Routes.SEARCH,
      search: searchParams.toString(),
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search for a movie" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
