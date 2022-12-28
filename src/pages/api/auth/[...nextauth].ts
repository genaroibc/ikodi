import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

const GITHUB_ID = process.env.GITHUB_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;

if (!GITHUB_ID) throw new Error("env variable 'GITHUB_ID' is not declared");
if (!GITHUB_SECRET)
  throw new Error("env variable 'GITHUB_SECRET' is not declared");

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    })
  ]
};

export default NextAuth(authOptions);
