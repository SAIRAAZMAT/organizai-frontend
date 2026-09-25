type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      <p className="mt-2 text-zinc-600">{description}</p>
    </div>
  );
}