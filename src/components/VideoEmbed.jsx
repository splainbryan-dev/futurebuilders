import { useState } from 'react';

// Handles two kinds of video sources:
// - { type: 'youtube', id }: click-to-load facade using youtube-nocookie.com,
//   so YouTube's tracking doesn't fire until a kid actually taps play.
// - { type: 'external', url, source }: a "Watch video" button that opens the
//   video on its own site in a new tab (used for CareerOneStop's official,
//   ad-free career videos, which we don't embed since we couldn't confirm
//   they allow iframe embedding).
export default function VideoEmbed({ video, title }) {
  const [playing, setPlaying] = useState(false);

  if (!video) {
    return (
      <div className="video-placeholder">
        🎬 Video coming soon for this trade — for now, check out the facts below.
      </div>
    );
  }

  if (video.type === 'external') {
    return (
      <a
        className="video-external-link"
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="video-external-play">▶</span>
        <span>
          <span className="video-external-title">Watch: {title}</span>
          <span className="video-external-source">{video.source} · opens in a new tab</span>
        </span>
      </a>
    );
  }

  // type === 'youtube'
  if (!playing) {
    return (
      <button
        className="video-facade"
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${title}`}
      >
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
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
        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}
