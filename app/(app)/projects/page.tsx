"use client";

import { useState } from "react";

type Project = {
  id: number;
  name: string;
  tasksTotal: number;
  tasksDone: number;
};

const initialProjects: Project[] = [
  { id: 1, name: "OrganizAI Core Platform", tasksTotal: 20, tasksDone: 14 },
  { id: 2, name: "AI Recommendation Engine", tasksTotal: 12, tasksDone: 3 },
  { id: 3, name: "Knowledge Base & RAG", tasksTotal: 15, tasksDone: 15 },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [newName, setNewName] = useState("");

  function handleAddProject() {
    if (newName.trim() === "") return;

    const newProject: Project = {
      id: projects.length + 1,
      name: newName,
      tasksTotal: 0,
      tasksDone: 0,
    };

    setProjects([...projects, newProject]);
    setNewName("");
  }

  return (
    <div className="p-10 flex-1">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Projects</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New project name..."
          className="flex-1 max-w-md rounded-lg border border-zinc-300 px-3 py-2 text-sm"
        />
        <button
          onClick={handleAddProject}
          className="rounded-lg bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => {
          const percent =
            project.tasksTotal === 0
              ? 0
              : Math.round((project.tasksDone / project.tasksTotal) * 100);

          return (
            <div key={project.id} className="rounded-xl border border-zinc-200 p-5">
              <h2 className="font-semibold text-zinc-900">{project.name}</h2>
              <p className="text-sm text-zinc-500 mt-1">
                {project.tasksDone} / {project.tasksTotal} tasks completed
              </p>

              <div className="mt-3 h-2 w-full rounded-full bg-zinc-100">
                <div
                  className="h-2 rounded-full bg-zinc-900"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <p className="text-xs text-zinc-400 mt-1">{percent}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}