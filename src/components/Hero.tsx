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
          Voted #1 for Reddit & Anime
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient">Your favorite Reddit wallpapers,</span>
          <br />
          <span className="text-gradient-accent">applied instantly.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Stop saving images. Start syncing them. SubPaper pulls uncompressed 4K anime & mobile backgrounds straight from top subreddits to your home screen.
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
            Download Free on Google Play
          </a>
          <a href="#features" className="btn btn-secondary">
             View Features
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
          <span>4.8/5 Rating • Over 500+ Downloads</span>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="hero-stat">
            <div className="hero-stat-value text-gradient-accent">4K+</div>
            <div className="hero-stat-label">Wallpapers</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value text-gradient-accent">50+</div>
            <div className="hero-stat-label">Communities</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value text-gradient-accent">100%</div>
            <div className="hero-stat-label">Free</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
