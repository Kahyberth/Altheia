export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-indigo-600/5 animate-gradient" />
    </div>
  );
}
