"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-4 items-center mt-20">
      <h1 className="text-2xl font-bold">Sign In</h1>

      <button onClick={() => signIn("google")} className="btn bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>

      <button onClick={() => signIn("github")} className="btn bg-gray-800 text-white px-4 py-2 rounded">
        Sign in with GitHub
      </button>

      <button
        onClick={() =>
          signIn("credentials", {
            email: "test@test.com",
            password: "123456",
            redirect: false,
          })
        }
        className="btn bg-green-600 text-white px-4 py-2 rounded"
      >
        Sign in with Credentials
      </button>
    </div>
  );
}
