import SearchForm from "@/app/componets/SearchForm";
import { SearchParams } from "next/dist/server/request/search-params";
import BlogCard from "../componets/BlogCard";


export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  //rmove this data latr, this is temp
const blogs  = [ 
  { 
    _createdAt: new Date(),
    views: 55, 
    author: { _id: 1, name: "Bob" }, 
    _id: 1,
    description: 'This is my first blog',
    image: 'people.jpg',
    catagory: "People",
    title: "We People"
  },
  { 
    _createdAt: new Date(),
    views: 120, 
    author: { _id: 2, name: "Alice" }, 
    _id: 2,
    description: 'Exploring new horizons',
    image: 'escape.jpg',
    catagory: "Travel",
    title: "The Great Escape"
  },
  { 
    _createdAt: new Date(),
    views: 87, 
    author: { _id: 3, name: "Charlie" }, 
    _id: 3,
    description: 'Understanding technology',
    image: 'tech.jpg',
    catagory: "Technology",
    title: "Tech Today"
  },
  { 
    _createdAt: new Date(),
    views: 42, 
    author: { _id: 4, name: "Diana" }, 
    _id: 4,
    description: 'A healthy lifestyle guide',
    image: 'healthy.jpg',
    catagory: "Health",
    title: "Healthy Living"
  },
  { 
    _createdAt: new Date(),
    views: 150, 
    author: { _id: 5, name: "Eve" }, 
    _id: 5,
    description: 'Adventures in cooking',
    image: 'food.jpg',
    catagory: "Food",
    title: "Cooking Adventures"
  },
  { 
    _createdAt: new Date(),
    views: 34, 
    author: { _id: 6, name: "Frank" }, 
    _id: 6,
    description: 'Mindfulness and meditation',
    image: 'innerP.jpg',
    catagory: "Wellness",
    title: "Inner Peace"
  },
  { 
    _createdAt: new Date(),
    views: 98, 
    author: { _id: 7, name: "Grace" }, 
    _id: 7,
    description: 'The art of photography',
    image: 'capture.jpg',
    catagory: "Art",
    title: "Capture the Moment"
  }
];


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
