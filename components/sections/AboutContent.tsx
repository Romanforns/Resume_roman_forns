export function AboutContent() {
  return (
    <article className="max-w-2xl">
      <h1 className="section-heading">About</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted">
        <p>
          I focus on <strong className="text-text">quality, reliability, and security</strong> in every data solution.
          Delivering on time and within scope, with clear documentation and maintainable code, is non-negotiable.
          I also keep an eye on cost and efficiency: right-sized infrastructure, efficient pipelines, and reuse
          of patterns and frameworks wherever possible.
        </p>
        <p>
          My working style is collaborative: I align with stakeholders early, iterate on requirements, and
          communicate progress and trade-offs clearly. I prefer well-defined ownership, documented decisions,
          and incremental delivery so that value is visible and risks are contained.
        </p>
        <p>
          I use a broad toolset—cloud (GCP, Azure), warehouses (Snowflake, BigQuery, Fabric), orchestration
          (Airflow, dbt), integration (Talend, APIs, event-driven)—and choose stack based on context and
          constraints. I am comfortable leading technical design, mentoring, and hands-on implementation.
        </p>
      </div>
    </article>
  );
}
