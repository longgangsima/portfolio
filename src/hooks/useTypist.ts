import { useEffect, useState } from 'react';

type LineKind = 'cmd' | 'name' | 'dim' | 'blank' | 'ok' | 'stat';

type TemplateLine = { id: number; text: string; t: LineKind };

const TL: TemplateLine[] = [
  { id: 0, text: '> whoami', t: 'cmd' },
  { id: 1, text: 'Jiulong Lin', t: 'name' },
  { id: 2, text: 'Senior Frontend-Focused Full-Stack Engineer', t: 'dim' },
  { id: 3, text: '', t: 'blank' },
  { id: 4, text: '> cat achievements.txt', t: 'cmd' },
  { id: 5, text: '✓ compass-validator → 9,000+ stores validated in CI', t: 'ok' },
  { id: 6, text: '✓ REST→GraphQL migration → ~80% API traffic cut', t: 'ok' },
  { id: 7, text: '✓ WebSocket reliability 60% → 99%', t: 'ok' },
  { id: 8, text: '✓ Eliminated ~22,000 over-fetched fields', t: 'ok' },
  { id: 9, text: '', t: 'blank' },
  { id: 10, text: '> ./status.sh', t: 'cmd' },
  { id: 11, text: '● open to opportunities · cupertino, ca', t: 'stat' },
];

export type TypistRow = TemplateLine & { text: string };

export function useTypist() {
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);
  const [rows, setRows] = useState<TypistRow[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (li >= TL.length) {
      setDone(true);
      return;
    }
    const line = TL[li];
    if (line.t === 'blank') {
      const t = setTimeout(() => {
        setRows((r) => [...r, { ...line }]);
        setLi((x) => x + 1);
        setCi(0);
      }, 60);
      return () => clearTimeout(t);
    }
    if (ci < line.text.length) {
      const spd = line.t === 'cmd' ? 55 : line.t === 'name' ? 45 : 18;
      const t = setTimeout(() => {
        const p = { ...line, text: line.text.slice(0, ci + 1) };
        setRows((r) => {
          const last = r[r.length - 1];
          return last && last.id === line.id ? [...r.slice(0, -1), p] : [...r, p];
        });
        setCi((c) => c + 1);
      }, spd);
      return () => clearTimeout(t);
    }
    const pause = line.t === 'cmd' ? 380 : line.t === 'name' ? 180 : 65;
    const t = setTimeout(() => {
      setLi((x) => x + 1);
      setCi(0);
    }, pause);
    return () => clearTimeout(t);
  }, [li, ci, done]);

  return { rows, done };
}
