"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // Later: this is where you'll call your teammates' login API
  }

  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-zinc-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-8 shadow-sm"
      >
        <h1 className="text-xl font-bold text-zinc-900 mb-1">Welcome back</h1>
        <p className="text-sm text-zinc-500 mb-6">Log in to your OrganizAI account</p>

        <label className="text-sm font-medium text-zinc-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mt-1 mb-4 rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          placeholder="you@organization.com"
        />

        <label className="text-sm font-medium text-zinc-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mt-1 mb-6 rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-zinc-900 text-white py-2 text-sm font-medium hover:bg-zinc-800"
        >
          Log In
        </button>
      </form>
    </div>
  );
}