import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, ImageIcon, Share2 } from 'lucide-react';
import { useRef } from 'react';
import '../Features.css';

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Global scroll tracker for desktop (vertical)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Local scroll tracker for mobile (horizontal swipe)
  const { scrollXProgress } = useScroll({
    container: contentRef
  });

  // Tight spring for sync
  const smoothY = useSpring(scrollYProgress, { damping: 40, stiffness: 300 });
  const smoothX = useSpring(scrollXProgress, { damping: 40, stiffness: 300 });

  // Dynamically select the correct progress tracker without triggering React renders
  const activeProgress = useTransform([smoothY, smoothX], (latest) => {
    const y = (latest as number[])[0];
    const x = (latest as number[])[1];
    return window.innerWidth <= 968 ? x : y;
  });

  // Softer spring for the phone parallax rotation only (premium inertia feel)
  const softProgress = useSpring(activeProgress, { damping: 30, stiffness: 100 });

  // Crossfade timings — synced with horizontal card panels (each = 1/3 of progress)
  // Panel 1: 0–0.33, Panel 2: 0.33–0.67, Panel 3: 0.67–1.0
  // Crossfade timings — synced with panels (each = 1/3 of progress)
  const img1Opacity = useTransform(activeProgress, [0, 0.28, 0.38], [1, 1, 0]);
  const img2Opacity = useTransform(activeProgress, [0.28, 0.38, 0.60, 0.72], [0, 1, 1, 0]);
  const img3Opacity = useTransform(activeProgress, [0.60, 0.72, 1], [0, 1, 1]);

  // Premium Inertia Parallax Motion for the Phone (reduced bending)
  const phoneRotateX = useTransform(softProgress, [0, 1], [2, -2]);
  const phoneRotateY = useTransform(softProgress, [0, 0.5, 1], [-4, 0, 4]);

  // Desktop horizontal scroll: translate features-content
  const contentX = useTransform(smoothY, [0, 0.92], ["0%", "-200%"]);

  // Dot indicator opacities — synced with panels
  const dot1Opacity = useTransform(activeProgress, [0, 0.28, 0.38], [1, 1, 0.3]);
  const dot2Opacity = useTransform(activeProgress, [0.28, 0.38, 0.60, 0.72], [0.3, 1, 1, 0.3]);
  const dot3Opacity = useTransform(activeProgress, [0.60, 0.72, 1], [0.3, 1, 1]);

  return (
    <section className="features-section" id="features" ref={containerRef}>
      <div className="features-sticky-grid">

        {/* Scrolling Content */}
        <motion.div
          className="features-content"
          ref={contentRef}
          style={{ "--content-x": contentX } as any}
        >

          {/* Step 1: Direct Share */}
          <div className="feature-step">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="feature-label">
                <span className="icon"><Share2 size={14} /></span>
                New: Direct Share
              </div>
              <h2>
                <span className="text-gradient">Share from Reddit,</span>
                <br />preview instantly.
              </h2>
              <p>Test any post as your wallpaper directly from the Reddit app. No downloading, no manual cropping—just instant discovery at your fingertips.</p>
              <a href="https://play.google.com/store/apps/details?id=in.saikat.subpaper" target="_blank" rel="noopener noreferrer" className="inline-cta">
                Try it Now &rarr;
              </a>
            </motion.div>
          </div>

          {/* Step 2: 4K Engine */}
          <div className="feature-step">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="feature-label">
                <span className="icon"><Zap size={14} /></span>
                Upgraded Engine
              </div>
              <h2>
                <span className="text-gradient">Lossless quality,</span>
                <br />rock-solid stability.
              </h2>
              <p>Our upgraded engine guarantees the absolute highest-resolution images from active communities with 100% server uptime for a seamless experience.</p>
              <a href="https://play.google.com/store/apps/details?id=in.saikat.subpaper" target="_blank" rel="noopener noreferrer" className="inline-cta">
                See the Quality &rarr;
              </a>
            </motion.div>
          </div>

          {/* Step 3: Privacy & Offline */}
          <div className="feature-step">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="feature-label">
                <span className="icon"><ImageIcon size={14} /></span>
                Privacy Focused
              </div>
              <h2>
                <span className="text-gradient">No registration.</span>
                <br />Native offline mode.
              </h2>
              <p>Zero tracking, no login required. Access your favorite browsed wallpapers even without an internet connection with our built-in offline mode.</p>
              <a href="https://play.google.com/store/apps/details?id=in.saikat.subpaper" target="_blank" rel="noopener noreferrer" className="inline-cta">
                Try it Now &rarr;
              </a>
            </motion.div>
          </div>

        </motion.div>

        {/* Phone Mockup */}
        <div className="features-visual">
          <div className="sticky-phone-container">
            <div className="phone-ambient-glow" />

            <motion.div
              className="iphone-16-pro"
              style={{
                rotateX: phoneRotateX,
                rotateY: phoneRotateY
              }}
            >
              {/* Hardware Bezel */}
              <div className="iphone-frame">

                {/* Dynamic Island */}
                <div className="dynamic-island">
                  <div className="camera-lens" />
                </div>

                {/* Screen */}
                <div className="iphone-screen">
                  {/* Layered Screenshots */}
                  <motion.img
                    src="/screenshots/ss-2.webp"
                    alt="Browsing UI"
                    className="screen-img"
                    style={{ opacity: img1Opacity }}
                    loading="lazy"
                  />
                  <motion.img
                    src="/screenshots/ss-1.webp"
                    alt="4K Quality UI"
                    className="screen-img"
                    style={{ opacity: img2Opacity }}
                    loading="lazy"
                  />
                  <motion.img
                    src="/screenshots/ss-3.webp"
                    alt="Share UI"
                    className="screen-img"
                    style={{ opacity: img3Opacity }}
                    loading="lazy"
                  />
                </div>

                {/* Glare effect */}
                <div className="iphone-glare" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile-only dot indicators */}
        <div className="features-dots">
          <motion.span className="features-dot" style={{ opacity: dot1Opacity }} />
          <motion.span className="features-dot" style={{ opacity: dot2Opacity }} />
          <motion.span className="features-dot" style={{ opacity: dot3Opacity }} />
        </div>

      </div>
    </section>
  );
};

export default Features;
