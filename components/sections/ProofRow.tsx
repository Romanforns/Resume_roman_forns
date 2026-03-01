export function ProofRow() {
  const labels = ['Retail & CPG', 'Energy & Maritime', 'Chemicals', 'Multi-cloud'];
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-sm text-muted mb-4">Sectors & contexts</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {labels.map((label) => (
            <span key={label} className="font-mono text-sm text-muted">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
