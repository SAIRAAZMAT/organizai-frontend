import Link from "next/link";
import TaskItem from "./components/TaskItem";
import Card from "./components/Card";
export default function Home() {
  const tasks = [
    { id: 1, title: "Design database schema" },
    { id: 2, title: "Set up authentication" },
    { id: 3, title: "Build task dashboard UI" },
    { id: 4, title: "Test frontend" },
  ];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      
 <div className="flex flex-col gap-4 w-full">
  <Card title="Task Management" description="Create, assign, and track tasks across your organization." />
  <Card title="AI Recommendations" description="Get smart suggestions for delegating work based on skills and workload." />
  <Card title="Knowledge Base" description="Search organizational documents and past decisions instantly." />
</div>
<div className="flex flex-col gap-2 w-full">
  {tasks.map((task) => (
    <TaskItem key={task.id} title={task.title} />
  ))}
</div>

      </main>
    </div>
  );
}
