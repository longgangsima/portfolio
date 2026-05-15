import { useCount } from '../hooks/useCount';

export function Stats() {
  const [v1, r1] = useCount(3);
  const [v2, r2] = useCount(9000);
  const [v3, r3] = useCount(80);
  const [v4, r4] = useCount(99);
  const S = [
    { r: r1, v: v1, sf: '', l: 'Teams adopting', sub: 'compass-validator (NPM)' },
    { r: r2, v: v2, sf: '+', l: 'Stores validated', sub: 'in CI, Walmart Compass' },
    { r: r3, v: v3, sf: '%', l: 'API traffic cut', sub: 'REST→GraphQL migration' },
    { r: r4, v: v4, sf: '%', l: 'WebSocket uptime', sub: 'restored from 60%' },
  ];

  return (
    <div className="stats">
      <div className="stats-g">
        {S.map(({ r, v, sf, l, sub }) => (
          <div key={l} ref={r} style={{ textAlign: 'center' }}>
            <div className="stat-n">
              {v.toLocaleString()}
              <em>{sf}</em>
            </div>
            <span className="stat-l">{l}</span>
            <span className="stat-sub">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
