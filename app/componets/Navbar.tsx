import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="p-10 text-2xl bg-dbNav text-white">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" className="rounded-full" width={100} />
        </Link>
        <div className="flex gap-5 pl-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="navButton">Create</span>
              </Link>
              <form action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit" className="navButton">Sign Out</button>
              </form>

              <Link href={`/user/${session?.id}`} className="navButton">
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className=" font-sans text-responsiveHeader transition duration-300 hover:scale-125 hover:shadow-lg">
                Log In
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
