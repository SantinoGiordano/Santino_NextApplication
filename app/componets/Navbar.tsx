import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="p-10 bg-blue-950 text-white">
      <nav className="flex justify-betwee items-center">
        <Link href="/">
          <img src="/logo.png" className="rounded-full" width={100} />
        </Link>
        <div className="flex text-right gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button onClick={signOut}>
                <span>Sign Out</span>
              </button>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={signIn("github")}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
