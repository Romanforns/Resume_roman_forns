import Image from 'next/image';
import copy from '@/content/copy.json';
import type { CVData } from '@/content/_schema';

interface HeroProps {
  cv: CVData;
}

export function Hero({ cv }: HeroProps) {
  const hero = copy.hero;
  return (
    <section className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col items-center text-center max-w-[min(85rem,96vw)] mx-auto">
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-neon-cyan/30 shrink-0 mb-3">
          <Image
            src="/images/avatar.jpg"
            alt=""
            fill
            sizes="208px"
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-[26px] sm:text-[32px] font-bold text-text mb-1">{cv.name}</h1>
        <p className="text-[20px] sm:text-[22px] text-muted font-medium mb-4">{hero.headline}</p>
        <p className="text-sm text-muted leading-relaxed w-full max-w-[min(85rem,96vw)] mx-auto text-center md:text-left pb-2">
          {Array.isArray(hero.profileLines) && hero.profileLines.length > 0
            ? hero.profileLines.join(' ')
            : (hero as { subheadline?: string }).subheadline ?? ''}
        </p>
      </div>
    </section>
  );
}
