import { useFade } from '../hooks/useFade';

export function Contact() {
  const ref = useFade();

  return (
    <section className="ct" id="contact">
      <div className="fade-up" ref={ref}>
        <div className="sec-tag" style={{ marginBottom: 16 }}>
          GET IN TOUCH
        </div>
        <a href="mailto:longgangsima@gmail.com" className="ct-em">
          longgangsima@gmail.com
        </a>
        <div className="ct-lks">
          <a href="https://github.com/longgangsima" target="_blank" rel="noreferrer" className="ct-lk">
            github ↗
          </a>
          <a href="https://www.linkedin.com/in/jl-lin-199bb12a/" target="_blank" rel="noreferrer" className="ct-lk">
            linkedin ↗
          </a>
          <a href="mailto:longgangsima@gmail.com" className="ct-lk">
            email
          </a>
        </div>
        <div className="ct-edu">
          M.S. Engineering Management · Trine University
          <br />
          B.S. Applied Mathematics &amp; Statistics (Minor: CS) · Stony Brook University
        </div>
        <div className="ct-foot">Jiulong Lin · 2026</div>
      </div>
    </section>
  );
}
