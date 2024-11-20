import { formatDate } from "@/lib/utils";
import React from "react";
import { EyeIcon } from "lucide-react";
import Link from "next/link"; // Ensure SSR-compatible Link

const BlogCard = ({ blogs }: { blogs: BlogTypeCard }) => {
  return (
    <li className="startup-card group">
      {/* Container for Date and Views */}
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(blogs._createdAt)}</p>
        <div className="flex gap-1.5 items-center">
          <EyeIcon className="size-6 text-primary p-1" />
          <span className="text-16-medium">{blogs.views ?? 0}</span>
        </div>
      </div>
      {/* Author Name Below */}
      <div className="mt-2">
        {blogs.author ? (
          <Link href={`user/${blogs.author._id}`}>
            <p className="text-16-medium line-clamp-1">{blogs.author.name}</p>
          </Link>
        ) : (
          <p className="text-16-medium line-clamp-1">Anonymous</p>
        )}
        <Link href={`/blogs/${blogs._id}`}>
        <h3 className="text-26-semibold line-clamp-1">{blogs.title}</h3>
        </Link>
        <Link href={`/user/${blogs.author._id}`}>
          <img src="https://placehold.co/600x600" alt="placeholder" width={48} height={48} className="rounded-full"/> 
          {/* if theres issues with placwholdergo 2:08:5 */}
        </Link>
        <Link href={`/blogs/${blogs._id}`}>
        <p className="startup-card_decs mt-5 mb-5">
          {blogs.description}
        </p>
          <img src={blogs.image} alt="placeholder"className="blog-card_img"></img>
        </Link>
      </div>
    </li>
  );
};

export default BlogCard;
