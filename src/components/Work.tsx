import { useState } from 'react';
import { EXP } from '../data/content';
import { useFade } from '../hooks/useFade';

export function Work() {
  const [open, setOpen] = useState(0);
  const ref = useFade();

  return (
    <section className="sec warm" id="work">
      <div className="ctr fade-up" ref={ref}>
        <div className="sec-tag">EXPERIENCE</div>
        <h2 className="sec-h">Where I&apos;ve shipped</h2>
        {EXP.map((j, i) => (
          <div key={j.co} className="wk-item" onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="wk-h">
              <div className="wk-l">
                <span className="wk-dot">{j.current ? '●' : '○'}</span>
                <div>
                  <span className="wk-co">{j.co}</span>
                  <span className="wk-ro"> · {j.ro}</span>
                </div>
              </div>
              <div className="wk-r">
                <span className="wk-dt">{j.dt}</span>
                <span className="wk-tg">{open === i ? '−' : '+'}</span>
              </div>
            </div>
            {open === i && (
              <div className="wk-body">
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
        ))}
      </div>
    </section>
  );
}
