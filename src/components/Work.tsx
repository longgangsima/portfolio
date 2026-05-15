import { useId, useState } from 'react';
import { EXP } from '../data/content';
import { useFade } from '../hooks/useFade';

export function Work() {
  const [open, setOpen] = useState(-1);
  const ref = useFade();
  const headingId = useId();

  return (
    <section className="sec warm" id="work" aria-labelledby={headingId}>
      <div className="ctr fade-up" ref={ref}>
        <div className="sec-tag">Experience</div>
        <h2 className="sec-h" id={headingId}>
          Where I&apos;ve shipped
        </h2>
        {EXP.map((j, i) => {
          const expanded = open === i;
          const panelId = `wk-panel-${i}`;
          const btnId = `wk-btn-${i}`;
          return (
            <div key={j.co} className="wk-item">
              <button
                type="button"
                id={btnId}
                className="wk-trigger"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : i)}
              >
                <div className="wk-h">
                  <div className="wk-l">
                    <span className="wk-dot" aria-hidden>
                      {j.current ? '●' : '○'}
                    </span>
                    <div>
                      <span className="wk-co">{j.co}</span>
                      <span className="wk-ro"> · {j.ro}</span>
                    </div>
                  </div>
                  <div className="wk-r">
                    <span className="wk-dt">{j.dt}</span>
                    <span className="wk-tg" aria-hidden>
                      {expanded ? '−' : '+'}
                    </span>
                  </div>
                </div>
              </button>
              {expanded && (
                <div id={panelId} className="wk-body" role="region" aria-labelledby={btnId}>
                  <p className="wk-ach">{j.ach}</p>
                  <div className="wk-tags">
                    {j.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
