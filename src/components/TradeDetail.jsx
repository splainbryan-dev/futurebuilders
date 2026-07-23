import { useState } from 'react';
import Quiz from './Quiz';
import VideoEmbed from './VideoEmbed';
import { getCourse } from '../data/courses';

export default function TradeDetail({ trade, tierId, onBack, onStamp, alreadyStamped, onOpenCourse }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const facts = trade.facts[tierId];
  const quiz = trade.quiz[tierId];
  const course = getCourse(trade.id);

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

      <VideoEmbed video={trade.video} title={`${trade.name}: what the job is like`} />

      <ul className="facts-list">
        {facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>

      {course ? (
        <button className="course-cta" onClick={() => onOpenCourse(trade.id)}>
          🎓 Start the free {course.lengthWeeks}-week course
        </button>
      ) : (
        <div className="course-cta-placeholder">
          🎓 A free multi-month course for {trade.name} is coming soon.
        </div>
      )}

      
        <a className="learn-more-link"
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
        <div className="stamp-actions">
          <button className="start-quiz-btn" onClick={() => setShowQuiz(true)}>
            Take the quiz →
          </button>
          <button className="skip-quiz-btn" onClick={() => onStamp(trade.id)}>
            Skip quiz, get stamp
          </button>
        </div>
      )}

      {alreadyStamped && !showQuiz && (
        <p className="empty-note">You already earned this badge! 🏅 Come back anytime to re-read the facts.</p>
      )}

      {showQuiz && <Quiz quiz={quiz} onStamp={() => onStamp(trade.id)} />}
    </div>
  );
}