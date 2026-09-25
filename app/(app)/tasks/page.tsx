"use client";

import { useState } from "react";
import { currentUser } from "../../lib/currentUser";

type Task = {
  id: number;
  title: string;
  status: string;
  priority: string;
  assignee: string;
  deadline: string;
};

const teamMembers = ["Ahmad Taj", "Saira Azmat", "Muhammad Burhan Khan"];

const initialTasks: Task[] = [
  { id: 1, title: "Design database schema", status: "In Progress", priority: "High", assignee: "Ahmad Taj", deadline: "2026-10-05" },
  { id: 2, title: "Set up authentication", status: "To Do", priority: "High", assignee: "Ahmad Taj", deadline: "2026-10-10" },
  { id: 3, title: "Build task dashboard UI", status: "Done", priority: "Medium", assignee: "Saira Azmat", deadline: "2026-09-20" },
  { id: 4, title: "Write API documentation", status: "To Do", priority: "Low", assignee: "Muhammad Burhan Khan", deadline: "2026-10-15" },
];

const statusColors: Record<string, string> = {
  "To Do": "bg-zinc-100 text-zinc-700",
  "In Progress": "bg-blue-100 text-blue-700",
  "Done": "bg-green-100 text-green-700",
};

const priorityColors: Record<string, string> = {
  Low: "text-zinc-500",
  Medium: "text-amber-600",
  High: "text-red-600",
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTitle, setNewTitle] = useState("");
  const [newAssignee, setNewAssignee] = useState(teamMembers[0]);
  const [newDeadline, setNewDeadline] = useState("");

  function handleAddTask() {
    if (newTitle.trim() === "") return;

    const newTask: Task = {
      id: tasks.length + 1,
      title: newTitle,
      status: "To Do",
      priority: "Medium",
      assignee: newAssignee,
      deadline: newDeadline,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
    setNewDeadline("");
  }

  return (
    <div className="p-10 flex-1">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Tasks</h1>

      {currentUser.role === "Admin" && (
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New task title..."
            className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          />

          <select
            value={newAssignee}
            onChange={(e) => setNewAssignee(e.target.value)}
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          >
            {teamMembers.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          />

          <button
            onClick={handleAddTask}
            className="rounded-lg bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800"
          >
            Add Task
          </button>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-lg border border-zinc-200 p-4"
          >
            <div>
              <span className="text-zinc-900 font-medium">{task.title}</span>
              <p className="text-xs text-zinc-400 mt-1">
                Assigned to {task.assignee} {task.deadline && `• Due ${task.deadline}`}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-medium ${priorityColors[task.priority]}`}>
                {task.priority}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${statusColors[task.status]}`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}