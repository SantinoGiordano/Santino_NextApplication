import SearchForm from "@/app/componets/SearchForm";
import { SearchParams } from "next/dist/server/request/search-params";
import BlogCard from "../componets/BlogCard";


export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  //rmove this data latr, this is temp
const blogs  = [{ 
  _createdAt: new Date(),
  views: 55 , 
  author:{ _id: 1, name: "Bob"}, 
  _id:1,
  description: 'this is my first blog',
  image: 'https://placehold.co/300x200',
  catagory: "People",
  title: "We People"

}]


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
        {blogs?.length>  0 ? (
          blogs.map((blogs: BlogCardType )=>(
            <BlogCard key={blogs?._id} blogs={blogs} />
          ))
          ):(
            <p className="no-result">No Blogs found</p>
        )}
      </ul>
      </section>
    </section>
  );
}
