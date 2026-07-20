import { useState } from 'react';

export default function Quiz({ quiz, onStamp }) {
  const [selected, setSelected] = useState(null);

  const isCorrect = selected === quiz.answer;

  return (
    <div className="quiz-box">
      <p className="quiz-question">{quiz.q}</p>
      {quiz.options.map((opt, i) => {
        let cls = 'quiz-option';
        if (selected !== null && i === quiz.answer) cls += ' correct';
        else if (selected === i && i !== quiz.answer) cls += ' incorrect';
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
        <>
          <p className={`quiz-feedback ${isCorrect ? 'good' : 'bad'}`}>
            {isCorrect ? 'Nice work! That\'s correct. 🎉' : 'Not quite — the highlighted answer is correct.'}
          </p>
          <button className="stamp-btn" onClick={onStamp}>
            Get my passport stamp 🏅
          </button>
        </>
      )}
    </div>
  );
}
