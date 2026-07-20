import { TRADES, AGE_TIERS } from '../data/trades';

export default function TradeSplash({ tierId, stamps, onSelectTrade, onChangeAge }) {
  const tierLabel = AGE_TIERS.find(t => t.id === tierId)?.label ?? '';

  return (
    <>
      <div className="passport-header">
        <div>
          <h1 className="passport-title">Pick a <span>trade</span> to explore</h1>
          <button className="change-age" onClick={onChangeAge}>
            {tierLabel} · change
          </button>
        </div>
        <div className="stamp-count">🏅 {stamps.length}/{TRADES.length}</div>
      </div>

      <div className="badge-grid">
        {TRADES.map(trade => {
          const isStamped = stamps.includes(trade.id);
          return (
            <button
              key={trade.id}
              className="trade-badge"
              onClick={() => onSelectTrade(trade.id)}
              aria-label={`${trade.name}${isStamped ? ', completed' : ''}`}
            >
              {isStamped && <span className="stamped-check">✓</span>}
              <span className="icon-hex" style={{ background: trade.color }}>
                {trade.icon}
              </span>
              <span className="trade-name">{trade.name}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
