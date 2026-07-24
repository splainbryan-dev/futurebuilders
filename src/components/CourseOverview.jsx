export default function CourseOverview({ trade, course, completedWeeks, onOpenLesson, onBack }) {
  return (
    <div className="course-overview">
      <button className="back-btn" onClick={onBack}>← Back to {trade.name}</button>

      <div className="course-header">
        <h2>{course.title}</h2>
        <p>A free {course.lengthWeeks}-week course — one lesson a week, about 6 months total.</p>
        <div className="course-progress-bar">
          <div
            className="course-progress-fill"
            style={{ width: `${(completedWeeks.length / course.lengthWeeks) * 100}%` }}
          />
        </div>
        <p className="course-progress-label">{completedWeeks.length} of {course.lengthWeeks} lessons complete</p>
      </div>

      <ul className="course-week-list">
        {course.lessons.map(lesson => {
          const isDone = completedWeeks.includes(lesson.week);
          return (
            <li key={lesson.week}>
              <button
                className={`course-week-btn${isDone ? ' done' : ''}`}
                onClick={() => onOpenLesson(lesson.week)}
              >
                <span className="course-week-num">Week {lesson.week}</span>
                <span className="course-week-title">{lesson.title}</span>
                {isDone && <span className="course-week-check">✓</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}