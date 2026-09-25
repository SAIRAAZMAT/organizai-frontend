import AIRecommendation from "../../components/AIRecommendation";

export default function Dashboard() {
  return (
    <div className="p-10 flex-1">
      <h1 className="text-2xl font-bold text-zinc-900">Dashboard</h1>
      <p className="text-zinc-600 mt-2">Welcome back. Here's your organization overview.</p>

      <div className="mt-6 max-w-md">
        <AIRecommendation />
      </div>
    </div>
  );
}