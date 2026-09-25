import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-65px)]">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}