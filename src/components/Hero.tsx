import { motion } from 'framer-motion';
import '../Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="pill-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="dot" />
          New: Share Directly from Reddit
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient">Your favorite subreddit posts.</span>
          <br />
          <span className="text-gradient">Now your wallpaper.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Explore stunning 4K photos curated from active communities. Direct previews, zero registration, and lossless quality on every sync.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=in.saikat.subpaper"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-pulse"
          >
            Download Free on Android
          </a>
          <a href="#features" className="btn btn-secondary">
            See How It Works
          </a>
        </motion.div>

        {/* Marketing Trust Banner */}
        <motion.div
          className="hero-trust-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <span className="hero-trust-stars">★★★★★</span>
          <span>Join 500+ users browsing fresh 4K updates daily</span>
        </motion.div>

      </motion.div>

      {/* New Apple-style Visual Block with Phone & Floating Pills */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-iphone-container">
          <div className="hero-iphone-ambient" />
          <div className="hero-iphone-frame">
            <div className="dynamic-island"><div className="camera-lens" /></div>
            <div className="hero-iphone-screen">
              <img src="/screenshots/ss-1.webp" alt="App Preview" className="screen-img-static" loading="lazy" />
            </div>
            <div className="iphone-glare" />
          </div>

          {/* Floating Pills (Apple UI Image Style) */}
          <div className="floating-bubble bubble-1">
            <span className="bubble-icon">✨</span>
            <div className="bubble-text">
              <strong>4K Ultra HD</strong>
              <span>Lossless resolution</span>
            </div>
          </div>

          <div className="floating-bubble bubble-2">
            <span className="bubble-icon">⚡</span>
            <div className="bubble-text">
              <strong>Zero Drain</strong>
              <span>Native efficiency</span>
            </div>
          </div>

          <div className="floating-bubble bubble-3">
            <span className="bubble-icon">⭐</span>
            <div className="bubble-text">
              <strong>5.0 Rating</strong>
              <span>500+ User Reviews</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
