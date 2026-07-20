import { useState } from 'react';

// Facade pattern: shows a thumbnail + play button and only loads the actual
// YouTube iframe (and its tracking) after the kid taps play. Uses
// youtube-nocookie.com, YouTube's privacy-enhanced embed domain.
export default function VideoEmbed({ videoId, title }) {
  const [playing, setPlaying] = useState(false);

  if (!videoId) {
    return (
      <div className="video-placeholder">
        🎬 Video coming soon for this trade — for now, check out the facts below.
      </div>
    );
  }

  if (!playing) {
    return (
      <button
        className="video-facade"
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${title}`}
      >
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="video-thumb"
        />
        <span className="video-play-badge">▶</span>
      </button>
    );
  }

  return (
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}
