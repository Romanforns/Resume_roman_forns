type Variant = 'default' | 'confidential' | 'internal';

export function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  const styles =
    variant === 'confidential'
      ? 'bg-neon-purple-dim/20 text-neon-purple border-neon-purple-dim'
      : variant === 'internal'
        ? 'bg-neon-cyan-dim/20 text-neon-cyan border-neon-cyan-dim'
        : '';
  return (
    <span className={`badge ${styles}`}>
      {children}
    </span>
  );
}
