import { useEffect, useMemo, useState } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  options: IntersectionObserverInit = { rootMargin: '0px 0px -70% 0px' }
): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, options]);

  return activeId;
}
