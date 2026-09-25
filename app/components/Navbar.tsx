"use client";

import Link from "next/link";
import { useState } from "react";
import { currentUser, organizations } from "../lib/currentUser";

export default function Navbar() {
  const [selectedOrg, setSelectedOrg] = useState(currentUser.organization);

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 bg-white">
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-zinc-900">OrganizAI</span>

        <select
          value={selectedOrg}
          onChange={(e) => setSelectedOrg(e.target.value)}
          className="text-sm border border-zinc-200 rounded-lg px-2 py-1 text-zinc-600"
        >
          {organizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <Link href="/dashboard" className="hover:text-zinc-900">Dashboard</Link>

        <div className="flex items-center gap-3 border-l border-zinc-200 pl-6">
          <div className="text-right">
            <p className="text-zinc-900 font-medium leading-tight">{currentUser.name}</p>
            <p className="text-xs text-zinc-400">{currentUser.role}</p>
          </div>
          <Link href="/login" className="text-sm text-red-600 font-medium hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}