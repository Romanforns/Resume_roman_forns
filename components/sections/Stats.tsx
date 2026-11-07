import copy from '@/content/copy.json';

export function Stats() {
  const stats = copy.stats;
  return (
    <section className="container mx-auto px-4 py-section">
      <h2 className="section-heading">At a glance</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="card">
            <p className="font-mono text-xs text-neon-cyan mb-1">{s.label}</p>
            <p className="text-text font-medium">{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
