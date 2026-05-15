import { useTypist } from '../hooks/useTypist';

const TC: Record<string, string> = {
  cmd: 'tl-cmd',
  name: 'tl-name',
  dim: 'tl-dim',
  ok: 'tl-ok',
  stat: 'tl-stat',
};

export function Hero() {
  const { rows, done } = useTypist();

  return (
    <section className="hero" id="hero">
      <div className="hero-blob" />
      <div className="hero-blob2" />
      <div className="hero-l">
        <div className="eyebrow">Frontend-focused full-stack engineer</div>
        <h1 className="hero-name">
          Jiulong
          <br />
          <em>Lin.</em>
        </h1>
        <p className="hero-bio">
          Real-time, data-heavy web apps at Walmart and Sam&apos;s Club — React, TypeScript, GraphQL, and systems
          that hold up under load.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-p">
            view my work →
          </a>
          <a href="https://github.com/longgangsima" target="_blank" rel="noreferrer" className="btn-g">
            github ↗
          </a>
          <a href="https://www.linkedin.com/in/jl-lin-199bb12a/" target="_blank" rel="noreferrer" className="btn-g">
            linkedin ↗
          </a>
        </div>
      </div>
      <div className="hero-r">
        <div className="term">
          <div className="term-bar">
            <div className="tl" style={{ background: '#ff5f57' }} />
            <div className="tl" style={{ background: '#febc2e' }} />
            <div className="tl" style={{ background: '#28c840' }} />
            <span className="term-ttl">~/jiulong — zsh</span>
          </div>
          <div className="term-body">
            {rows.map((row, i) =>
              row.t === 'blank' ? (
                <span key={row.id} className="tl-line">
                  &nbsp;
                </span>
              ) : (
                <span key={row.id} className={`tl-line ${TC[row.t] ?? ''}`}>
                  {row.text}
                  {i === rows.length - 1 && !done && <span className="tl-cur" />}
                </span>
              ),
            )}
            {done && (
              <span className="tl-line tl-cmd">
                {'> '}
                <span className="tl-cur" />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="scroll-hint">scroll ↓</div>
    </section>
  );
}
