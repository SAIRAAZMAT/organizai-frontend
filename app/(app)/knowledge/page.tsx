"use client";

import { useState } from "react";

type Document = {
  id: number;
  title: string;
  summary: string;
  type: string;
};

const documents: Document[] = [
  { id: 1, title: "Q3 Planning Meeting Notes", summary: "Decisions on roadmap priorities for Q3.", type: "Meeting" },
  { id: 2, title: "API Design Guidelines", summary: "Standards for REST API structure and naming.", type: "Document" },
  { id: 3, title: "Onboarding Checklist", summary: "Steps for new employee onboarding.", type: "Document" },
  { id: 4, title: "Sprint Retrospective - Aug", summary: "What went well and what to improve.", type: "Meeting" },
];

export default function KnowledgeBase() {
  const [query, setQuery] = useState("");

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-10 flex-1">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Knowledge Base</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search documents..."
        className="w-full max-w-md rounded-lg border border-zinc-300 px-3 py-2 text-sm mb-6"
      />

      <div className="flex flex-col gap-3">
        {filteredDocs.length === 0 && (
          <p className="text-zinc-400 text-sm">No documents match your search.</p>
        )}

        {filteredDocs.map((doc) => (
          <div key={doc.id} className="rounded-lg border border-zinc-200 p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-zinc-900">{doc.title}</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-600">
                {doc.type}
              </span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">{doc.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}