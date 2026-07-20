import { AGE_TIERS } from '../data/trades';

export default function AgeGate({ onSelectTier }) {
  return (
    <div className="age-gate">
      <h1>🧭 FutureBuilders</h1>
      <p>Pick your age group so we can show you the right stuff!</p>
      <div className="age-tier-grid">
        {AGE_TIERS.map(tier => (
          <button
            key={tier.id}
            className="age-tier-btn"
            onClick={() => onSelectTier(tier.id)}
          >
            {tier.label}
          </button>
        ))}
      </div>
    </div>
  );
}
