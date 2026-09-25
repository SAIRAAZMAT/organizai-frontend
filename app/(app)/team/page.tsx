import Link from "next/link";

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

function workloadColor(workload: number) {
  if (workload < 50) return "bg-green-500";
  if (workload < 80) return "bg-amber-500";
  return "bg-red-500";
}

export default function Team() {
  const departments = Array.from(new Set(members.map((m) => m.department)));

  return (
    <div className="p-10 flex-1">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Team</h1>

      {departments.map((dept) => (
        <div key={dept} className="mb-8">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
            {dept}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {members
              .filter((member) => member.department === dept)
              .map((member) => (
                <Link
                  key={member.id}
                  href={`/team/${member.id}`}
                  className="block rounded-xl border border-zinc-200 p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-zinc-900">{member.name}</h3>
                  <p className="text-sm text-zinc-500">{member.role}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-zinc-500 mb-1">
                      <span>Workload</span>
                      <span>{member.workload}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-zinc-100">
                      <div
                        className={`h-2 rounded-full ${workloadColor(member.workload)}`}
                        style={{ width: `${member.workload}%` }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}