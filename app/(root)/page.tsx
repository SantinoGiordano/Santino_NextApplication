import SearchForm from "@/app/componets/SearchForm";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function Home({searchParams}: {
  SearchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).querry;

  return (
    <section className="blue_container">
      <h1 className="heading">
        Find Interesting blogs
        <br />
        Create Unique Ideas
        <br />
        Share with friends
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit blogs, Upvote your favorites, and get them noticed in virtual
        feeds and online accounts
      </p>
      <SearchForm query={query} />
    </section>
  );
}
