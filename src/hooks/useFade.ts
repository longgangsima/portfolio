import { useEffect, useRef } from 'react';

export function useFade() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.1 },
    );
    const el = ref.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
