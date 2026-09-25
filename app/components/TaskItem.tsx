"use client";

import { useState } from "react";

type TaskItemProps = {
  title: string;
};

export default function TaskItem({ title }: TaskItemProps) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => setIsDone(!isDone)}
      className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4 cursor-pointer hover:bg-zinc-50"
    >
      <div
        className={`h-5 w-5 rounded border flex items-center justify-center ${
          isDone ? "bg-green-500 border-green-500" : "border-zinc-300"
        }`}
      >
        {isDone && <span className="text-white text-xs">✓</span>}
      </div>
      <span className={isDone ? "line-through text-zinc-400" : "text-zinc-900"}>
        {title}
      </span>
    </div>
  );
}