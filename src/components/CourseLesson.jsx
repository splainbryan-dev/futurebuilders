import { useState } from 'react';

export default function CourseLesson({ course, lesson, isDone, onComplete, onBack }) {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === lesson.check.answer;

  return (
    <div className="course-lesson">
      <button className="back-btn" onClick={onBack}>← Back to course</button>

      <p className="course-lesson-eyebrow">Week {lesson.week} of {course.lengthWeeks}</p>
      <h2 className="course-lesson-title">{lesson.title}</h2>

      <section className="course-lesson-section">
        <h3>This week's idea</h3>
        <p>{lesson.concept}</p>
      </section>

      <section className="course-lesson-section">
        <h3>Try it</h3>
        <p>{lesson.activity}</p>
      </section>

      <section className="course-lesson-section quiz-box">
        <h3>Check your understanding</h3>
        <p className="quiz-question">{lesson.check.q}</p>
        {lesson.check.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (selected !== null && i === lesson.check.answer) cls += ' correct';
          else if (selected === i && i !== lesson.check.answer) cls += ' incorrect';
          return (
            <button
              key={i}
              className={cls}
              onClick={() => setSelected(i)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          );
        })}
        {selected !== null && (
          <p className={`quiz-feedback ${isCorrect ? 'good' : 'bad'}`}>
            {isCorrect ? 'Nice work, that\'s right!' : 'Not quite — the highlighted answer is correct.'}
          </p>
        )}
      </section>

      {!isDone ? (
        <button className="stamp-btn" onClick={onComplete}>Mark this week complete</button>
      ) : (
        <p className="empty-note">You've already completed this week. Come back anytime to review it.</p>
      )}
    </div>
  );
}