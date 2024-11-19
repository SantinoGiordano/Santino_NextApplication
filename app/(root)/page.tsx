import SearchForm from "@/app/componets/SearchForm";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  //rmove this data latr, this is temp

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
      <section className="section_contianer p-5">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : 'All Blogs'}
      </p> 
      <ul className="mt-7 card_grid">

      </ul>
      </section>
    </section>
  );
}
