import { PROJECTS } from '../data/content';
import { useFade } from '../hooks/useFade';

export function Projects() {
  const ref = useFade();

  return (
    <section className="sec" id="projects">
      <div className="ctr fade-up" ref={ref}>
        <div className="sec-tag">PERSONAL WORK</div>
        <h2 className="sec-h">Things I&apos;ve built</h2>
        {PROJECTS.map((p) => (
          <div key={p.n} className="pj-item">
            <div className="pj-num">{p.n}</div>
            <div className="pj-row">
              <div className="pj-info">
                <div className="pj-title">{p.title}</div>
                <span className="pj-badge">{p.type}</span>
                <p className="pj-tl">{p.tl}</p>
                <div className="pj-lks">
                  {p.demo && (
                    <a href={p.demo} className="pj-lk f">
                      ↗ demo
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="pj-lk">
                      ⌥ github
                    </a>
                  )}
                </div>
              </div>
              <div className="pj-side">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
