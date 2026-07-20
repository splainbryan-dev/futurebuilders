import { useState } from 'react';
import Quiz from './Quiz';
import VideoEmbed from './VideoEmbed';

export default function TradeDetail({ trade, tierId, onBack, onStamp, alreadyStamped }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const facts = trade.facts[tierId];
  const quiz = trade.quiz[tierId];

  return (
    <div className="trade-detail">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="trade-hero">
        <span className="icon-hex-lg" style={{ background: trade.color }}>
          {trade.icon}
        </span>
        <div>
          <h2>{trade.name}</h2>
          <p>{trade.tagline}</p>
        </div>
      </div>

      <VideoEmbed videoId={trade.videoId} title={`${trade.name}: what the job is like`} />

      <ul className="facts-list">
        {facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>

      <a
        className="learn-more-link"
        href={trade.learnMore.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        📖 Learn more: {trade.learnMore.label} ↗
      </a>
      <p className="learn-more-note">
        This opens an official U.S. government careers site in a new tab — free, no ads. Kids should browse with a parent or teacher.
      </p>

      {!showQuiz && !alreadyStamped && (
        <button className="start-quiz-btn" onClick={() => setShowQuiz(true)}>
          Take the quiz →
        </button>
      )}

      {alreadyStamped && !showQuiz && (
        <p className="empty-note">You already earned this badge! 🏅 Come back anytime to re-read the facts.</p>
      )}

      {showQuiz && <Quiz quiz={quiz} onStamp={() => onStamp(trade.id)} />}
    </div>
  );
}
