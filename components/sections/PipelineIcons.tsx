'use client';

/** Same icons as Vidit Dhull portfolio: emoji per node. */
const emojiByNode: Record<string, string> = {
  education: '📚',
  certificates: '🎓',
  skills: '⚙️',
  experience: '💼',
  projects: '🚀',
  summary: '✨',
  contact: '📧',
  resume: '📄',
};

export function IconEducation() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.education}</span>;
}
export function IconCertificates() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.certificates}</span>;
}
export function IconSkills() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.skills}</span>;
}
export function IconExperience() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.experience}</span>;
}
export function IconProjects() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.projects}</span>;
}
export function IconSummary() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.summary}</span>;
}
export function IconContact() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.contact}</span>;
}
export function IconResume() {
  return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emojiByNode.resume}</span>;
}

const pipelineIcons: Record<string, () => JSX.Element> = {
  education: IconEducation,
  certificates: IconCertificates,
  skills: IconSkills,
  experience: IconExperience,
  projects: IconProjects,
  summary: IconSummary,
  contact: IconContact,
  resume: IconResume,
};

export function PipelineIcon({ id }: { id: string }) {
  const Icon = pipelineIcons[id];
  if (Icon) return <Icon />;
  const emoji = emojiByNode[id];
  if (emoji) {
    return <span className="inline-flex items-center justify-center text-[28px] leading-none" aria-hidden>{emoji}</span>;
  }
  return null;
}
