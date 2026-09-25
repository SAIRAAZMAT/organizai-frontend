import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 bg-white">
      <span className="text-lg font-bold text-zinc-900">OrganizAI</span>
      <div className="flex gap-6 text-sm font-medium text-zinc-600">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <Link href="/dashboard" className="hover:text-zinc-900">Dashboard</Link>
      </div>
    </nav>
  );
}