import copy from '@/content/copy.json';

export function Services() {
  const services = copy.services;
  return (
    <section className="container mx-auto px-4 py-section">
      <h2 className="section-heading">Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3 className="font-semibold text-text mb-2 border-b border-border pb-2">{s.title}</h3>
            <p className="text-sm text-muted">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
