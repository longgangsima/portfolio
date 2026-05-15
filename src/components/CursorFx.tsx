import { useEffect, useRef, useState } from 'react';

function useFinePointerNoReducedMotion() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const mqP = window.matchMedia('(pointer: fine)');
    const mqR = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setOk(mqP.matches && !mqR.matches);
    sync();
    mqP.addEventListener('change', sync);
    mqR.addEventListener('change', sync);
    return () => {
      mqP.removeEventListener('change', sync);
      mqR.removeEventListener('change', sync);
    };
  }, []);

  return ok;
}

export function CursorFx() {
  const enabled = useFinePointerNoReducedMotion();
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const m = useRef({ x: -100, y: -100 });
  const p = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add('cursor-custom');
    return () => document.body.classList.remove('cursor-custom');
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const mv = (e: MouseEvent) => {
      m.current = { x: e.clientX, y: e.clientY };
      if (dot.current) dot.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };
    let raf = 0;
    const tick = () => {
      p.current.x += (m.current.x - p.current.x) * 0.1;
      p.current.y += (m.current.y - p.current.y) * 0.1;
      if (ring.current) ring.current.style.transform = `translate(${p.current.x}px,${p.current.y}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    document.addEventListener('mousemove', mv);
    return () => {
      document.removeEventListener('mousemove', mv);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dot} className="cur-dot" />
      <div ref={ring} className="cur-ring" />
    </>
  );
}
