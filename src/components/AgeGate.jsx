import { AGE_TIERS } from '../data/trades';

export default function AgeGate({ onSelectTier }) {
  return (
    <div className="age-gate">
      <div className="fb-logo">
        <span className="fb-logo-title">Future<br />Builders</span>
        <span className="fb-logo-banner">KENYA</span>
      </div>
      <h1>Pick your age group</h1>
      <p>So we can show you the right stuff!</p>
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
