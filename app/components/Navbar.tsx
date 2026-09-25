import Link from "next/link";
import { currentUser } from "../lib/currentUser";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 bg-white">
      <span className="text-lg font-bold text-zinc-900">OrganizAI</span>

      <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <Link href="/dashboard" className="hover:text-zinc-900">Dashboard</Link>

        <div className="flex items-center gap-3 border-l border-zinc-200 pl-6">
          <div className="text-right">
            <p className="text-zinc-900 font-medium leading-tight">{currentUser.name}</p>
            <p className="text-xs text-zinc-400">{currentUser.role}</p>
          </div>
          <Link
            href="/login"
            className="text-sm text-red-600 font-medium hover:underline"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}