import { TRADES, AGE_TIERS } from '../data/trades';
import { SPLASH_LAYOUT, BADGE_COUNTER_BOX } from '../data/splashLayout';

function pct(fraction) {
  return `${(fraction * 100).toFixed(2)}%`;
}

export default function TradeSplash({ tierId, stamps, onSelectTrade, onChangeAge }) {
  const tierLabel = AGE_TIERS.find(t => t.id === tierId)?.label ?? '';

  return (
    <div className="img-splash">
      <img
        className="img-splash-bg"
        src="/images/home-splash.png"
        alt="Future Builders Kenya — Choose a Trade. Explore your future! Free education at your fingertips."
      />

      {/* Live badge counter, overlaid on top of the static "2/10" in the artwork */}
      <div
        className="img-splash-counter"
        style={{
          left: pct(BADGE_COUNTER_BOX.x0),
          top: pct(BADGE_COUNTER_BOX.y0),
          width: pct(BADGE_COUNTER_BOX.x1 - BADGE_COUNTER_BOX.x0),
          height: pct(BADGE_COUNTER_BOX.y1 - BADGE_COUNTER_BOX.y0),
        }}
      >
        <span className="img-splash-counter-star">⭐</span>
        <span>
          <span className="img-splash-counter-num">{stamps.length}/{TRADES.length}</span>
          <span className="img-splash-counter-label">Badges Earned</span>
        </span>
      </div>

      {/* Tappable hit-zones over each card in the artwork */}
      {SPLASH_LAYOUT.map(zone => {
        const trade = TRADES.find(t => t.id === zone.id);
        if (!trade) return null;
        const isStamped = stamps.includes(trade.id);
        return (
          <button
            key={zone.id}
            className="img-splash-hitzone"
            style={{
              left: pct(zone.x0),
              top: pct(zone.y0),
              width: pct(zone.x1 - zone.x0),
              height: pct(zone.y1 - zone.y0),
            }}
            onClick={() => onSelectTrade(trade.id)}
            aria-label={`${trade.name}${isStamped ? ', completed' : ''}`}
          >
            {isStamped && <span className="img-splash-check">✓</span>}
          </button>
        );
      })}

      <button className="img-splash-change-age" onClick={onChangeAge}>
        {tierLabel} · change age group
      </button>
    </div>
  );
}
