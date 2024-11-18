import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// const { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } = process.env;
// console.log({ AUTH_GITHUB_ID, AUTH_GITHUB_SECRET })
// const githubProvider = GitHub({
//   clientId: AUTH_GITHUB_ID,
//   clientSecret: AUTH_GITHUB_SECRET,
// });

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
});
