"use client";

import { useState } from "react";

type Recommendation = {
  person: string;
  reason: string;
  confidence: number;
  factors: string[];
};

const recommendation: Recommendation = {
  person: "Ahmad Taj",
  reason: "Best match for this task based on skills and current workload.",
  confidence: 87,
  factors: [
    "Has completed 5 similar backend tasks before",
    "Currently has the lowest active workload on the team",
    "Listed 'Node.js' and 'PostgreSQL' as core skills",
  ],
};

export default function AIRecommendation() {
  const [showWhy, setShowWhy] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200 p-5 bg-zinc-50">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-zinc-900">AI Suggested Assignee</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-zinc-900 text-white">
          {recommendation.confidence}% match
        </span>
      </div>

      <p className="text-zinc-900 font-medium mt-3">{recommendation.person}</p>
      <p className="text-sm text-zinc-600 mt-1">{recommendation.reason}</p>

      <button
        onClick={() => setShowWhy(!showWhy)}
        className="text-sm text-blue-600 font-medium mt-3 hover:underline"
      >
        {showWhy ? "Hide explanation" : "Why this recommendation?"}
      </button>

      {showWhy && (
        <ul className="mt-3 flex flex-col gap-1">
          {recommendation.factors.map((factor, index) => (
            <li key={index} className="text-sm text-zinc-600 flex gap-2">
              <span>•</span>
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}