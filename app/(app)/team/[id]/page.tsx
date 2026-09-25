type Member = {
  id: number;
  name: string;
  role: string;
  department: string;
  skills: string[];
  workload: number;
};

const members: Member[] = [
  { id: 1, name: "Ahmad Taj", role: "Backend Developer", department: "Engineering", skills: ["Node.js", "PostgreSQL"], workload: 40 },
  { id: 2, name: "Saira Azmat", role: "Frontend Developer", department: "Engineering", skills: ["Next.js", "Tailwind"], workload: 75 },
  { id: 3, name: "Muhammad Burhan Khan", role: "AI Engineer", department: "AI & Research", skills: ["Python", "NLP", "RAG"], workload: 55 },
];

export default async function MemberProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = members.find((m) => m.id === Number(id));

  if (!member) {
    return <div className="p-10">Member not found.</div>;
  }

  return (
    <div className="p-10 flex-1">
      <h1 className="text-2xl font-bold text-zinc-900">{member.name}</h1>
      <p className="text-zinc-500 mt-1">{member.role} — {member.department}</p>

      <div className="mt-6 max-w-md rounded-xl border border-zinc-200 p-5">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span key={skill} className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-600">
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mt-5 mb-2">
          Current Workload
        </h2>
        <p className="text-zinc-900 font-medium">{member.workload}%</p>
      </div>
    </div>
  );
}