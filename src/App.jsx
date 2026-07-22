import { useEffect, useState } from 'react';
import AgeGate from './components/AgeGate';
import TradeSplash from './components/TradeSplash';
import TradeDetail from './components/TradeDetail';
import CourseOverview from './components/CourseOverview';
import CourseLesson from './components/CourseLesson';
import { TRADES } from './data/trades';
import { getCourse } from './data/courses';
import './styles/global.css';

const STORAGE_KEY = 'trade-explorer-state';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { tierId: null, stamps: [], courseProgress: {} };
    const parsed = JSON.parse(raw);
    return { tierId: null, stamps: [], courseProgress: {}, ...parsed };
  } catch {
    return { tierId: null, stamps: [], courseProgress: {} };
  }
}

export default function App() {
  const [tierId, setTierId] = useState(null);
  const [stamps, setStamps] = useState([]);
  const [courseProgress, setCourseProgress] = useState({}); // { [tradeId]: [weekNumbers] }
  const [activeTradeId, setActiveTradeId] = useState(null);
  const [activeCourseTradeId, setActiveCourseTradeId] = useState(null);
  const [activeLessonWeek, setActiveLessonWeek] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Load saved progress once on mount
  useEffect(() => {
    const saved = loadState();
    setTierId(saved.tierId);
    setStamps(saved.stamps || []);
    setCourseProgress(saved.courseProgress || {});
    setLoaded(true);
  }, []);

  // Persist whenever tier, stamps, or course progress change
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ tierId, stamps, courseProgress }));
  }, [tierId, stamps, courseProgress, loaded]);

  if (!loaded) return null;

  const activeTrade = TRADES.find(t => t.id === activeTradeId);
  const activeCourse = activeCourseTradeId ? getCourse(activeCourseTradeId) : null;
  const activeLesson = activeCourse?.lessons.find(l => l.week === activeLessonWeek);

  function handleStamp(tradeId) {
    setStamps(prev => (prev.includes(tradeId) ? prev : [...prev, tradeId]));
    setActiveTradeId(null);
  }

  function handleCompleteLesson() {
    setCourseProgress(prev => {
      const done = prev[activeCourseTradeId] || [];
      if (done.includes(activeLessonWeek)) return prev;
      return { ...prev, [activeCourseTradeId]: [...done, activeLessonWeek] };
    });
    setActiveLessonWeek(null);
  }

  // Screen priority: age gate -> lesson -> course overview -> trade detail -> trade splash
  let screen;
  if (!tierId) {
    screen = <AgeGate onSelectTier={setTierId} />;
  } else if (activeCourse && activeLesson) {
    screen = (
      <CourseLesson
        course={activeCourse}
        lesson={activeLesson}
        isDone={(courseProgress[activeCourseTradeId] || []).includes(activeLessonWeek)}
        onComplete={handleCompleteLesson}
        onBack={() => setActiveLessonWeek(null)}
      />
    );
  } else if (activeCourse) {
    screen = (
      <CourseOverview
        trade={TRADES.find(t => t.id === activeCourseTradeId)}
        course={activeCourse}
        completedWeeks={courseProgress[activeCourseTradeId] || []}
        onOpenLesson={setActiveLessonWeek}
        onBack={() => setActiveCourseTradeId(null)}
      />
    );
  } else if (activeTrade) {
    screen = (
      <TradeDetail
        trade={activeTrade}
        tierId={tierId}
        onBack={() => setActiveTradeId(null)}
        onStamp={handleStamp}
        alreadyStamped={stamps.includes(activeTrade.id)}
        onOpenCourse={setActiveCourseTradeId}
      />
    );
  } else {
    screen = (
      <TradeSplash
        tierId={tierId}
        stamps={stamps}
        onSelectTrade={setActiveTradeId}
        onChangeAge={() => setTierId(null)}
      />
    );
  }

  const isFullBleed = tierId && !activeTrade && !activeCourse;

  return (
    <div className={`app-shell${isFullBleed ? ' full-bleed' : ''}`}>
      {screen}
    </div>
  );
}