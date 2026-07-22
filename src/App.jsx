import { useEffect, useState } from 'react';
import AgeGate from './components/AgeGate';
import TradeSplash from './components/TradeSplash';
import TradeDetail from './components/TradeDetail';
import { TRADES } from './data/trades';
import './styles/global.css';

const STORAGE_KEY = 'trade-explorer-state';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { tierId: null, stamps: [] };
    return JSON.parse(raw);
  } catch {
    return { tierId: null, stamps: [] };
  }
}

export default function App() {
  const [tierId, setTierId] = useState(null);
  const [stamps, setStamps] = useState([]);
  const [activeTradeId, setActiveTradeId] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Load saved progress once on mount
  useEffect(() => {
    const saved = loadState();
    setTierId(saved.tierId);
    setStamps(saved.stamps || []);
    setLoaded(true);
  }, []);

  // Persist whenever tier or stamps change
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ tierId, stamps }));
  }, [tierId, stamps, loaded]);

  if (!loaded) return null;

  const activeTrade = TRADES.find(t => t.id === activeTradeId);

  function handleStamp(tradeId) {
    setStamps(prev => (prev.includes(tradeId) ? prev : [...prev, tradeId]));
    setActiveTradeId(null);
  }

  return (
   <div className={`app-shell${tierId && !activeTrade ? ' full-bleed' : ''}`}>
      {!tierId && <AgeGate onSelectTier={setTierId} />}

      {tierId && !activeTrade && (
        <TradeSplash
          tierId={tierId}
          stamps={stamps}
          onSelectTrade={setActiveTradeId}
          onChangeAge={() => setTierId(null)}
        />
      )}

      {tierId && activeTrade && (
        <TradeDetail
          trade={activeTrade}
          tierId={tierId}
          onBack={() => setActiveTradeId(null)}
          onStamp={handleStamp}
          alreadyStamped={stamps.includes(activeTrade.id)}
        />
      )}
    </div>
  );
}
