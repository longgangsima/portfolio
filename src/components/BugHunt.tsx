import { useEffect, useRef, useState } from 'react';
import { FILES } from '../data/content';
import { useFade } from '../hooks/useFade';

type Phase = 'idle' | 'playing' | 'done';

export function BugHunt() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [cells, setCells] = useState<Array<'idle' | 'bug' | 'fx'>>(() => Array(12).fill('idle'));
  const sc = useRef(0);
  const iv = useRef<{ t?: ReturnType<typeof setInterval>; s?: ReturnType<typeof setInterval> }>({});
  const ref = useFade();

  useEffect(
    () => () => {
      clearInterval(iv.current.t);
      clearInterval(iv.current.s);
    },
    [],
  );

  const start = () => {
    clearInterval(iv.current.t);
    clearInterval(iv.current.s);
    setPhase('playing');
    setScore(0);
    sc.current = 0;
    setTimer(30);
    setCells(Array(12).fill('idle'));

    iv.current.t = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(iv.current.t);
          clearInterval(iv.current.s);
          setCells(Array(12).fill('idle'));
          setPhase('done');
          setScore(sc.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    iv.current.s = setInterval(() => {
      const idx = Math.floor(Math.random() * 12);
      setCells((p) => {
        if (p[idx] !== 'idle') return p;
        const n = [...p];
        n[idx] = 'bug';
        return n;
      });
      setTimeout(() => {
        setCells((p) => {
          if (p[idx] !== 'bug') return p;
          const n = [...p];
          n[idx] = 'idle';
          return n;
        });
      }, 1350);
    }, 520);
  };

  const click = (i: number) => {
    if (cells[i] !== 'bug') return;
    sc.current += 1;
    setScore(sc.current);
    setCells((p) => {
      const n = [...p];
      n[i] = 'fx';
      return n;
    });
    setTimeout(() => {
      setCells((p) => {
        if (p[i] !== 'fx') return p;
        const n = [...p];
        n[i] = 'idle';
        return n;
      });
    }, 320);
  };

  const msg = (s: number) =>
    s >= 22
      ? '🎭 Playwright team wants you'
      : s >= 15
        ? '🔍 Solid debugging instincts'
        : s >= 8
          ? '☕ Needs more coffee'
          : ' 😅 More bugs shipped than fixed';

  return (
    <section className="game-sec blue-tint sec" id="game">
      <div className="fade-up ctr" style={{ textAlign: 'center' }} ref={ref}>
        <div className="sec-tag" style={{ marginBottom: 8 }}>
          MINI GAME
        </div>
        <h2 className="sec-h" style={{ marginBottom: 12 }}>
          Meanwhile, in production…
        </h2>
        <p className="game-sub">
          Bugs keep appearing in the codebase.
          <br />
          Fix them before they take down the pipeline.
          {phase === 'idle' && (
            <>
              <br />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--t3)' }}>
                30 seconds · click the red cells · go!
              </span>
            </>
          )}
          {phase === 'playing' && (
            <>
              <br />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--coral)' }}>
                {timer}s remaining · bugs fixed: {score}
              </span>
            </>
          )}
        </p>

        {phase !== 'done' && (
          <div className="gw" style={{ margin: '0 auto' }}>
            <div className="g-topbar">
              <span className="g-ttl">production · main · {phase === 'playing' ? '🔴 LIVE' : '● IDLE'}</span>
              {phase === 'playing' && <span className="g-sc">score: {score}</span>}
            </div>
            {phase === 'playing' && (
              <div className="timer-o">
                <div
                  className="timer-i"
                  style={{
                    width: `${(timer / 30) * 100}%`,
                    background: timer <= 10 ? '#ef4444' : 'var(--coral)',
                  }}
                />
              </div>
            )}
            <div className="g-grid">
              {cells.map((st, i) => (
                <div
                  key={FILES[i]}
                  className={`g-cell${st === 'bug' ? ' bug' : st === 'fx' ? ' fx' : ''}`}
                  onClick={() => click(i)}
                >
                  <span className="g-fn">{FILES[i]}</span>
                  <span className={`g-st ${st === 'idle' ? 'g-idle' : st === 'bug' ? 'g-bug' : 'g-fix'}`}>
                    {st === 'idle' && '· OK'}
                    {st === 'bug' && '⚠ [BUG DETECTED]'}
                    {st === 'fx' && '✓ FIXED'}
                  </span>
                </div>
              ))}
            </div>
            {phase === 'idle' && (
              <div style={{ textAlign: 'center' }}>
                <button type="button" className="g-btn" onClick={start}>
                  ./run-debugger.sh ▶
                </button>
              </div>
            )}
          </div>
        )}

        {phase === 'done' && (
          <div className="g-res">
            <div className="g-res-n">{score}</div>
            <div className="g-res-l">BUGS FIXED IN 30 SECONDS</div>
            <p className="g-res-c">{msg(score)}</p>
            <button type="button" className="g-btn" onClick={start}>
              ./retry.sh ↺
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
