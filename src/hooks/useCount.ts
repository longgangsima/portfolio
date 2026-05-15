import { useEffect, useRef, useState, type MutableRefObject } from 'react';

export function useCount(end: number, dur = 1400): [number, MutableRefObject<HTMLDivElement | null>] {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            setV(Math.round((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    const el = ref.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [end, dur]);

  return [v, ref];
}
